const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AchievementSchema = new Schema({

    name: {type: String},
    description: {type: String},
    value: {type: Number},
    iconUrl: {type: String}
    
});

module.exports = Achievement = mongoose.model('achievement',AchievementSchema);
