const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const leaderships = mongoose.model('leadership', leadershipSchema);

module.exports = leaderships;