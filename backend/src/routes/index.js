const clientController = require("./clients");
const academyController = require("./academies");
const productController = require("./products");

const routes = require("express").Router();

routes.use("/clients", clientController);
routes.use("/academies", academyController);
routes.use("/products", productController);

module.exports = routes;
