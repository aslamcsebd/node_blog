'use strict';
const { faker } = require('@faker-js/faker');

const all = [...Array(10)].map((type) => (
    {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        imageUrl: faker.image.url(),
        categoryId: faker.number.int({ min: 1, max: 10 }),
        userId: faker.number.int({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

module.exports = {
    async up (queryInterface, Sequelize) {    
        await queryInterface.bulkInsert('Posts', all, {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Posts', null, {});
    }
};