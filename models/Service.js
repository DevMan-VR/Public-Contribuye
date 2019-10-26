const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
    },
    payment: {
        typeOf: { type: String, required: true },
        amount: { type: Number, required: true },
        method: { type: String, required: true}
    },
    location: {
        type: String,
    },
    until: {
        type: Date,
    }
});

module.exports = Service = mongoose.model('service',ServiceSchema);