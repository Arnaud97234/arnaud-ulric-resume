var express = require("express")
var router = express.Router()
require("../models/connection")

const Projects = require("../models/projects")

router.get("/", async function(req, res) {
    const projects = await Projects.find()

    res.json({ projects })
})

module.exports = router