const express =  require('express')

const beerRoute = express.Router()

beerRoute.get('/all-beers', (req, res, next) => {
    res.render('Display all beers in beer collection.')
})

module.exports = beerRoute