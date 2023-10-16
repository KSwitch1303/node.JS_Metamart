const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    pubkey: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    isShop: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User',userSchema);
module.exports = User;