const express = require("express");
const router = express.Router();
const registerUser = require("../controller/userController");
const { loginUser } = require("../controller/userController");

router.route("/register").post(registerUser.userRegistration);
router.route("/login").post(loginUser);

module.exports = router;
