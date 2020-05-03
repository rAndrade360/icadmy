const connection = require("../database/connection");
module.exports = {
  async create(req, res) {
    const { name, type, unity_average, stock, price, description } = req.body;
    const academy_id = req.userId;
    if (req.userPermission !== "academy") {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const product = await connection("products").insert({
      name,
      type,
      unity_average,
      stock,
      price,
      description,
      academy_id,
    });

    return res.json(product);
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection("products").count();
    const products = await connection("products")
      .select("*")
      .limit(10)
      .offset((page - 1) * 10);

    res.header("X-Total-Count", count["count(*)"]);
    return res.json(products);
  },

  async show(req, res) {
    const { id } = req.params;
    const product = await connection("products")
      .select("*")
      .where({ id })
      .limit(1)
      .first();
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.json(product);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, type, unity_average, stock, price, description } = req.body;
    if (req.userPermission !== "academy") {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const product = await connection("products")
      .select("*")
      .where({ id })
      .limit(1)
      .first();
    if (!product) {
      return res.status(404);
    }
    const productUpdate = await connection("products").where({ id }).update({
      name,
      type,
      unity_average,
      stock,
      price,
      description,
    });
    return res.json(productUpdate);
  },

  async delete(req, res) {
    const { id } = req.params;
    if (req.userPermission !== "academy")
      const product = await connection("products")
        .select("*")
        .where({ id })
        .limit(1)
        .first();
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await connection("products").where({ id }).del();
    return res.json({ sucess: true });
  },
};
