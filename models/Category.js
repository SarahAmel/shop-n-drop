const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
type: DataTypes.Ineger,

allowNull:false,

autoIncrement: true,

primaryKey:true
    },
categoryName: {


type: DataTypes.string,

allowNull: false,

},
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
