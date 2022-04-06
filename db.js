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

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.list = require('./list.model')(sequelize, Sequelize)
db.genre = require('./movie/genre')(sequelize, Sequelize)

module.exports = db