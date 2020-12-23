const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    _id: String,
    product: String,
    description: String,
    price: String,
    quantity: String,
    extras: String,
    delivery: String,
    flavour: String,
});

module.exports = mongoose.model('Products', ProductsSchema);