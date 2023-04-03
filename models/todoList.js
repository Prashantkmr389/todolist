
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    due: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('Todo', schema)
module.exports = Todo

