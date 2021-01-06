const mongoose = require('mongoose');

const newJobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    
    company: {
        type: String,
        required: true,
      
    },

    jobDescription: {
        type: String,
        required: true
    },
   
    workType: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    payRate: {
        type: String,
        required: true
    }
})

const Job = mongoose.model('Job', newJobSchema);
module.exports = Job