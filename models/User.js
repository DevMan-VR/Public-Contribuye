const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceRequest = require('./ServiceRequest').schema;
const Service = require('./Service').schema;
const Achievement = require('./Achievement').schema;


const UserSchema = new Schema({
    name: {
        type: String,
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
    },
    phoneNumber: {
        type: String,
    },
    company: {
        type: String,
    },
    address: {
        type: String,
    },
    experience: {
        type: Number
    },
 
    profileImgUrl: {
        type: String,
    },
    registerDate : {
        type: Date,
        default: Date.now
    },

    serviceRequests: [ServiceRequest],

    servicesOffered: [Service],

    achivements: [Achievement]


});

module.exports = User = mongoose.model('user',UserSchema);