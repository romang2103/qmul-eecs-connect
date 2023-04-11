const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json()); // use body-parser middleware to parse JSON

const uri = "mongodb+srv://se53:password123!@cluster0.fdolhxg.mongodb.net/eecs-connect?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});



const User = mongoose.model('User', UserSchema);


// Login Auth
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body; // destructure email and password from the request body
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// Define schema for 'services' collection
const serviceSchema = new mongoose.Schema({
  service: { type: String, required: true },
  status: { type: Boolean, required: true },
});

// Create 'Service' model
const Service = mongoose.model('Service', serviceSchema);

// Fetch data for service status table
app.get("/services", async (req, res) => {
  try {
    const services = await Service.find({});
    console.log(services);
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// Define endpoint for toggling service status
app.put('/services/:id/toggle', async (req, res) => {
  try {
    console.log("updating service status")
    const serviceId = req.params.id;
    
    // Find service by id
    const service = await Service.findById(serviceId);
    
    // Toggle service status
    service.status = !service.status;
    
    // Save updated service to MongoDB
    await service.save();
    
    res.json(service);
  } catch (error) {
    console.error('Error toggling service status:', error);
    res.status(500).json({ error: 'Failed to toggle service status' });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
