const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const db = require("./server/database/db");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(methodOverride("_method"));
app.set("layout", "./layouts/main");

// routes
app.use("/", require("./server/routes/authRoute"));
app.use("/", require("./server/routes/noteRoute"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
