const router = require('express').Router();
const { updateUser, deleteUser, findUser, getAllUser, stats } = require('../controller/user');
const { verifyTokenAndAuthorization, verifyTokenAndAuthorizationForAdmin } = require('./verifyToken');
const User = require('../models/users')


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorizationForAdmin, deleteUser);

//FIND USER 
router.get('/find/:id', verifyTokenAndAuthorizationForAdmin,findUser );


//GET ALL Users

router.get('/', verifyTokenAndAuthorizationForAdmin, getAllUser);

//STATS
router.get("/stats", verifyTokenAndAuthorizationForAdmin,stats );



module.exports = router;