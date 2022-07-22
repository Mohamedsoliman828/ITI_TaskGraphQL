module.exports = {
  Query: {
    post: async (_, { id }, context) => await context.dataSources.blogDb.findPostById(id),
    posts: async (_, args, context) => {
      return await context.dataSources.blogDb.getPosts();
    },
  }
}