// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
let port;
if (process.env.DB_PORT) {
  port = parseInt(process.env.DB_PORT, 10)
}
module.exports = {
  development: {
    client: process.env.DB_CLIENT || "pg",
    connection: {
      user: process.env.DB_USER || "myuser",
      password: process.env.DB_PASSWORD || "mypass",
      database: process.env.DB_DATABASE || "mydb",
      host: process.env.DB_HOST || "localhost",
      port: port && !isNaN(port) ? port : 5432
    },
    pool: { min: 1, max: 7 },
    migrations: {
      directory: __dirname + '/config/migrations',
    },
    seeds: {
      directory: __dirname + '/config/seeds'
    }
  }
};
