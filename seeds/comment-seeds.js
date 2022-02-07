const { Comment } = require('../models');

const commentData = [{
        comment_text: "Goku is going to have a bright future as the number 1 saiyan",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Vegeta is the prince of all saiyans and the true number 1 in the universe",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Goten has the best potential out of all warriors",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;