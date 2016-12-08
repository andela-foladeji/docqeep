const path = require('path'),
  env = process.env.NODE_ENV || 'development';
require('dotenv').config({ silent: true });

const config = {
  development: {
    port: 5432,
    db: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      options: {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
        pool: {
          max: 100,
          min: 0,
          idle: 10000
        }
      }
    }
  }
};

module.exports = config[env];
