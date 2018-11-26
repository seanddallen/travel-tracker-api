
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('user_name');
    table.string('email').unique();
    table.string('password');
    table.integer('states_completed').defaultTo(0);
    table.integer('countries_completed').defaultTo(0);
    table.integer('buckets_created').defaultTo(0);
    table.integer('buckets_completed').defaultTo(0);
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
