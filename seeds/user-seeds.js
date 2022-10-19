const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
    {
        username: 'ajared',
        email: 'ajared@gmail.com',
        password: '12345pass'
    },
    {
        username: 'another',
        email: 'username@aol.com',
        password: 'passing567'
    },
    {
        username: 'john',
        email: 'john@yahoo.com',
        password: 'john12'
    },
    {
        username: 'postmane',
        email: 'mail@gmail.com',
        password: 'password'
    },
];


const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;