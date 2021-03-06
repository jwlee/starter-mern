// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema   = new mongoose.Schema({
  uin: String,
  name: String
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
