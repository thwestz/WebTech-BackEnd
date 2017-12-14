const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authSchema = new Schema({
    uid: { type: String,required: true, trim: true},
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    status: { type: Number, required: true },    
    types: { type: Number, required: true },  

    createdAt: { type: Number, default: new Date().getTime() },
    expiredAt: { type: Number, default: new Date().getTime() + (60 * 60 * 60 * 24) },
    updatedAt: { type: Number, default: new Date().getTime() },
})



module.exports = mongoose.model('Auth', authSchema)