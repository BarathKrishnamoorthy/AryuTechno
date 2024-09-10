const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailID:{type:String,required:true , match:[/.+@.+\..+/ ,'Invalid Field of EmailID ']},
    age: { type: Number, required: true , min:[16,'Age must be atleast 16 year ']},
    fathername: { type: String, required: true },
    mothername: { type: String, required: true },
    phonenumber:{type:String,required:true , minlenght:[10,'Phone Number must be equal to (10 numbers) in length'] , maxlength:[10,'Invalid PhoneNumber']},
    city: { type: String, required: true },
    college: { type: String, required: true },
    yearofpursuing: { type: String, required: true },
    textarea: { type: String, required: true },
    idPath: { type: String, required: true,  } 
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;
