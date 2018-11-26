
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      {user_name:'Sean', email: 'sean@test.com', password: 'asdf'},
      {user_name:'Troy', email: 'troy@test.com', password: 'asdf'},
      {user_name:'Jeff', email: 'jeff@test.com', password: 'asdf'},
      ]);
    });
};
