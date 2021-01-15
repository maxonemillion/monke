const mongoose = require('mongoose');

const newListing = new mongoose.Schema({
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
    language: {
        type: String, 
    },
    pay: {
        type: String,
        required: true
    }
})

const Listing = mongoose.model('Listings', newListing);
module.exports = Listing