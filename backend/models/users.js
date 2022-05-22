const { timeStamp } = require('console');
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {

        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        // createdAt:Date.now()


    },
    {timestamps:true}
);

module.exports=mongoose.Model("User",userSchema);