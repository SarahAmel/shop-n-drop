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
  type: DataTypes.INTEGER,

  allowNull: false,

  autoIncrement:true,

  primaryKey:true,
},


categoryId:{

type: DataTypes.INTEGER,
Reference:{
  model:"category",
  key:"id",
},

},



productName:{
  type:DataTypes.STRING,

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
  type: DataTypes.INTEGER,
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




// Book.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

 // Store a reference of the `id` of the `Reader` that owns this Book
//  reader_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'reader',
//     key: 'id',
//   },
// },



// {
//   sequelize,
//   timestamps: false,
//   freezeTableName: true,
//   underscored: true,
//   modelName: 'book'
// }