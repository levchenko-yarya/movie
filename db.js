const dbConfig = require('./config')

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const Genre = require('./genre/genre.model')(sequelize, Sequelize)
const State = require('./state/state.model')(sequelize, Sequelize)
const List = require('./list/list.model')(sequelize, Sequelize)

Genre.hasMany(List)
State.hasMany(List)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.genre = Genre
db.state = State
db.list = List


module.exports = db