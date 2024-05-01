const mongoose = require("mongoose");

const linksSchema = mongoose.Schema({
  name: String,
  url: String,
  icon: String,
});

const profileSchema = mongoose.Schema({
  name: String,
  email: String,
  title: String,
  subTitle: String,
  links: [linksSchema],
});

const Profile = mongoose.model("profiles", profileSchema);

module.exports = Profile;
