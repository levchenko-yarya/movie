require('dotenv').config()

const express = require('express')
const cors = require('cors')
//const movieRouter = require('./list/router')
//const genreRouter = require('./list/genre.router')
const app = express()
app.set('view engine', 'hbs')
//app.use('/list', movieRouter)

let corsOptions = {
    origin: "http:localhost:3000"
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require('./db')
db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({message: "hello mee"})
    //res.render('genre/add.hbs')
    //res.send('Movie site - information page of watched movies')
})

require('./genre/genre.router')(app)
require('./state/state.router')(app)
require('./list/list.router')(app)

//module.exports = app

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});