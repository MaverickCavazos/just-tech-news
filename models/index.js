const User = require('./User');
const Post = require('./Post');

// create associations hasMany is a prebuilt fucntion/method of sequelize
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// belongsTo is a prebuild function/method of sequelize
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };