exports.up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("id").unsigned().primary();
    table
      .integer("client_id")
      .unsigned()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.boolean("isOrderCompleted");
    table.float("total_value").notNullable();
    table.string("payment_type").notNullable();
    table.string("payment_status").notNullable();
    table
      .integer("adress_id")
      .unsigned()
      .references("id")
      .inTable("adresses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
