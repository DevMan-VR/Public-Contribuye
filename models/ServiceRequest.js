const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ServiceRequestSchema = new Schema({

        idUserRequester: {type: String, required: true},
        idUserOfferer: {type:String, required: true},
        serviceId: { type:String, required:true},
        stateRequest: {type:String, required: true}
    
});

module.exports = ServiceRequest = mongoose.model('serviceRequest',ServiceRequestSchema);