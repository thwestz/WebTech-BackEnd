const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    // _id: { type: String, required: true, default: shortid.generate },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    // photo: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    // location: String,
    // about: String,
    // role: { type: String, enum : ['ADMIN', 'USER'], required: true, default: 'USER' },
    // createdAt: { type: Number, default: new Date().getTime() },
    // updatedAt: { type: Number, default: new Date().getTime() }
})


module.exports = mongoose.model('User', userSchema)