const User=require('../models/users')


module.exports.signup=(req,res)=>{

    User.findOne({email:req.body.email})
    .exec((err,user)=>{
        if(user){
            return res.status("404").json({message:'User already exist'});
        }
    })

    const _user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    _user.save((error, data) => {
        if (error) {
            return res.status(400).json({
                message: error
            })
        }

        if (data) {
            return res.status(201).json({
                message: `${data.email} created successfully`
                // message: data
            })
        }

    });
}

