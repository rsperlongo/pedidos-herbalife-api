const mongoose = require('mongoose');

const FlavoursSchema = new mongoose.Schema({
    _id: String,
    strawberry: String,
    chocolate: String,
    vanilla: String,
    banana: String,
    coconut: String,
    coffee: String,
    cookies: String,
    milk: String,
    passion_fruit: String,
    peanuts:String
})