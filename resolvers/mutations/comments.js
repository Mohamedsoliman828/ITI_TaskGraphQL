/* -------------- Create a comment to a post based on the passed ID argument -------------- */
const addCommentToPost = async (_, { id, author, body }, context) => {
  const postToCommentAt = await context.dataSources.blogDb.findPostById(id);
  /** 1. Create new comment document */
  const newComment = await context.dataSources.blogDb.addNewComment(postToCommentAt._id, author, body);
  /** 2. Add document id to the comments array in the post */
  postToCommentAt.comments.push(newComment._id);
  await postToCommentAt.save();
  return postToCommentAt;
};

/* -------------- Update a comment's body by using the passed ID and author argument -------------- */
const updateComment = async (_, { id, body }, context) => {
  const commentToUpdate = await context.dataSources.blogDb.getCommentById(id);
  commentToUpdate.body = body;
  await commentToUpdate.save();
  /** Get this comment's post to show that it was updated in the post */
  return await context.dataSources.blogDb.findPostById(commentToUpdate.postId);
};

/* -------------- Delete a comment by using the passed ID and author argument -------------- */
const deleteComment = async (_, { id}, context) => {
  /** 1. Get the comment you want to delete */
  const commentToDelete = await context.dataSources.blogDb.getCommentById(id);
  /** 2. Get the post you want to delete the comment's id from */
  const postToDeleteCommentFrom = await context.dataSources.blogDb.findPostById(commentToDelete.postId);
  /** 3. Delete the comment's id from its post's comments array */
  postToDeleteCommentFrom.comments = postToDeleteCommentFrom.comments.filter(commentId => id != commentToDelete._id);
  await postToDeleteCommentFrom.save();
  await context.dataSources.blogDb.deleteCommentById(id);
  return postToDeleteCommentFrom;
};

module.exports = {
  addCommentToPost,
  updateComment,
  deleteComment
}
