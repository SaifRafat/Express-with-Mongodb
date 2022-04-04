const { string } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaderSchema = new Schema({
    name:{type:String},
    image:{type:String},
    designation:{type:String},
    abbr:{type:String},
    description:{type:String},
    featured:{type:String}    
    
}, {timestamps: true})

const Leaders = mongoose.model('Leaders', leaderSchema)
module.exports = Leaders