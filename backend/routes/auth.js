const { signup,signin } = require('../controller/auth');
const router = require('express').Router();





//Sign Up
router.post('/signup', signup);

//SIGN IN
router.post('/signin', signin );




module.exports = router