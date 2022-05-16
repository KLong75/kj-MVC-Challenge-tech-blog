// import all models
const Post = require('./Post');
const User = require('./User');
const HighFive = require('./HighFive');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: HighFive,
  as: 'high_fived',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: HighFive,
  as: 'high_fived',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

HighFive.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

HighFive.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(HighFive, {
  foreignKey: 'user_id'
});

Post.hasMany(HighFive, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, HighFive, Comment };
