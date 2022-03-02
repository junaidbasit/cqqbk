exports.seed = function (knex) {
  // Deletes All existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        { id: 1, first_name: 'Junaid', last_name: 'Basit' },
        { id: 2, first_name: 'Muddassir', last_name: 'Maqbool' },
        { id: 3, first_name: 'Mujahid', last_name: 'Rasool' },
        { id: 4, first_name: 'Fahad', last_name: 'Rasool' },
        { id: 5, first_name: 'Umair', last_name: 'Basit' },
        { id: 6, first_name: 'Sajjid', last_name: 'Ali' },
      ]);
    });
};
