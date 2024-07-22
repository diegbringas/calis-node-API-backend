const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    description: {
      type: "String",
      required: true,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Exercise = mongoose.model("Exercise",ExerciseSchema);

module.exports = Exercise; 