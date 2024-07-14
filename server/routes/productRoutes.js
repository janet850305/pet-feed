const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/ingredients", productController.getProductIngredients);
router.get("/:brand_id", productController.getProductName);

module.exports = router;
