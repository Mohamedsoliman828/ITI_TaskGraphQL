module.exports = {
  Post: {
    id: (that) => {
      return that._id;
    },
    comments: async (that, args, context) => {
      return that.comments.map(async commentId => {
        return await context.dataSources.blogDb.getCommentById(commentId);
      })
    }
  },
  Comment: {
    id: (that) => {
      return that._id;
    }
  }
}