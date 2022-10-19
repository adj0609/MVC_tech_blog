const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_text: 'https://stanford.edu/consequat.png',
        user_id: 4
      },
      {
        title: 'In hac habitasse platea dictumst.',
        post_text: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 1
      },
      {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_text: 'http://ucla.edu/consequat/nulla.html',
        user_id: 1
      },
      {
        title: 'Duis ac nibh.',
        post_text: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
        user_id: 2
      }
];

const seedPosts =() => Post.bulkCreate(postdata);

module.exports = seedPosts;

