const express = require("express");
const routes = express.Router();
const ClientController = require("./controllers/ClientController");
const ClientValidator = require("./config/middlewares/validators/ClientValidator");
const tokenValidator = require("./config/middlewares/authentication/tokenValidator");

routes.post("/singup", ClientValidator, ClientController.create);
routes.use(tokenValidator);
routes.get("/clients", ClientController.index);

module.exports = routes;
