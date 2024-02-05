var express = require('express')
var router = express.Router()

require("../models/connection")
const User = require("../models/users")
const Project = require("../models/projects")
const Expertise = require("../models/expertises")
const Experience = require("../models/experiences")
const Tool = require("../models/experiences")
const Tech = require("../models/experiences")

router.get('/users/:email', async function (req, res, next) {
  const user = await User.findOne({ "email": req.params.email })
    .populate('experiences')
    .populate('expertises')
    .populate('projects')

  res.json({ result: true, user })
})

module.exports = router
