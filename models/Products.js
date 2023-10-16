const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    shopID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    productDes: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Product = mongoose.model('Product',productSchema);
module.exports = Product