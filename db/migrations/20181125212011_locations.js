
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (table) => {
    table.increments();
    table.string('location_name');
    table.string('continent');
    table.string('type');
    table.string('data');
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};
