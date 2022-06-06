// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category


Product.belongsTo(Category{

  ForeignKey:"categoryId  ",


  onDelete:"cascade",
});


// Categories have many Products



Category.hasMany(Product,{


ForeignKey:"categoryId   ",

onDelete:"cascade",


});



// Products belongToMany Tags (through ProductTag)

Products belongsToMany Tags (through ProductTag)
Product.belongsToMany (Tag,{

through:{

  model:ProductTag,
  unique: true,
},


as "product"


});


// Tags belongToMany Products (through ProductTag)



Tag belongsToMany Products(through ProductTag)
  Tag.belongsToMany (Product,{
through:{
 
  model: ProductTag,

  unique:false,

as:"tagValues"

  },

as: ProductTag,



});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
