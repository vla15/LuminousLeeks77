
exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', t => {
    t.string('photo').nullable();
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([]);
};
