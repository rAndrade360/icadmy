const express = require("express");
const routes = express.Router();

const ClientController = require("../controllers/ClientController");
const LoginController = require("../controllers/LoginController");
const ClientValidator = require("../config/middlewares/validators/ClientValidator");
const tokenValidator = require("../config/middlewares/authentication/tokenValidator");

routes.post(
  "/singup",
  ClientValidator.createClientValidator,
  ClientController.create
);
routes.post(
  "/singin",
  ClientValidator.loginClientValidator,
  LoginController.clientLogin
);

routes.use(tokenValidator);
routes.get("/index", ClientController.index);
routes.put("/client/:id/update", ClientController.update);
routes.get("/client/:id/show", ClientController.show);

module.exports = routes;
