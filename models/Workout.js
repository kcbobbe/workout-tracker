const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseModule = require("./Exercise")

const WorkoutSchema = new Schema({
  workout: [ExerciseModule.schema]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;