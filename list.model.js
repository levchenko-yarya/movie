const Genre = require('./movie/genre')

module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
        fullname: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    //List.hasMany(models.Genre, {as: 'genres', foreignKey: 'listId'})   

    return List
}