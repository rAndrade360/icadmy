const jwt = require("jsonwebtoken");
function generateToken(data, permission) {
  return jwt.sign({ id: data, permission }, process.env.SECRET);
}

module.exports = generateToken;
