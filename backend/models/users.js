const mongoose = require('mongoose')

const linksSchema = mongoose.Schema({
    name: String,
    url: String,
    icon: String
})

const skillsSchema = mongoose.Schema({
    name: String,
    icon: String
})

const languagesSchema = mongoose.Schema({
    name: String,
    level: String
})

const diplomasSchema = mongoose.Schema({
    title: String,
    date: Date
})

const userSchema = mongoose.Schema({
    token: String,
    name: String,
    email: String,
    title: String,
    subTitle: String,
    links: [linksSchema],
    desc: Array,
    languages: [languagesSchema],
    diplomas: [diplomasSchema],
    skills: [skillsSchema],
    experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'experiences' }],
    expertises: { type: mongoose.Schema.Types.ObjectId, ref: 'expertises' },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'projects' }]
})

const User = mongoose.model('users', userSchema)

module.exports = User