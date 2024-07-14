// productService.js
const { Op } = require("sequelize");
const Product = require("../models/product");

exports.getIngredients = async (brandId, product_name) => {
  console.log(
    `Searching for product with brand_id: ${brandId}, product_name: ${product_name}`
  );
  const product = await Product.findOne({
    where: {
      brand_id: brandId,
      product_name: { [Op.like]: `%${product_name}%` },
    },
  });
  console.log("Query result:", product);
  if (!product) {
    throw new Error("Product not found");
  }
  return product.ingredients;
};
exports.getProductName = async (brand_id) => {
  try {
    const products = await Product.findAll({
      where: { brand_id: brand_id },
      attributes: ["product_name"],
    });
    return products.map((product) => product.product_name);
  } catch (error) {
    console.log("Error fetch products by brand ID", error);
    throw error;
  }
};
