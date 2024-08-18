'use strict';
const { faker } = require('@faker-js/faker');

const all = [...Array(10)].map((type) => (
    {
        content: faker.lorem.sentence(),
        postId: faker.number.int({ min: 1, max: 20 }),
        userId: faker.number.int({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Comments', all, {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Comments', null, {});
    }
};