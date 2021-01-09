const mongoose = require('mongoose');

const newListing = new mongoose.Schema({
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

const Listing = mongoose.model('Listings', newListing);
module.exports = Listing