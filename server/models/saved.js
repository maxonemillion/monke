const mongoose = require('mongoose');

const savedJob = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    language: [{
        type: String,
    }],
    pay: {
        type: String,
        required: true
    }  
})

const Saved = mongoose.model('Saved', savedJob);
module.exports = Saved