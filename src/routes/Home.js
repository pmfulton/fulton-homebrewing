const express =  require('express')

const homeRoute = express.Router()

homeRoute.get('/', (req, res, next) => {
    res.send('Site homepage!')
})

module.exports = homeRoute