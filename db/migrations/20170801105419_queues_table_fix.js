exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('organization', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).nullabel();
      table.string('address', 100).nullable();
      table.string('city', 100).nullable();
      table.string('state', 100).nullable();
      table.string('image_url', 200).nullable();
      table.string('phone', 100).nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([]);
};