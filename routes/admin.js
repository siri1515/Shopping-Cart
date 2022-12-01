const path = require('path');

const express = require('express');
const router = express.Router();

const controller_products = require('../controller/products');

// /admin/add-product => GET
router.get('/add-product', controller_products.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', controller_products.postAddedProduct);

module.exports = router;
