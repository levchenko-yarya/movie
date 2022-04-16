// const Sequelize = require('sequelize')
// const db = require('../db')

// const Movie = db.define('list', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.TEXT,
//         allowNull: false
//     },
//     genre: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     url: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     list: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// })

// db.sync()
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

// module.exports = Movie