const connection = require("../database/connection");
const { validationResult } = require("express-validator");
const { cpf } = require("cpf-cnpj-validator");
const generateToken = require("./utils/generateToken");
const bcrypt = require("bcrypt");
const validaCpf = cpf;
module.exports = {
  async create(req, res) {
    const { name, cpf, birthday, phone_number, email, password } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty() || !validaCpf.isValid(cpf)) {
      return res.status(422).json({ errors: error.array() });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const existsClient = await connection("clients")
      .select("*")
      .where("email", email)
      .orWhere("cpf", cpf)
      .limit(1)
      .first();

    if (existsClient) {
      return res.status(401).json({ error: "user already exists" });
    }

    const client = await connection("clients").insert({
      name,
      cpf,
      birthday,
      phone_number,
      email,
      password: hashedPassword,
    });
    const token = generateToken(client[0], "client");
    return res.json({ client, token });
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const count = await connection("clients").count();
    const clients = await connection("clients")
      .select("*")
      .limit(10)
      .offset((page - 1) * 10);
    clients.forEach((value) => {
      value.password = undefined;
    });
    res.header("X-Total-Count", count["count(*)"]);
    return res.json(clients);
  },

  async show(req, res) {
    const { id } = req.params;
    const client = await connection("clients").where({ id }).limit(1).first();
    if (!client) {
      return res.status(404).json({ error: "User not exists" });
    }
    client.password = undefined;
    return res.json(client);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, birthday, phone_number } = req.body;
    if (req.userId !== parseInt(id) || req.userPermission !== "client") {
      return res.status(401);
    }
    const client = await connection("clients")
      .select("*")
      .where({ id })
      .limit(1)
      .first();
    if (!client) {
      return res.status(404);
    }
    const clientUpdate = await connection("clients").where({ id }).update({
      name,
      birthday,
      phone_number,
    });

    return res.json(clientUpdate);
  },
};
