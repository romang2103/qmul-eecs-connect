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

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
