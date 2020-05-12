const mongoose = require('mongoose')

const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }, 
    email: {
        type: String,
        trim: true,
        required: true
    }
})

const User = mongoose.model('User', userSchema)


module.exports = User