const Product = require('../models/product');


module.exports.createProduct = async (req, res) => {

    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.updateProduct =async (req, res) => {

    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        )
        res.status(200).json(updateProduct);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

module.exports.deleteProduct = async (req, res)=>{

    try{
        const delProduct = await Product.findByIdAndDelete(req.params.id);
        if(delProduct){
            res.status(200).json(delProduct);
        }
        else{
            res.status(404).json('There is no product with id ' + req.params.id);
        }
        
    }
    catch(err){
        res.status(500).json(err);
    }
};


module.exports.getProduct = async (req, res)=>{

    try {
        const findProdduct=await Product.findById({id: req.params.id});
        if(findProdduct){
            res.status(200).json(findProdduct);
        }
        else{
            res.status(404).json("There is no such product");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
    
};

module.exports.getAllProducts = async (req, res) => {

    try {
        const qNew=req.query.new;
        const qCat=req.query.cat;
        let products;

        if(qNew){
             products=await Product.find().sort({_id:-1}).limit(5);
        }
        else if(qCat){
            products=await Product.find({category:{
                $in:[qCat]
            }});
        }else{
            products=await Product.find();

        }
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }
};