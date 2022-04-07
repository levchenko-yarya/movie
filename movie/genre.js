module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define('genre', {
        title: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })
    return Genre
}