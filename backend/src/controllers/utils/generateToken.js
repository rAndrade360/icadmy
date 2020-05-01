const jwt = require("jsonwebtoken");
const secrect = require("../../config/auth");
function generateToken(id) {
  const token = jwt.sign({ id }, secrect.secret);
  return token;
}

module.exports = generateToken;
