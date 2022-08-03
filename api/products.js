const express = require('express');

const router = express.Router();

const queries = require('../db/queries');
const connect = require('../db/connect');

function isValidId(req, res, next) {
    if (!isNaN(req.params.productId)) return next();
    next(new Error('Invalid ID'));
};
// function validProduct(product) {
//     const hasName = typeof product.name === 'string' && product.name.trim() !== '';
//     const hasDescription = typeof product.description === 'string' && product.description.trim() !== '';
//     const hasPrice = !isNaN(product.price);
//     const hasQuantity = !isNaN(product.quantity);

//     return hasName && hasDescription && hasPrice && hasQuantity;
// }

router.get('/read', (req, res, next) => {
    queries.getAllProducts().then(products => {
        res.json({
            products: products
        });
    })

});

router.post('/create', (req, res, next) => {

    queries.createProduct(req.body).then(product => {
        res.json({
            product: product[0],
            message: 'Product created successfully'
        });
    })
});


router.get('/read/:productId', isValidId, (req, res, next) => {
    queries.getProductById(req.params.productId).then(products => {

        res.json(products);
    })

});

router.put('/update/:productId', isValidId, (req, res, next) => {
    queries.updateProduct(req.params.productId, req.body).then(product => {
        res.json({
            product: product[0],
            message: 'Product updated through PUT successfully'
        });
    });

});

router.patch('/update/:productId', isValidId, (req, res, next) => {
    const productId = req.params.productId;
    const product = req.body;
    queries.updateProduct(productId, product).then(products => {
        res.json({
            productId: products,
            message: 'Product updated through PATCH successfully'
        });
    })

});

router.delete('/delete/:productId', isValidId, (req, res, next) => {
    queries.getProductById(req.params.productId).then(products => {

        res.json({
            productId: products
        });
    })

});






module.exports = router;