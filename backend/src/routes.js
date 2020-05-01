const express = require("express");
const routes = express.Router();
const ClientController = require("./controllers/ClientController");
const ClientValidator = require("./config/middlewares/validators/ClientValidator");

routes.post("/singup", ClientValidator, ClientController.create);

module.exports = routes;
