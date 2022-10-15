const brypt = require("bcrypt");
const User = require("../models/User");

exports.signup = async (req, res, next) => {
  const hassed = await brypt.hash(req.body.password, 10);
  const newUser = new User({
    ...req.body,
    password: hassed
  });
  newUser.save((err) => {
    if (err) {
    } else {
      res.status(200).send("account created successfully");
    }
  });
};

exports.signin = (req, res, next) => {};
