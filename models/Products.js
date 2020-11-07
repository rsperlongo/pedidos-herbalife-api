const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    id: String,
    shake: String,
    description: String,
    price: String,
    quantity: String,
    date: String,
    delivery: String,
    payment: String,
});

module.exports = mongoose.model('Products', ProductsSchema);