const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getRandomThoughts, getRandomName, getRandomEmail } = require("./data");

connection.on("error", (err) => err);

// // Start the seeding runtime timer
// console.time('seeding');

// Creates a connection to mongodb
connection.once("open", async () => {
  console.log("connected");

  // Delete the entries in the collection
  await Thought.deleteMany({});

  // Drop any Users
  await User.deleteMany({});

  const users = [];

  let thoughts;

  // Empty arrays for randomly generated thoughts
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getRandomEmail();
    thoughts = [...getRandomThoughts(10)];
    const friendsArray = []
    const friendsFunc = () => { 
      for (let i = 0; i < 3; i++) {
        friendsArray.push(getRandomName())
      } return friendsArray
    };
    friendsFunc()
    users.push({
      username,
      email,
      thoughts,
      friendsArray,
    });
  };
  for (let i = 0; i < users.length; i++){
    Thought.collection.insertMany(users[i].thoughts)
    .then((createThought) => {
      return User.collection.insertMany({
        username:users[i].username,
        email: users[i].email,
        friendsArray: users[i].friendsArray,
        thoughts: createThought._id
      })
    })
  } 
  // await User.collection.insertMany(users)
  // await Thought.collection.insertMany(thoughts)
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
  //       const thoughts = [...getRandomThoughts(10)];
  // // Makes random thoughts array
  // const makeThought = (text) => {
});
