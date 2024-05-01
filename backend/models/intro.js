const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  name: String,
  icon: String,
});

const IntroSchema = mongoose.Schema({
  desc: Array,
  skills: [skillsSchema],
});

const Intro = mongoose.model("intros", IntroSchema);

module.exports = Intro;
