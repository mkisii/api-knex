const express = require('express');

const router = express.Router();

const queries = require('../db/queries');
const connect = require('../db/connect');

router.get('/', (req, res, next) => {
    queries.getAllProducts().then(products => {
        res.json({
            products: products
        });
    })

});

router.get('/:productId', (req, res, next) => {
    queries.getProductById(req.params.productId).then(products => {

        res.json({
            productId: products
        });
    })

});




router.post('/', (req, res, next) => {
    res.json({
        "message": 'Hello💥'
    })
});


module.exports = router;