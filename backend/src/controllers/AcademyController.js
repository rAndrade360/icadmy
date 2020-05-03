const { validationResult } = require("express-validator");
const connection = require("../database/connection");
const generateToken = require("./utils/generateToken");
const bcrypt = require("bcrypt");
const { cnpj } = require("cpf-cnpj-validator");
const cnpjValidator = cnpj;
module.exports = {
  async create(req, res) {
    const { name, email, cnpj, phone_number, password } = req.body;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.array() });
    }

    if (!cnpjValidator.isValid(cnpj)) {
      return res.status(502).json({ error: "invalid" });
    }

    const existsAcademy = await connection("academies")
      .select("*")
      .where({ email })
      .orWhere({ cnpj })
      .limit(1)
      .first();

    if (existsAcademy) {
      return res.status(401).json({ error: "academy alread exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const academy = await connection("academies").insert({
      name,
      email,
      cnpj,
      phone_number,
      password: hashedPassword,
    });

    const token = generateToken(academy[0], "academy");

    return res.json({ client, token });
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection("academies").count();
    const academies = await connection("academies")
      .select("*")
      .limit(10)
      .offset((page - 1) * 10);

    academies.forEach((value) => {
      value.password = undefined;
    });

    res.header("X-Total-Count", count["count(*)"]);
    return res.json(academies);
  },

  async show(req, res) {
    const { id } = req.params;
    const academy = await connection("academies")
      .select("*")
      .where({ id })
      .limit(1)
      .first();
    if (!academy) {
      return res.status(404).json({ error: "Academy not found" });
    }
    academy.password = undefined;
    return res.json(academy);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, phone_number } = req.body;
    if (req.userId !== parseInt(id) || req.userPermission !== "academy") {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const academy = await connection("academies")
      .select("*")
      .where({ id })
      .limit(1)
      .first();

    if (!academy) {
      return res.status(404);
    }

    const academyUpdate = await connection("academies").where({ id }).update({
      name,
      phone_number,
    });

    return res.json(academyUpdate);
  },
};
