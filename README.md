## app-backend
Backend for a simple application in which you can show relation between books and students. A student can borrow many books from a library.
Developed with:
1. NodeJs (https://nodejs.org/en/)
2. ExpressJs (https://expressjs.com/) nodejs framework
3. Postgresql (https://www.npmjs.com/package/pg) database
4. KnexJs (https://knexjs.org/) library for database query building in nodejs


## Please follow the following steps to run this project

1. npm install 
2. npm run migration (This will create two tables in your database)
3. npm run seed (This will add some smaple data to your tables)
4. npm run start

## Folder structure
1. index.js -- app entry point 
2. config -> config/knex.js, knexFile.js : for the database connection
3. config => migrations, seeds : for creating tables and inserting initial table data
4. routes => student.js, books.js : for the routes (endpoints)
5. controller => books.js,student.js : for to seprate routes and functions.
6. service => contain actual basic logic & perform all CRUD operations on db.
