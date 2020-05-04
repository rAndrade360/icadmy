exports.up = function (knex) {
  return knex.schema.createTable("order_items", function (table) {
    table.increments("id").unsigned().primary();
    table
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("name").notNullable();
    table.float("subtotal_value").notNullable();
    table.integer("quantity").notNullable();
    table.timestamps(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("order_items");
};
