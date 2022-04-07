const dbConfig = require('./config')

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

const Genre = require('./movie/genre')(sequelize, Sequelize)
const List = require('./list.model')(sequelize, Sequelize)

Genre.hasMany(List)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.genre = Genre
db.list = List

module.exports = db