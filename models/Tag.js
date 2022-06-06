const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns

    id:{
    
      type:DataTypes.init,
      allowNull: false
        autoIncrement:true,
        primaryKey:true,
      },


      tagName:{
    
        type:DataTypes.string,
       
        },
  },

  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
