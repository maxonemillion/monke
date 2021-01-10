const mongoose = require('mongoose');

const savedJob = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    pay: {
        type: String,
        required: true
    }
})

const Saved = mongoose.model('Saved Jobs', savedJob);
module.exports = Saved