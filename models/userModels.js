const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  role: {
    type: String,
    required: [true, "role is require"],
    enum: ["teacher", "student"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
