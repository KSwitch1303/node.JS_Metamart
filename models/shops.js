const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Shop = mongoose.model('Shop',shopSchema);
module.exports = Shop;