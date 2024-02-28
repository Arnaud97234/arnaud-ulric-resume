const mongoose = require('mongoose')

const toolsSchema = mongoose.Schema({
    name: String,
    level: Number,
    icon: String
})

const techsSchema = mongoose.Schema({
    name: String,
    level: Number,
    icon: String
})

const ExpertiseSchema = mongoose.Schema({
    tools: [toolsSchema],
    techs: [techsSchema]
})

const Expertise = mongoose.model('expertises', ExpertiseSchema)

module.exports = Expertise