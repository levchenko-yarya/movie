const Sequelize = require('sequelize')
const db = require('../db')

const State = df.define('state', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync()
    .then(result => console.log(result))
    .catch(err => console.log(err))

module.exports = State