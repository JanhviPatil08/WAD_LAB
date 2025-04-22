const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Import dotenv to load variables from .env file
const noteRoutes = require('./routes/notes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/notes', noteRoutes);

// DB Connection
const dbURI = process.env.MONGO_URI; 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Atlas connected');
    app.listen(PORT, () => console.log('WriteIt backend running on port', PORT));
  })
  .catch((err) => console.error(err));

