const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Movie site - information page of watched movies')
})

app.listen(3000, () => {
    console.log('server is started')
})