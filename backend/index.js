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
// const UserRouter=require('./routes/user');
const authRouter=require('./routes/auth');




//API
// app.use('/api/user',UserRouter);
app.use('/api',authRouter);








app.listen(process.env.PORT,(req,res)=>{
    console.log('listing to the post ' + process.env.PORT )
})