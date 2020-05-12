const mongoose = require('mongoose')

const connectionURL  = process.env.MONGODBURL

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    connectTimeoutMS: 5000
})