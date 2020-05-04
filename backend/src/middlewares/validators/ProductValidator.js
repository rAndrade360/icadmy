const { check } = require("express-validator");
module.exports = {
  createProduct: [
    check("name").isLength({ min: 2 }).trim().escape(),
    check("tipo").isLength({ min: 2 }).trim().escape(),
    check("unity_average").isLength({ min: 1 }).trim().escape(),
    check("stock").isLength({ min: 2 }).trim().escape(),
    check("price").isLength({ min: 2 }).isFloat().isNumeric(),
    check("description").isLength().trim().escape(),
  ],
};
