/* -------------- Create a new post -------------- */
const createPost = async (_, {title, author, body }, context) => {
  const createdPost = await context.dataSources.blogDb.createPost(title, author, body);
  return createdPost;
};

/* -------------- Update a post based on the passed argument -------------- */
const updatePost = async (_, { id, title, author, body }, context) => {
  const postToUpdate = await context.dataSources.blogDb.findPostById(id);
  if (title) postToUpdate.title = title;
  if (author) postToUpdate.author = author;
  if (body) postToUpdate.body = body;
  await postToUpdate.save();
  return postToUpdate;
};

/* -------------- Delete a post based on the passed ID argument -------------- */
const deletePost = async (_, { id }, context) => {
  await context.dataSources.blogDb.deletePostById(id);
  return await context.dataSources.blogDb.getPosts();
};

module.exports = {
  createPost,
  updatePost,
  deletePost
}