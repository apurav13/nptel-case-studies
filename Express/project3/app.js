const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("X-Store-Region", "Downtown");
  next();
});
app.use('/products', productsRouter);
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Neighborhood Food Store API');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});