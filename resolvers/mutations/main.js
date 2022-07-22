const { createPost, deletePost, updatePost } = require('./posts');
const { addCommentToPost, deleteComment, updateComment } = require('./comments');

module.exports = {
  Mutation: {
    createPost,
    deletePost,
    updatePost,
    addCommentToPost,
    deleteComment,
    updateComment
  }
}