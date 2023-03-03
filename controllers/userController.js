// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

// TODO: Create an aggregate function to get the number of users overall
const headCount = async () =>
  User.aggregate()
    // Your code here
    .then((numberOfUsers) => numberOfUsers);

module.exports = {
  // GET all Users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await headCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json({
              username,
              username: "username",
              email: "email",
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // update an user by its _id
  updateUser(req,res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$set: req.body},
      {runValidators: true, new: true}
    )
      .then((user) =>
        !user 
          ? res.status(404).json({ message: 'No user to update with this id.'})
          : res.json(User)
          )
          .catch((err) =>res.status(500).json(err));
  },

  // Delete an user with it's associated thoughts
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : Thought.deleteMany({_id: {$in: user.thoughts}})
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "User deleted, but no courses found",
            })
          : res.json({ message: "User with its associated thoughts successfully deleted" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
  //Add a friend
  addFriend({params},res) {
  User.findOneAndUpdate(
    {_id: params.userId},
    {$addToSet: {friends:params.friendId }},
    {new: true}
  )
  .select('-__v')
  .populate('friends')
  .then((user) => 
  !user 
    ? res.status(404).json({ message: 'No user to add friend to found with that id.' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

deleteFriend({params},res) {
  User.findOneAndUpdate(
    {_id: params.userId},
    {$pull: {friends:params.friendId }},
    {runValidators: true, new: true}
  )
  .select('-__v')
  .populate('friends')
  .then((user) => 
  !user 
    ? res.status(404).json({ message: 'No user found with that ID' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}
}