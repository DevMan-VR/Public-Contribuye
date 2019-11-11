const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceRequest = require('./ServiceRequest').schema;

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

    contact_phone: {type: String},

    contact_mail: {type: String},

    location: {
        type: String,
    },
    until: {
        type: Date,
    },

    userFather: {type: String, required: true},
    serviceRequests: [ServiceRequest]
    
});

module.exports = Service = mongoose.model('service',ServiceSchema);