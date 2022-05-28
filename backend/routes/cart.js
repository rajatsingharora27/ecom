const router = require('express').Router();
const { createCart, updateCart, deleteCart, getCart, getAllCart } = require('../controller/cart');
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAuthorizationForAdmin } = require('./verifyToken');

//CREATE CART (anyone can create cart)

router.post('/', verifyToken, createCart );

//UPDATE CART
router.put('/:id', verifyTokenAndAuthorization, updateCart);


// //DELETE CART
router.delete('/:id', verifyTokenAndAuthorization, deleteCart );

//GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getCart );


// //GET ALL CART PRODUCT
router.get('/', verifyTokenAndAuthorizationForAdmin, getAllCart);


module.exports = router