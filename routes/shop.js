const express = require('express');
const router = express.Router();

const controller_shop = require('../controller/shop');


router.get('/', controller_shop.getIndex);

router.get('/products', controller_shop.getProducts);
router.get('/cart', controller_shop.getCart);
router.get('/orders', controller_shop.getOrders);
router.get('/checkout', controller_shop.getCheckout);

module.exports = router;
