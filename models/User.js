const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isContributor: {
        type: Boolean,
        required: true
    },
    phone: {
        type: Number,
    },
    company: {
        type: String,
    },
    address: {
        type: String,
    },
    profileImgUrl: {
        type: String,
    },
    register_date : {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);