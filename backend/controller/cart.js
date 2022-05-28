const Cart = require('../models/cart');


module.exports.createCart = async (req, res) => {

    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).send(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.updateCart = async (req, res) => {

    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        )
        res.status(200).json(updateCart);
    }
    catch (err) {
        res.status(400).json(err);
    }
};

module.exports.deleteCart = async (req, res) => {

    try {
        const delCart = await Cart.findByIdAndDelete(req.params.id);
        if (delCart) {
            res.status(200).json(delCart);
        }
        else {
            res.status(404).json('There is no Cart with id ' + req.params.id);
        }

    }
    catch (err) {
        res.status(500).json(err);
    }
};

module.exports.getCart = async (req, res) => {

    try {
        const findCart = await Cart.findOne({ userId: req.params.userId });
        if (findCart) {
            res.status(200).json(findCart);
        }
        else {
            res.status(404).json("There is no such cart");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }

};

module.exports.getAllCart = async (req, res) => {

    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};