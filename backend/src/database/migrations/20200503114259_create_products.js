exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").unsigned().primary();
    table.string("name").notNullable();
    table.string("tipo").notNullable();
    table.integer("unity_average").notNullable();
    table.integer("stock").notNullable();
    table.float("price", 2).notNullable();
    table.string("description").notNullable();
    table
      .integer("academy_id")
      .unsigned()
      .references("id")
      .inTable("academies")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
