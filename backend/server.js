const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/personalfitnesspal';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

<<<<<<< HEAD
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
=======
const workoutRouter = require('./routes'); // uses index.js by default
app.use('/api', workoutRouter); // Routes: /api/exercises, /api/random-workout, etc.

const clientBuildPath = path.join(__dirname, 'build'); // assuming CRA was built here
if (process.env.NODE_ENV === 'production' && require('fs').existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
>>>>>>> 0ffe0aab53f11c16eb745e0c6754e16175c9790a
