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
    service_type: { type: String },

    subcategory: {
        type: String,
    },
    
        
        p_amount: { type: Number  },
        p_method: { type: String},

    location: {
        type: String,
    },
    until: {
        type: Date,
    }
    
});

module.exports = Service = mongoose.model('service',ServiceSchema);