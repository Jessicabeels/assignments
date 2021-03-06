const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema defines what the data shoule look like (enforces)
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model("Todo", todoSchema) //todo blueprint