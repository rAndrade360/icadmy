const connection = require("../database/connection");
const generateToken = require("./utils/generateToken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
module.exports = {
  async create(req, res) {
    const {
      name,
      cpf,
      birthday = new Date(),
      phone_number,
      email,
      password,
    } = req.body;

    const error = validationResult(req.body);
    console.log(error);
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.array() });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // const client = await connection("clients").insert({
    //   name,
    //   cpf,
    //   birthday,
    //   phone_number,
    //   email,
    //   password: hashedPassword,
    // });
    const client = {
      name,
      cpf,
      birthday,
      phone_number,
      email,
      password: hashedPassword,
    };

    const token = generateToken(client.id);

    return res.json({ client, token });
  },
};
