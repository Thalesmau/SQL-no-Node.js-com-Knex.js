
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    return knex('users').insert([
      { username: 'Thales' },
      { username: 'Mauricio' }
    ]);
  });
}
