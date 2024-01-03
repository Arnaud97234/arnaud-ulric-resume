const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    techs: Array,
    desc: String,
    links: Array
})

const Project = mongoose.model('projects', projectSchema)

module.exports = Project