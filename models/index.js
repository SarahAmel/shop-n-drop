// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category


Product.belongsTo(Category{

  ForeignKey:"   ",


  onDelete:"   ",
});




// Categories have many Products



Category.hasMany(Product,{


ForeignKey:"   ",

onDelete:"  ",




});



// Products belongToMany Tags (through ProductTag)


Product.belongsToMany(Tag,{

through:{

  model:ProductTag,
  unique: true
},


// as "clothes"


});







// Tags belongToMany Products (through ProductTag)



Tag.belongsToMany(Product,{

through:{
 
  model: ProductTag,

  unique:false


  },

as: ProductTag,





});





module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
