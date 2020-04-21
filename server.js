const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3010;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercisedb", { useNewUrlParser: true });

db.Workout.create(
  {
    workout: [
      {
        type: "Cardio",
        name: "Jogging",
        duration: 19,
        distance: 9
      }
    ]
  }
).then(dbWorkout => {
  console.log(dbWorkout)
})

db.Exercise.create(
  { 
    type: "Cardio",
    name: "Jogging",
    duration: 19,
    distance: 9
  })
  .then(dbExercise => {
    console.log(dbExercise)
  })

// html routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
}) 

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
})

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
})

// app.get("/exercise" ,(req, res) => {
//   db.Exercise.find({})
//   .then(dbExercise => {
//     res.send(dbExercise)
//   })
// })

app.get("/api/workouts/range" ,(req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err);
  });
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
