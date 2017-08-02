exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', t => {
    t.integer('queue_view').nullable();
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([]);
};