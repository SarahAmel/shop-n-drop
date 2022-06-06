// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category


Product.belongsTo(Category, {

  ForeignKey:"category_id",


  onDelete:"CASCADE",
});


// Categories have many Products



Category.hasMany(Product,{


ForeignKey:"category_id",

onDelete:"CASCADE",


});



// Products belongToMany Tags (through ProductTag)

Products.belongsToMany(Tags,{
  through: ProductTag, 
  ForeignKey: "product_id"
} )
Product.belongsToMany (Tag,{

through:{

  model:ProductTag,
  unique: true,
},


as 


});


// Tags belongToMany Products (through ProductTag)



Tag.belongsToMany (Products{
  through: ProductTag,
  ForeignKey:"tag_id"
}
 
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




// const Reader = require('./Reader');
// const Book = require('./Book');
// const LibraryCard = require('./LibraryCard');

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// // A reader can have many books
// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// // A book belongs to a single reader
// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// module.exports = { Reader, Book, LibraryCard };