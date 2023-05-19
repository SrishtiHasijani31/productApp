  // productRoutes.js
  const express = require('express');
  const router = express.Router();
  const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  } = require('../controllers/productController');
  //const authMiddleware = require('../middlewares/authMiddleware');



  // Unprotected route (no authentication required)
 router.get('/products', getProducts);
 router.post('/products', createProduct);

  // Protected routes (authentication required)
  //router.get('/products/:id', authMiddleware, getProductById);
  //router.post('/products', authMiddleware, createProduct);
  //router.put('/products/:id', authMiddleware, updateProduct);
  //router.delete('/products/:id', authMiddleware, deleteProduct);


  module.exports = router;
