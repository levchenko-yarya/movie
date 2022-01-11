const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Movie site - information page of watched movies')
})

module.exports = app