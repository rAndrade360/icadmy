exports.up = function (knex) {
  return knex.schema.createTable("academies", function (table) {
    table.increments("id").unsigned().primary();
    table.string("name").notNullable();
    table.string("cnpj").notNullable().unique();
    table.string("phone_number").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
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
  return knex.schema.dropTable("academies");
};
