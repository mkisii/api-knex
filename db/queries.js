const knex = require('./connect');

module.exports = {
    // Reading all products
    getAllProducts: () => {
        return knex('products');

    },
    // Create a new product
    createProduct: (product) => {
        return knex('products').insert(product, '*');
    },
    // Read a single product by productId
    getProductById: (productId) => {

        return knex('products').select('*').where('id', productId);

    },

    // Update a product
    updateProduct: (productId, product) => {
        return knex('products').where('id', productId).update(product, '*');
    }

}

