const { signup } = require('../controller/auth');
const router=require('express').Router();



//Sign Up
router.post('/signup',signup)




module.exports=router