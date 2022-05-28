const mongoose = require('mongoose');
const slug = require('slug')

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        lowercase: true,
    },
    price: {
        type: Number ,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true

    // },
    category: {
        type: Array
    },
    offer: {
        type: Number
    },
    img: {
        type: String,
        required: true
    },
    size: {
        type: String,
        max: 4,
    },
    color: {
        type: String,
        
    },




}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);