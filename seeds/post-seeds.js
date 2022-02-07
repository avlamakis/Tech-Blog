const { Post } = require('../models');

const postData = [{
        title: 'Dragon Ball',
        content: 'Goku challenges Piccolo to a fight after finding out Raditz has kidnapped Gohan',
        user_id: 1

    },
    {
        title: 'Dragon Ball Z',
        content: 'Goku must beat Frieza as planet Earths falls in his hands',
        user_id: 2
    },
    {
        title: 'Dragon Ball Super',
        content: 'Goku and Vegeta must surpass their levels to become gods to beat Jiren',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;