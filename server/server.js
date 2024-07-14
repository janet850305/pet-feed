const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const sequelize = require("./config/db");

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Models synchronized");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

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

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
