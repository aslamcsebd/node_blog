'use strict';
const { faker } = require('@faker-js/faker');

const UserList = [...Array(5)].map((type) => (
    {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

const AddressList = [...Array(5)].map((type) => (
    {
        address: faker.lorem.sentence(),
        userId: faker.number.int({ min: 1, max: 3 }),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

const PostCategory = [...Array(10)].map((type) => (
    {
        postId: faker.number.int({ min: 1, max: 5 }),
        categoryId: faker.number.int({ min: 1, max: 5 }),
    }
))

module.exports = {
    async up (queryInterface, Sequelize) {
        // await queryInterface.bulkInsert('Addresses', all, {});
        return queryInterface.bulkInsert('Users', UserList, {returning: true}).then(function(anyName){
            return queryInterface.bulkInsert('Addresses', AddressList, {returning: true}).then(function(anyName){
                return queryInterface.bulkInsert('PostCategories', PostCategory, {});        
            })
        });
    },

    async down (queryInterface, Sequelize) {
        // await queryInterface.bulkDelete('Addresses', null, {});
        return queryInterface.bulkDelete('Users', null, {returning: true}).then(function(anyName){
            return queryInterface.bulkDelete('Addresses', null, {returning: true}).then(function(anyName){
                return queryInterface.bulkDelete('PostCategories', null, {});        
            })
        });
    }
};

// https://stackoverflow.com/questions/46047935/sequelize-js-orm-seeder-for-multiple-relational-table