
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('organization', function(table) {
      table.increments('id').unsigned().primary();
      table.string('address').nullable();
      table.string('email', 100).nullable();
      table.string('phone', 100).nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([]);
  
};
