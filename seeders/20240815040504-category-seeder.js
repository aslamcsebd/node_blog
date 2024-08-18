'use strict';
const { faker } = require('@faker-js/faker');

const users = [...Array(10)].map((user) => (
    {
        name: faker.person.firstName(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Categories', users, {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};

/*
module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Categories', [
            {
                name: 'John Doe',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'John Doe2',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
*/