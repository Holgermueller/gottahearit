const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/users");

//@desc Register new data
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

//@desc Authenticate a data
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
  res.json({ message: "login user" });
};

//@desc Get user data
//@route GET /api/users/me
//@access Public
const getMe = (req, res) => {
  res.json({ message: "display user data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
