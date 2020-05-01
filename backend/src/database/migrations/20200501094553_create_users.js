exports.up = function (knex) {
  return knex.schema.createTable("clients", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("cpf").notNullable().unique();
    table.date("birthday").notNullable();
    table.string("phone_number").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clients");
};
