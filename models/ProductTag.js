const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns




    id:{
      type:DataTypes.INTEGER,
    
      allowNull: false,
    
      autoIncrement:true,
    
      primaryKey:true,
    },
    
    
    ProductId:{
    
    type:DataTypes.INTEGER,
    Reference:{
      model:"Product",
      key:"id",
    },
    
    },


    tagId:{
    
      type:DataTypes.INTEGER,
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



// `Product`

//   * `id`
  
//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set as primary key.
  
//     * Uses auto increment.
