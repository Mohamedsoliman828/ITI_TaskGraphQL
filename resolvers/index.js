const {Query} = require('./queries');
const {Mutation} = require('./mutations/main');
const {Post, Comment} = require('./customTypes');

const resolvers = {
  Post,
  Comment,
  Query,
  Mutation
};


module.exports = resolvers;