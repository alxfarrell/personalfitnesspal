const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/personalfitnesspal';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Import routes
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');

// Use routes
app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.send('Personal Fitness Pal backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});