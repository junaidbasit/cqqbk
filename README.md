## CQapp-backend
Backend for a simple application in which you can show relation between books and students. A student can borrow many books from a library.
Developed with:
1. NodeJs (https://nodejs.org/en/)
2. ExpressJs (https://expressjs.com/) nodejs framework
3. Postgresql (https://www.npmjs.com/package/pg) database
4. KnexJs (https://knexjs.org/) library for database query building in nodejs

## Folder structure
1. bk -> index.js -- entry point 
2. bk -> db -> db.js, knexFile.js : for the database connection
3. bk -> db -> migrations, seeds : for creating tables and inserting initial table data
4. bk -> routes -> studentRouter.js, bookRouter.js : for the routes performing all CRUD operations
