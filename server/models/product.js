const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // 確保路徑正確

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    ingredients: DataTypes.JSON,
    image_url: DataTypes.STRING,
  },
  {
    tableName: "product", // 確保這與你的數據庫表名匹配
    timestamps: false, // 這會禁用 createdAt 和 updatedAt
  }
);

module.exports = Product;
