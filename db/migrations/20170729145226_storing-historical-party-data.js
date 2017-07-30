
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('party_history', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('party_size').nullable();
      table.dateTime('wait_time').nullable();
      table.dateTime('seat_time').nullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([]);
};
