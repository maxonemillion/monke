const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // set up properties for a user
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;