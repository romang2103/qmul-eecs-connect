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
  password: String,
  tickets: [{
    subject: String,
    description: String,
    category: String,
    priority: String,
    attachments: Array,
    status: String,
    responseMessage: String,
    responded: Boolean
  }]
});



const User = mongoose.model('User', UserSchema);


// Login Auth
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body; // destructure email and password from the request body
    const user = await User.findOne({ email, password });
    if (user) {
      res.json(user)
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

// Fetch data for service status table
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id; // Extract user ID from URL params
    const user = await User.findById(userId); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const tickets = user.tickets || []; // Extract tickets from user data, assuming tickets are stored as an array in the user object
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ error: 'Failed to fetch tickets' });
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

// Endpoint to handle ticket submission
app.post('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const newTicket = req.body; // Ticket data sent in the request body

  try {
    // Find the user by userId in MongoDB
    const user = await User.findOne({ _id: userId });

    if (user) {
      user.tickets.push(newTicket); // Add newTicket to the user's tickets array
      await user.save(); // Save the updated user object to MongoDB

      res.status(200).json({ message: 'Ticket added successfully!' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error adding ticket:', error);
    res.status(500).json({ error: 'Failed to add ticket' });
  }
});

// Ticket Schema
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String
});

// Ticket Model
const Ticket = mongoose.model('Ticket', ticketSchema);

// Update Ticket
app.put('/users/:userId/:ticketId', async (req, res) => {
  try {
    const { userId, ticketId } = req.params;
    const { description } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, { description }, { new: true });

    // Send updated ticket as response
    res.json(updatedTicket);

    // Alternatively, you can use Axios to send the updated ticket as response
    // axios.put(`http://localhost:${PORT}/users/${userId}/${ticketId}`, { description })
    //   .then(response => res.json(response.data))
    //   .catch(error => res.status(500).json({ error: 'Failed to update ticket' }));

  } catch (err) {
    res.status(500).json({ error: 'Failed to update ticket' });
  }
});

// Delete Ticket
app.delete('/users/:userId/:ticketId', async (req, res) => {
  try {
    const { userId, ticketId } = req.params;

    await Ticket.findByIdAndDelete(ticketId);

    // Send success message as response
    res.json({ message: 'Ticket deleted successfully' });

    // Alternatively, you can use Axios to send the success message as response
    // axios.delete(`http://localhost:${PORT}/users/${userId}/${ticketId}`)
    //   .then(response => res.json(response.data))
    //   .catch(error => res.status(500).json({ error: 'Failed to delete ticket' }));

  } catch (err) {
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
