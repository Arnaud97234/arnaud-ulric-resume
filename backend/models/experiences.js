const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: String,
    link: String
})

const ExperienceSchema = mongoose.Schema({
    title: String,
    company: companySchema,
    desc: Array,
    startDate: Date,
    endDate: Date,
    techs: Array
})

const Experience = mongoose.model('experiences', ExperienceSchema)

module.exports = Experience