const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const generateToken = require("../utils/generateToken");

const userRegistration = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    res.status(400);
    throw new Error("User Already exists");
  }

  const user = await User.create({ name, email, password, pic });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("There is some error");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log("login - userr", user);
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports = { userRegistration, loginUser };
