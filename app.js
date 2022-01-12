const express = require('express')
const movieRouter = require('./movie/router')
const app = express()

app.set('view engine', 'hbs')

app.use('/movie', movieRouter)

app.get('/', (req, res) => {
    res.send('Movie site - information page of watched movies')
})

module.exports = app