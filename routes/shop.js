const express = require('express');
const router = express.Router();

const controller_products = require('../controller/products');


router.get('/', controller_products.getProducts);

module.exports = router;
