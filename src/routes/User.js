const express =  require('express')

const userRoute = express.Router()

userRoute.get('/user-profile', (req, res, next) => {
    res.render('Display all the user profile.')
})

module.exports = userRoute