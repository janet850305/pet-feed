const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// 使用 CORS 中间件
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
