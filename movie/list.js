const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync()
    .then(result => console.log(result))
    .catch(err => console.log(err))


module.exports = List