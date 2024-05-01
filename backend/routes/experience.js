var express = require("express");
var router = express.Router();
require("../models/connection");

const Experiences = require("../models/experiences");
const Expertises = require("../models/expertises");
const Diplomas = require("../models/diplomas");

router.get("/", async function (req, res) {
  const experiences = await Experiences.find();
  const expertises = await Expertises.find();
  const diplomas = await Diplomas.find();

  res.json({ experiences, expertises, diplomas });
});

module.exports = router;
