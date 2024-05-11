const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Note", NoteSchema);
