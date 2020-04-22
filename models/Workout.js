const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExerciseModule = require("./Exercise")

// const WorkoutSchema = new Schema({
//   exercises: [ExerciseModule.schema]
// })

// const Workout = mongoose.model("Workout", WorkoutSchema);

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [ExerciseModule.schema]
    // {
    //   type: String,
    //   name: String,
    //   duration: Number,
    //   distance: Number,
    //   weight: Number,
    //   sets: Number,
    //   reps: Number
    // }
  
  // exercises: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;