const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns




    id:{
      type:DataTypes.init,
    
      allowNull: false,
    
      autoIncrement:true,
    
      primaryKey:true,
    },
    
    
    ProductId:{
    
    type:DataTypes.init,
    Reference:{
      model:"Product",
      key:"id",
    },
    
    },


    tagId:{
    
      type:DataTypes.init,
      Reference:{
        model:"tag",
        key:"id",
      },
  },

  
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
