const express =  require('express')

const blogRoute = express.Router()

blogRoute.get('/blog-posts', (req, res, next) => {
    res.render('Display all beers in beer collection.')
})


module.exports = blogRoute