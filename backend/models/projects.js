const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    techs: Array,
    desc: String,
    links: Array,
    image: String
})

const Project = mongoose.model('projects', projectSchema)

module.exports = Project