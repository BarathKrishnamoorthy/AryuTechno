const details=require('../Model/ContactModel');

const create=async(req,res)=>{
    const{name,emailID,message}=req.body;
    const Information=new details({
        name:name,
        emailID:emailID,
        message:message
    });
    try {
        const check=await Information.save();
        res.status(201).json(check);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

const list=async(req,res)=>{
    try {
        const Information=await details.find();
        res.status(202).json(Information);
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }
};

module.exports={
    create,list
}