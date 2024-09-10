const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailID: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/.+@.+\..+/ ,'Invalid Email ID'] 
    },
    age: { 
        type: Number, 
        required: true,
        min: [18, 'Age must be at least 18'],
        max: [60, 'Age cannot be more than 60']
    },
    mobilenumber: { 
        type: String, 
        required: true, 
        maxlength: [10, 'Mobile number must be exactly 10 digits'],
        minlength: [10, 'Mobile number must be exactly 10 digits']
    },
    city: { type: String, required: true },
    college: { type: String, required: true },
    yearofpassout: { 
        type: String, 
        required: true, 
        maxlength: [4, 'Year of passout must be 4 digits'] 
    },
    role: { type: String, required: true },
    resume: { type: String, required: true } 
});


internSchema.index({ emailID: 1 });

const Intern = mongoose.model('Intern', internSchema);

module.exports = Intern;
