const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { default: axios } = require('axios');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://se53:password123!@cluster0.fdolhxg.mongodb.net/eecs-connect?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  tickets: [{
    subject: String,
    description: String,
    category: String,
    priority: String,
    attachments: Array,
    status: String,
    responseMessage: String,
    responded: Boolean,
    userId: String
  }]
});



const User = mongoose.model('User', UserSchema);


// Login Auth
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;
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
    const tickets = user.tickets || []; // Extract tickets from user data
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

// Ticket Schema
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String
});

// Ticket Model
const Ticket = mongoose.model('Ticket', ticketSchema);

// Endpoint to handle ticket submission
app.post('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const newTicket = req.body; // Ticket data sent in the request body

  try {
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

// Delete Ticket
app.delete('/users/:userId/:ticketId', async (req, res) => {
  try {
    const { userId, ticketId } = req.params;

    // Find user using userId
    const user = await User.findOne({ _id: userId });

    // Find and delete ticket using ticketId
    user.tickets.pull(ticketId);

    // Save the updated user document
    await user.save();

    // Send success message as response
    res.json({ message: 'Ticket deleted successfully' });

  } catch (err) {
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});

// Route to fetch all tickets from all users with role = 'user' and responded = false
app.get('/users', async (req, res) => {
  try {
    // Fetch all users with role = 'user' from the database
    const users = await User.find({ role: 'user' , 'tickets.responded': false});

    // Extract tickets from all users
    const allTickets = users.reduce((acc, user) => {
      const nonResTickets = user.tickets.filter(ticket => !ticket.responded);
      return [...acc, ...nonResTickets];
    }, []);

    // Send the tickets as JSON response
    res.json(allTickets);
  } catch (err) {
    console.error('Error fetching tickets:', err);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// Route to update a ticket with a response message
app.patch('/users/:userId/:ticketId', async (req, res) => {
  try{
    const { userId, ticketId } = req.params;
    const { responseMessage } = req.body;

    // Find user
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Find ticket
    const ticket = user.tickets.find(ticket => ticket._id.toString() === ticketId);

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket not found.' });
    }

    // Update responseMessage
    ticket.responseMessage = responseMessage;

    // Update responded boolean to true
    ticket.responded = true;

    // Save changes
    await user.save();

    return res.json({ success: true, message: 'Response submitted successfully!' });

  } catch (err) {
    res.status(404).json({ success: false, message: 'Failed to respond to ticket.' });
  }
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
