const { connect, connection } = require('mongoose');
require("dotenv").config()

const connectionString =  process.env.MONGO_DB || 'mongodb://localhost:27017/thoughtsNoSQLDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;