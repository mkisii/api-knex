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




};


