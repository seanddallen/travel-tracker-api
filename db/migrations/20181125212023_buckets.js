
exports.up = function(knex, Promise) {
  return knex.schema.createTable('buckets', (table) => {
    table.increments();
    table.string('bucket_name');
    table.string('description');
    table.string('location');
    table.date('date_completed');
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
