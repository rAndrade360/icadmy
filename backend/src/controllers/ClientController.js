const connection = require("../database/connection");
const { validationResult } = require("express-validator");
const validaCpf = require("./utils/validacpf");
const bcrypt = require("bcrypt");
module.exports = {
  async create(req, res) {
    const { name, cpf, birthday, phone_number, email, password } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty() || !validaCpf(cpf)) {
      return res.status(422).json({ errors: error.array() });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const client = await connection("clients").insert({
      name,
      cpf,
      birthday,
      phone_number,
      email,
      password: hashedPassword,
    });
    return res.json(client);
  },

  async index(req, res) {
    const clientes = await connection("clients").select("*");
    clientes.forEach((value) => {
      value.password = undefined;
    });
    return res.json(clientes);
  },
};
