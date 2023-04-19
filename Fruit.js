const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
});

module.exports = mongoose.model('Fruit', fruitSchema);

