const mongoose=require('mongoose');
const details=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailID:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
const contact=new mongoose.model('contact',details);
module.exports=contact;