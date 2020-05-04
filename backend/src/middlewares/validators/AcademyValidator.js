const { check } = require("express-validator");

module.exports = {
  createAcademyValidator: [
    check("name").isLength({ min: 2 }).trim().escape(),
    check("cnpj").isLength({ min: 8 }).trim().escape(),
    check("phone_number").isMobilePhone(),
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({ min: 8 }),
  ],
  loginAcademyValidator: [
    check("email").isEmail().escape(),
    check("cnpj").trim().escape(),
    check("password").isLength({ min: 8 }),
  ],
  updateAcademyValidator: [
    check("name").isLength({ min: 2 }).trim().escape(),
    check("phone_number").isMobilePhone(),
  ],
};
