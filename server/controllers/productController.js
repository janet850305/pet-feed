// productController.js
const productService = require("../services/productService");

exports.getProductIngredients = async (req, res) => {
  try {
    const { brandId, product_name } = req.query;
    console.log(
      `Fetching ingredients for brandId: ${brandId}, product_name: ${product_name}`
    );
    const ingredients = await productService.getIngredients(
      brandId,
      product_name
    );
    res.json({ ingredients });
  } catch (error) {
    console.error("Error in getProductIngredients:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getProductName = async (req, res) => {
  try {
    const brand_id = req.params.brand_id;
    const products = await productService.getProductName(brand_id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
