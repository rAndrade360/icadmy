const express = require("express");
const routes = express.Router();

const AcademyController = require("../controllers/AcademyController");
const LoginController = require("../controllers/LoginController");
const AcademyValidator = require("../config/middlewares/validators/AcademyValidator");
const tokenValidator = require("../config/middlewares/authentication/tokenValidator");

routes.post(
  "/singup",
  AcademyValidator.createAcademyValidator,
  AcademyController.create
);
routes.post(
  "/singin",
  AcademyValidator.loginAcademyValidator,
  LoginController.academyLogin
);

routes.use(tokenValidator);
routes.get("/index", AcademyController.index);
routes.put("/academy/:id/update", AcademyController.update);
routes.get("/academy/:id/show", AcademyController.show);

module.exports = routes;
