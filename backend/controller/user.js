const CryptoJS = require('crypto-js');
const User = require('../models/users');


//Update Controller
module.exports.updateUser =async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}; 

//deleted Controller
module.exports.deleteUser=(req, res) => {

    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            res.status(400).json(err);
        }
        if (user) {
            res.status(200).json({ message: 'user has been deleted' });
        }
    })

};

//Find User controllers
module.exports.findUser = async (req, res) => {

    const findUser = await User.findById(req.params.id);
    try {
        if (findUser) {
            const { password, ...others } = findUser._doc;
            res.status(200).json(others);
        }
        else {
            res.status(200).json({ message: 'User Does Not Exist' });
        }

    } catch (err) {
        res.status(200).json(err);
    }

};

//Get ALL user

module.exports.getAllUser = async (req, res) => {   
    try {
        const query=req.query.new;
        const allUsers = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(200).json(err);
    }

};

//Stats

module.exports.stats =async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  };