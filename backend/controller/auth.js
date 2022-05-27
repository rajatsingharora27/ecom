const User = require('../models/users');
const CryptoJS = require('crypto-js');
const { model } = require('mongoose');
const jwt = require('jsonwebtoken');

//SIGN UP
module.exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) {
                res.status("404").json({ message: 'Email already exist' });
            }
        })

    const _user = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

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

//LOGIN
module.exports.signin = (req, res) => {

    //find if user exist or not already
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (err) {
                return res.status(400).json(err)
            }
            if (!user) {
                return res.status(400).json({ message: 'user do not exist' })
            }
            else {

                //check if passrowd is correct or not
                const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
                var decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

                if (decryptedPassword !== req.body.password) {
                    return res.status(400).json({ message: 'Password Enterd is worng' })
                }

                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                    process.env.JWT_SEC,
                    { expiresIn: '3d' }
                );


                const { password, ...others } = user._doc;

                res.status(200).json({...others,accessToken})
            }
        })
}
