const express = require("express");
const Exercise = require("../models/exercise.model.js");
const router = express.Router();
const {getExercises,getExercise, createExercise, updateExercise, deleteExercise} = require('../controllers/exercise.controller.js')

router.get('/', getExercises);
router.get("/:id", getExercise);

router.post("/", createExercise);

router.put("/:id", updateExercise);

router.put("/:id", deleteExercise);

module.exports = router;