const { connect, connection } = require('mongoose');

const connectionString =  process.env.MONGO_DB ;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;