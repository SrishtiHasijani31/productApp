const pool = require('../db');

const getProducts = (req, res) => {
  console.log("i am in")
  pool.query('SELECT * FROM products', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json(result.rows);
  });
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  pool.query('SELECT * FROM products WHERE id = $1', [productId], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(result.rows[0]);
  });
};

const createProduct = (req, res) => {
  console.log("I am in")
 // const { name, price } = req.body;
  const {name}=req.body.name
  const{price}=req.body.price

  console.log(req.body.name)
  console.log(req.body.price)

  // Validate the product details
  if (!(req.body.name) || !(req.body.price)) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  // Insert a new product into the database
  pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [req.body.name, req.body.price], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.status(201).json(result.rows[0]); // Return the created product
  });
};

const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, productId], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(result.rows[0]);
  });
};

const deleteProduct = (req, res) => {
  const productId = req.params.id;

  pool.query('DELETE FROM products WHERE id = $1', [productId], (err) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.sendStatus(204); // Return a success status code
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
