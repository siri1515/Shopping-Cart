const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => 
{
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}


exports.postAddedProduct = (req, res, next) => 
{
    const product = new Product(req.body.title);
    product.add();
    res.redirect('/');
}


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
    items: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
}