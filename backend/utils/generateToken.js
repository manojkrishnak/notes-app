const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  if (id && process.env.JWT_SECRET) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  } else {
    const error = new Error("There is some problem");
    // error.statusCode = 500;
    throw error;
  }
};

module.exports = generateToken;
