var express = require('express');
var router = express.Router();

require("../models/connection")
const User = require("../models/users")
const Experience = require("../models/experiences")
const Expertise = require("../models/expertises")
const Project = require("../models/projects")

router.get('/users/:email', async function (req, res, next) {
  const user = await User.findOne({ "email": req.params.email })
  res.json({ result: true, user })
});

router.get('/experiences', async function (req, res) {
  const experiences = await Experience.find()
  res.json({ result: true, experiences })
})

router.get('/expertises', async function (req, res) {
  const expertises = await Expertise.find()
  res.json({ result: true, expertises })
})

router.get('/projects', async function (req, res) {
  const projects = await Project.find()
  res.json({ result: true, projects })
})

module.exports = router;
