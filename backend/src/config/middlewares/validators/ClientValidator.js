const { check } = require("express-validator");
module.exports = [
  check("name").isLength({ min: 2 }).trim().escape(),
  check("cpf").isLength({ min: 8 }).trim().escape(),
  check("birthday").notEmpty(),
  check("phone_number").isMobilePhone(),
  check("email").isEmail().normalizeEmail(),
  check("password").isLength({ min: 8 }),
];
