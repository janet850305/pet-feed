require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require("./config/db");
const { Sequelize } = require("sequelize");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    await sequelize.sync(); // 同步數據庫模型
    console.log("Models synchronized");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // 如果無法連接數據庫，退出程序
  }
})();
// 使用 CORS 中间件
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// 路由
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// 根路由
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
