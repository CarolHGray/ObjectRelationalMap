const Product = require("./product");
const Category = require("./category");
const Tag = require("./tag");
const ProductTag = require("./productTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)

// Product.belongsToMany(Tag, { through: ProductTag });

// OR

Product.belongsToMany(Tag, {
  through: productTag,
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)

// Tag.belongsToMany(Product, { through: ProductTag });

// OR

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

// Export
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};