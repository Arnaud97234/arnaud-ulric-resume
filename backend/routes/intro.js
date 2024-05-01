var express = require("express");
var router = express.Router();
require("../models/connection");

const Intro = require("../models/intro");

router.get("/", async function (req, res) {
  const intro = await Intro.find();

  res.json({ intro });
});

module.exports = router;
