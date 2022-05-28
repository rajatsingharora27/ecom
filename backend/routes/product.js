const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controller/products');
const { verifyTokenAndAuthorizationForAdmin } = require('./verifyToken');
const router = require('express').Router();


//CREATE (ONLY ADMIN CAN DO THIS)

router.post('/', verifyTokenAndAuthorizationForAdmin,createProduct );

//UPDATE Product
router.put('/:id', verifyTokenAndAuthorizationForAdmin, updateProduct);


//DELETE PRODUCT

router.delete('/:id',verifyTokenAndAuthorizationForAdmin,deleteProduct );

//GET PRODUCT
router.get('/:id',getProduct );


//GET ALL PRODUCT
router.get('/',getAllProducts);


module.exports = router