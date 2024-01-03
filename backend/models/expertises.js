const mongoose = require('mongoose')

const toolsSchema = mongoose.Schema({
    name: String,
    level: Number
})

const techsSchema = mongoose.Schema({
    name: String,
    level: Number
})

const ExpertiseSchema = mongoose.Schema({
    tools: [toolsSchema],
    techs: [techsSchema]
})

const Expertise = mongoose.model('Expertises', ExpertiseSchema)

module.exports = Expertise