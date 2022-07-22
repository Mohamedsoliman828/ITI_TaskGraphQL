const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, required: true },
  author: String,
  body: String
});




module.exports = mongoose.model('Comment', commentSchema);