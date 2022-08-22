// import important parts of sequelize library
const { DECIMAL } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    price: {
      type: DataTypes.DECIMAL(6, 2), // decimal
      allowNull: false,
      validate: {
        isDecimal: true
      } // validates value is a decimal
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
      validate: {
        isNumeric: true
      } // validates that value is numeric
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
      //foreign key: references category ID
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
