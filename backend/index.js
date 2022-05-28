const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv=require('dotenv');
const app=express();

dotenv.config();




//Connecting to the database
mongoose.connect('mongodb://localhost:27017/ecomm-shop')
.then(()=>console.log('Connected to database'))
.catch((err)=>console.log('Not connected to database'));

//MiddleWares
app.use(bodyParser.json())



//Routes
const authRouter=require('./routes/auth');
const userRouter=require('./routes/user');
const productRouter=require('./routes/product');
const cartRouter=require('./routes/cart');
const orderRouter=require('./routes/order');





//API
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);









app.listen(process.env.PORT,(req,res)=>{
    console.log('listing to the post ' + process.env.PORT )
})