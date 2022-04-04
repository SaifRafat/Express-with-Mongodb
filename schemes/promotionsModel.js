const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promoSchema = new Schema({
    name:{type:String},
    image:{type:String},
    label:{type:String},
    price:{type:Number},
    descrpition:{type:String},
    featured:{type:String}
}, {timestamps: true})

const Promotions = mongoose.model('Promotions', promoSchema)
module.exports = Promotions