// Update with your config settings.



/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const dotenv = require('dotenv');
dotenv.config();
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },

  },

  test: {
    client: 'mysql2',
    connection: {
      database: process.env.DB_NAME_TEST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};


