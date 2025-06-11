const express = require('express');
const path = require('path');
const router = express.Router();
const Workout = require('../models/workout');

// Serve workouts page (if you use React routing and want it to fallback to index.html)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Create a new workout
router.post('/add', async (req, res) => {
  try {
    const { title, reps, load } = req.body;

    const newWorkout = new Workout({ title, reps, load });
    await newWorkout.save();

    res.status(201).json({
      message: 'Workout created successfully',
      workout: newWorkout
    });
  } catch (err) {
    console.error('Error creating workout:', err);
    res.status(500).json({ error: 'Failed to create workout' });
  }
});

// Get all workouts
router.get('/all', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    console.error('Error fetching workouts:', err);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// Get a single workout by ID
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (err) {
    console.error('Error fetching workout:', err);
    res.status(500).json({ error: 'Failed to fetch workout' });
  }
});

// Update a workout by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, reps, load } = req.body;

    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { title, reps, load },
      { new: true }
    );

    if (!updatedWorkout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json({
      message: 'Workout updated successfully',
      workout: updatedWorkout
    });
  } catch (err) {
    console.error('Error updating workout:', err);
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

// Delete a workout by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);

    if (!deletedWorkout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json({ message: 'Workout deleted successfully' });
  } catch (err) {
    console.error('Error deleting workout:', err);
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

module.exports = router;
