const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
    title: String,
    company: String,
    desc: Array,
    startDate: Date,
    endDate: Date
})

const Experience = mongoose.model('experiences', experienceSchema)

module.exports = Experience