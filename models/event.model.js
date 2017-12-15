

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    userID: { type: String, required: true, trim: true },
    eName: { type: String, required: true },
    eLOGO: { type: String },
    eDate: [{
        startDate: { type: Number, required: true },
        endDate: { type: Number, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true }
    }],
    eSign: [{
        uid: String,
        status: Number
    }],
    eLocat: { type: String, required: true },
    eCap: { type: Number, required: true },
    eMainDetail: { type: String, required: true },
    status: { type: Number, required: true },
    eSubDetail: [{
        key: String,
        value: String
    }],
    createdAt: { type: Number, default: new Date().getTime() },
    expiredAt: { type: Number },
    updatedAt: { type: Number, default: new Date().getTime() },
})



module.exports = mongoose.model('_Event', eventSchema)