'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('states', [{
            state: 'смотрю'
        }, {
            state: 'буду смотреть'
        }, {
            state: 'просмотрено'
        }])
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('states', null, {})
    }
};
