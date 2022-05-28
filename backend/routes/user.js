const router = require('express').Router();
const {updateUser} = require('../controller/user');
const {verifyTokenAndAuthorization} = require('./verifyToken');


//UPDATE
router.get("/:id",verifyTokenAndAuthorization,updateUser);




module.exports = router;