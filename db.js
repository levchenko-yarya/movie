const Sequelize = require('sequelize')

const db = new Sequelize("moviedb", "root", "123456", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = db