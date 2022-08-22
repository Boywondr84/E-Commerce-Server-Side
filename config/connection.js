const Sequelize = require('sequelize');
require('dotenv').config();

// const Sequelize = require('sequelize');

// heroku addons:create jawsdb:kitefin
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
