const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ServiceRequestSchema = new Schema({

        idUserRequester: {type: String, required: true},
        idUserOfferer: {type:String, required: true},
        serviceId: { type:String, required:true},
        stateRequest: {type:String, required: true},
        
        title: {type: String,required: true},
        description : {type: String,required: true},
        p_amount: { type: Number  },
        p_method: { type: String},
        contact_phone: {type: String},
        contact_mail: {type: String},
        location: {type: String},
        
    
});

module.exports = ServiceRequest = mongoose.model('serviceRequest',ServiceRequestSchema);