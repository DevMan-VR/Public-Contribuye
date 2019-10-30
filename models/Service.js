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
    
        serviceType: { type: String, required: true },
        p_amount: { type: Number, required: true },
        p_method: { type: String, required: true},

    location: {
        type: String,
    },
    until: {
        type: Date,
    }
    
});

module.exports = Service = mongoose.model('service',ServiceSchema);