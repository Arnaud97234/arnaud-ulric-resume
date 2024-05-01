var express = require("express");
var router = express.Router();
require("../models/connection");

const Profile = require("../models/profiles");

router.get("/", async function (req, res) {
  const profile = await Profile.find();
  res.json({ profile });
});

module.exports = router;
