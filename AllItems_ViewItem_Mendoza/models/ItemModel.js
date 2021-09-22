
var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    // your code here
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Item', ItemSchema);
