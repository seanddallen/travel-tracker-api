
exports.up = function(knex, Promise) {
  return knex.schema.createTable('buckets', (table) => {
    table.increments();
    table.string('bucket_name');
    table.string('description');
    table.boolean('is_complete').defaultTo(false);
    table.date('date_completed');
    table.integer('location_id')
      .notNullable()
      .references('id')
      .inTable('locations')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('buckets')
};
