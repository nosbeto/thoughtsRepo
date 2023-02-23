const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {
  getRandomEmail,
  getRandomThoughts,
  getRandomName,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  console.log('connected')
    // Delete the entries in the collection
    await Thought.deleteMany({});
    await User.deleteMany({});

    // Empty arrays for randomly generated thoughts
    const thoughts = [...getRandomThoughts(10)];
    const user = [...getRandomName(15)];

    // Makes random thoughts array
    const makeThought = (text) => {

    }