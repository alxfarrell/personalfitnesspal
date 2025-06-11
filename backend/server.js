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
