const { connect, connection } = require('mongoose');
require("dotenv").config()

const connectionString =  process.env.MONGO_DB ;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;