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
    return List
}