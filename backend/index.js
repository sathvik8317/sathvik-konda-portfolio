const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://sathvik-konda-portfolio.netlify.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

// Connect to MongoDB without the deprecated options
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

app.post('/api/messages', (req, res) => {
  console.log("Received message:", req.body);
  const { name, email, message } = req.body;

  const newMessage = new Message({
    name,
    email,
    message,
  });

  newMessage.save()
    .then(() => res.json('Message sent!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});