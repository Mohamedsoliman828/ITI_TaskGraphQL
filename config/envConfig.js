const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  DB: {
    /** Get my MongoAtlas remote database link from the environment variables */
    URL: process.env.DB_URL
  }
}