const connection = require("../database/connection");
const bcrypt = require("bcrypt");
const generateToken = require("./utils/generateToken");
module.exports = {
  async clientLogin(req, res) {
    const { email = "", password, cpf = "" } =
      req.body || req.header.authorization;
    const client = await connection("clients")
      .select("*")
      .where({ email })
      .orWhere({ cpf })
      .limit(1)
      .first();

    if (!client) {
      return res.status(404).json({ error: "invalid email or password" });
    }

    const compare = await bcrypt.compare(password, client.password);

    if (compare) {
      client.password = undefined;
      const token = generateToken(client.id, "client");
      return res.json({ client, token });
    }

    return res.status(402).json({ error: "invalid email or password" });
  },

  async academyLogin(req, res) {
    const { email = "", password, cnpj = "" } =
      req.body || req.header.authorization;
    const academy = await connection("academies")
      .select("*")
      .where({ email })
      .orWhere({ cnpj })
      .limit(1)
      .first();

    if (!academy) {
      return res.status(404).json({ error: "invalid email or password" });
    }

    const compare = await bcrypt.compare(password, academy.password);

    if (compare) {
      academy.password = undefined;
      const token = generateToken(academy.id, "academy");
      return res.json({ client, token });
    }

    return res.status(402).json({ error: "invalid email or password" });
  },
};
