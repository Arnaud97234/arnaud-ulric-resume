const mongoose = require("mongoose");

const diplomasSchema = mongoose.Schema({
  title: String,
  date: Date,
});

const Diploma = mongoose.model("diplomas", diplomasSchema);

module.exports = Diploma;
