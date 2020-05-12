const mongoose = require('mongoose')

const beerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    style: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true
    },
    abv: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    meta: {
        likes: Number,
        avgscore: Number
    }
})

 const Beer = mongoose.model('Beer', beerSchema)

 module.exports = Beer
