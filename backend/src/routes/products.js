const express = require("express");
const routes = express.Router();

const ProductController = require("../controllers/ProductController");
const ProductValidator = require("../config/middlewares/validators/ProductValidator");
const tokenValidator = require("../config/middlewares/authentication/tokenValidator");

routes.use(tokenValidator);
routes.post(
  "/store",
  ProductValidator.createProductValidator,
  ProductController.create
);
routes.get("/product/:id/show", ProductController.show);
routes.get("/index", ProductController.index);
routes.put("/product/:id/update", ProductController.update);
routes.delete("/product/:id/delete", ProductController.delete);

module.exports = routes;
