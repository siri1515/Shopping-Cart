const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => 
{
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
}


exports.postAddedProduct = (req, res, next) => 
{
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);
    product.add();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => 
{
    Product.fetchAll(products => {
        res.render('admin/products', {
            items: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    })
}