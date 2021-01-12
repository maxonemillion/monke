const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // set up properties for a user
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "contractor",
    enum: ["contractor", "client"]
  },
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listings"
  }]
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;