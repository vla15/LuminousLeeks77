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
      table.string('socket_id', 100).nullable();
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
      table.integer('queue_size').nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.integer('organization_id').nullable();
      table.dateTime('next_wait_time').nullable();
      table.boolean('is_open').nullable();
      table.decimal('lat', 9, 6).nullable();
      table.decimal('lng', 9, 6).nullable();
    }),
    knex.schema.createTableIfNotExists('parties', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('queue_id').references('queues.id').onDelete('CASCADE');
      table.dateTime('wait_time').nullable();
      table.integer('profile_id').nullable().unique().references('profiles.id').onDelete('CASCADE');
      table.integer('party_size').nullable();
      table.string('first_name', 100).nullable();
      table.string('phone_number', 100).nullable();
      table.boolean('first_alert').notNullable().defaultTo(false);
      table.boolean('final_alert').notNullable().defaultTo(false);
      table.decimal('lat', 9, 6).nullable();
      table.decimal('lng', 9, 6).nullable();
    }),
    knex.schema.createTableIfNotExists('party_size', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('queue_id').nullable();
      table.integer('party_id').nullable();
    })
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
