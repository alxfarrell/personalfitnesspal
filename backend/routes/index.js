const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let exercises;
try {
  const dataPath = path.join(__dirname, "exercise-data.json");
  const data = fs.readFileSync(dataPath, "utf8");
  exercises = JSON.parse(data);
} catch (err) {
  console.error("Failed to load", err);
  exercises = { "Exercise List": [] };
}

router.get("/exercises", (req, res) => {
  res.json(exercises);
});

router.get("/workout/:muscleGroup", (req, res) => {
  const muscleGroup = req.params.muscleGroup;
  const regex = new RegExp(muscleGroup, "i");
  const matched = exercises["Exercise List"].filter((exercise) =>
    exercise.MuscleGroup.match(regex)
  );
  const randomExercise =
    matched[Math.floor(Math.random() * matched.length)];
  res.json({ exercise: randomExercise });
});

router.get("/workout-target/:target", (req, res) => {
  const target = req.params.target;
  const level = req.query.level;
  let matched = exercises["Exercise List"].filter(
    (exercise) => exercise["U/L/C"].toLowerCase() === target.toLowerCase()
  );
  if (level) {
    matched = matched.filter((exercise) => exercise["Level"] === level);
  }
  const randomExercise =
    matched[Math.floor(Math.random() * matched.length)];
  res.json({ exercise: randomExercise });
});

router.get("/random-workout", (req, res) => {
  const muscleGroup = req.query.muscleGroup;
  const level = req.query.level;
  const num = parseInt(req.query.num) || 1;

  if (!muscleGroup) {
    return res.status(400).json({ error: "mMscle Group is required" });
  }

  const regex = new RegExp(muscleGroup, "i");
  let filtered = exercises["Exercise List"].filter((exercise) =>
    exercise.MuscleGroup.match(regex)
  );

  if (level) {
    filtered = filtered.filter((exercise) => exercise["Level"] === level);
  }

  if (!filtered.length) {
    return res.status(400).json({
      error: "No exercises in that muscle group or level",
    });
  }

  const workout = Array.from({ length: num }, () =>
    filtered[Math.floor(Math.random() * filtered.length)]
  );

  res.json(workout);
});

router.get("/exercises/level/:level", (req, res) => {
  const level = req.params.level.toLowerCase();
  const matched = exercises["Exercise List"].filter(
    (exercise) => exercise["Level"].toLowerCase() === level
  );
  res.json({ exercises: matched });
});

module.exports = router;
