const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    serviceRequests: [{
        idUserRequester: {type: String},
        idUserOfferer: {type:String},
        titleServiceOffered: {type:String},
        stateRequest: {type:String}
    }],
    achievements: [{
        name: {type: String},
        description: {type: String},
        value: {type: Number},
        iconUrl: {type: String}
    }]
});

module.exports = User = mongoose.model('user',UserSchema);