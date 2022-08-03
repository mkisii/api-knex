const knex = require('./connect');

module.exports = {
    getAllProducts: () => {
        return knex('products').select('*');
        console.log('getAllProducts');

    },
    getProductById: (productId) => {
        return knex('products').select('*').where('id', productId);
        console.log('getProductById');


    },

}

