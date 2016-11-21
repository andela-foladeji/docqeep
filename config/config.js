const path = require('path'),
  env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
  development: {
    port: 5432,
    db: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      options: {
        host: '127.0.0.1',
        dialect: 'postgres',

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
