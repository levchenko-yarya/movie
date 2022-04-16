module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define('state', {
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
    return State
}