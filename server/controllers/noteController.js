const Note = require("../models/Note");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.render("homepage", { notes });
  } catch (error) {
    console.error(error);
    res.send("Error fetching notes");
  }
};

exports.getNewNoteForm = (req, res) => {
  res.render("note/new");
};

exports.createNewNoteForm = async (req, res) => {
  const { title, content } = req.body;

  try {
    await Note.create({ title, content });
    res.redirect("/homepage");
  } catch (error) {
    console.error(error);
    res.send("Error creating note");
  }
};

exports.getEditNoteForm = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    res.render("note/edit", { note });
  } catch (error) {
    console.error(error);
    res.send("Error fetching note");
  }
};

exports.updateNoteForm = async (req, res) => {


  try {
await Note.findOneAndUpdate({_id:req.params.id},
  {title: req.body.title,
    content:req.body.content
  }
)
res.redirect('/homepage')
  } catch (error) {
    console.error(error);
    res.send("Error updating note");
  }
};

exports.deleteNote = async (req, res) => {


  try {
 await Note.findOneAndDelete({ _id: req.params.id});
    res.redirect("/homepage");
  } catch (error) {
    console.error(error);
    res.send("Error deleting note");
  }
};

// async function dummyData() {
//   const data = [
//     {
//       title: "dog",
//       content: "It is hungry"
//     }
//   ];

//   try {
//     await Note.insertMany(data);
//     console.log("Dummy data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting dummy data:", error);
//   }
// }

// dummyData();
