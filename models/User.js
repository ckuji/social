const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    messages: [{type: Types.ObjectId, ref: 'Messages'}]
})

module.exports = model('User', schema)