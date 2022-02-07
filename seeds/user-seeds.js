
const { User } = require('../models');

const userData = [{
        username: 'goku',
        password: 'gogeta'

    },
    {
        username: 'vegeta',
        password: 'vegito'
    },
    {
        username: 'goten',
        password: 'gotenks'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;