const express=require('express');
const router=express.Router();
const {create,list}=require('../Controller/ContactController');




router.post('/contact' , create);
router.get('/list' , list);







module.exports=router;