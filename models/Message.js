const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    sender: {type: Types.ObjectId, required: true},

    participants: [
        {type: Types.ObjectId, required: true},
        {type: Types.ObjectId, required: true}
    ],
    text: {type: String, max: 300},
    date: {type: Date, default: Date.now}
})

module.exports = model('Message', schema)