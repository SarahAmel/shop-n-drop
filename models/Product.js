// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

id:{
  type:DataTypes.Integer,

  allowNull: false,

  autoIncrement:true,

  primaryKey:true,
},


categoryId:{

type:DataTypes.init,
Reference:{
  model:"category",
  key:"id",
},

},



productName:{
  type:DataTypes.string,

  allowNull:false,
},


price:{
  type: DataTypes.DECIMAL,
  allowNull:false,
  validate:{
    isDecimal: true,
  }

},
stock: {
  type: DataTypes.Integer,
  allowNull: false,
  defaultValue:20,
  validate:{
isNumeric:true,
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
