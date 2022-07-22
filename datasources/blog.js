const {DataSource} = require('apollo-datasource');
const mongoose = require('mongoose');
const Post = require('../models/post.model');
const Comment = require('../models/comment.model');


class BlogDB extends DataSource {
  constructor(db_url) {
    super();
    /* ---------- Establish database connection when this datasource is instantiated ---------- */
    this.connectToDb(db_url)
    .then(() => console.log('The server has connected to the database successfully...'))
    .catch((err) => console.log(err));
  }

  initialize(config) {
    this.config = config.context;
  }

  /* ---------- Post-specific database logic ---------- */
  getPosts() {
    return Post.find();
  }

  createPost(title, author, body) {
    return Post.create({title, author, body});
  }

  findPostById(_id) {
    return Post.findById(_id);
  }

  deletePostById(_id) {
    return Post.deleteOne({_id});
  }

  /* ---------- Comment-specific database logic ---------- */
  addNewComment(postId, author, body) {
    return Comment.create({postId, author, body});
  }

  getCommentById(id) {
    return Comment.findById(id);
  }

  deleteCommentById(_id) {
    return Comment.deleteOne({_id});
  }

  connectToDb(db_url) {
    return mongoose.connect(db_url);
  }
}

module.exports = BlogDB;