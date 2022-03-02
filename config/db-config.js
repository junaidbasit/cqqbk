// Update with your config settings.
const path = require('path');
let port;
if (process.env.DB_PORT) {
  port = parseInt(process.env.DB_PORT, 10)
}
// const loadDBConfig = () => {

//   return {
//     client: process.env.DB_CLIENT || "postgresql",
//     connection: {
//       user: process.env.DB_USER || "dbuser",
//       password: process.env.DB_PASSWORD || "StrongPassword",
//       database: process.env.DB_DATABASE || "testdb",
//       host: process.env.DB_HOST || "localhost",
//       port: port && !isNaN(port) ? port : 5432
//     },
//     pool: { min: 0, max: 7 },
//     // seeds: {
//     //   directory: './seeds'
//     // },
//     // migrations: {
//     //   directory: path.join(__dirname, "../config/migrations"),
//     // },
//     migrations: {
//       tableName: "knex_migrations",
//     }
//   };
// };
module.exports = {

  development: {
    client: process.env.DB_CLIENT || "postgresql",
    connection: {
      user: process.env.DB_USER || "dbuser",
      password: process.env.DB_PASSWORD || "StrongPassword",
      database: process.env.DB_DATABASE || "assignment",
      host: process.env.DB_HOST || "localhost",
      port: port && !isNaN(port) ? port : 5432
    },
    pool: { min: 0, max: 7 },
    // seeds: {
    //   directory: './seeds'
    // },
    migrations: {
      directory: path.join(__dirname, "../config/migrations"),
    },
    // migrations: {
    //   tableName: "knex_migrations",
    // }
  }
};

// module.exports = { loadDBConfig };