const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      rewuired: true,
      min: 3,
      max: 15,
      trim: true,
      unique: true
    },
    name: {
      type: String,
      rewuired: true
    },
    password: {
      type: String,
      rewuired: true
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
