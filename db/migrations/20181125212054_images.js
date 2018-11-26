exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', (table) => {
    table.increments();
    table.text('img_url');
    table.string('location');
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
  return knex.schema.dropTable('images')
};
