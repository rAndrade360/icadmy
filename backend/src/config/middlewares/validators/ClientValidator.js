const { check } = require("express-validator");
module.exports = [
  check("name").isLength({ min: 2 }),
  check("cpf").isEmpty(),
  check("birthday").isEmpty(),
  check("phone_number").isMobilePhone(),
  check("email").isEmail().isEmpty(),
  check("password").isLength({ min: 8 }),
];
