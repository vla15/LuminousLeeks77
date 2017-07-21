
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.string('admin', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('queues', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('queueSize').nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.string('organization', 100).nullable();
      table.integer('next_wait_time').nullable();
      table.integer('avg_turn_rate').nullable();
      table.string('status', 30).nullable();
    }),
    knex.schema.createTableIfNotExists('parties', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('queue_id').references('queues.id').onDelete('CASCADE');
      table.dateTime('time_to_sit').nullable();
      table.dateTime('time_sat').nullable();
      table.integer('profile_id').nullable().references('profiles.id').onDelete('CASCADE');
      table.integer('party_size').nullable();
      table.string('first_name', 100).nullable();
      table.string('phone', 100).nullable();
    }),
    knex.schema.createTableIfNotExists('party_size', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('queue_id').nullable();
      table.integer('party_id').nullable();
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('auths'),
    knex.schema.dropTableIfExists('parties'),
    knex.schema.dropTableIfExists('party_size'),
    knex.schema.dropTableIfExists('queues'),
    knex.schema.dropTableIfExists('profiles')
  ]);
};

