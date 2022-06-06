const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns

    id:{
    
      type:DataTypes.INTEGER,
      allowNull: false
        autoIncrement:true,
        primaryKey:true,
      },


      tagName:{
    
        type:DataTypes.STRING,
       
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




// password: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   validate: {
//     len: [1],
//   },
// },




// id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   primaryKey: true,
//   autoIncrement: true,
// },