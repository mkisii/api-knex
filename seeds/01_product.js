/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const product = require('../products');
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert(product);
};
