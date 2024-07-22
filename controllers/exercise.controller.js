const Exercise = require("../models/exercise.model");

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ mesage: error.message });
  }
};

const getExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id);
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedExercise = await Exercise.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const exercise = await Exercise.findByIdAndDelete(id);

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.status(200).json({ message: " Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExercises,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise,
};
