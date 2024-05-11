const express = require("express");
const Note = require('../models/Note')
const router = express.Router();
const noteController = require("../controllers/noteController");

router.get("/homepage", noteController.getAllNotes);
router.get("/new", noteController.getNewNoteForm);
router.post("/new", noteController.createNewNoteForm);
router.get("/edit/:id", noteController.getEditNoteForm);
router.put("/edit/:id", noteController.updateNoteForm);
router.delete("/delete/:id", noteController.deleteNote);

module.exports = router;
