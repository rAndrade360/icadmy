exports.up = function (knex) {
  return knex.schema.createTable("adresses", function (table) {
    table.increments("id").unsigned().primary();
    table.string("logradouro").notNullable();
    table.integer("number").notNullable();
    table.string("adress").notNullable();
    table.string("complement").notNullable();
    table.string("description").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.timestamps(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("adresses");
};
