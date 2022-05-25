
const mongoose=require('mongoose');
const validator = require('validator');

const userSchema=new mongoose.Schema(
    {

        username:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Please Enter the email correctly");
                }
            },
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

module.exports=mongoose.model("User",userSchema);