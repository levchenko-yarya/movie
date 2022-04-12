require('dotenv').config()

const express = require('express')
const cors = require('cors')
//const movieRouter = require('./movie/router')
//const genreRouter = require('./movie/genre.router')
const app = express()
app.set('view engine', 'hbs')
//app.use('/movie', movieRouter)

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

require('./movie/genre.router')(app)

//module.exports = app

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});