exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        { id: 1, book_name: 'book1', author_name: 'Charles Dickens', borrowed_by: "1", date_borrowed: '01-01-2022', date_return: '25-03-2022' },
        { id: 2, book_name: 'book2', author_name: 'Wilbur Smith', borrowed_by: "1", date_borrowed: '01-10-2021', date_return: '15-03-2022' },
        { id: 3, book_name: 'book3', author_name: 'Robert Somerloft', borrowed_by: "3", date_borrowed: '01-01-2022', date_return: '10-03-2022' },
        { id: 4, book_name: 'book4', author_name: 'Jasephine Cox', borrowed_by: "6", date_borrowed: '08-07-2021', date_return: '07-05-2022' },
        { id: 5, book_name: 'book5', author_name: 'Bertrand Russell', date_borrowed: '', date_return: '' },
        { id: 6, book_name: 'book26', author_name: 'Umera Ahmed', date_borrowed: '', date_return: '' }
      ]);
    });
};
