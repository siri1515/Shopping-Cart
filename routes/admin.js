const path = require('path');

const express = require('express');
const router = express.Router();

const controller_admin = require('../controller/admin');

// /admin/add-product => GET
router.get('/add-product', controller_admin.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', controller_admin.postAddedProduct);

// /admin/products => GET
router.get('/products', controller_admin.getProducts);

module.exports = router;
