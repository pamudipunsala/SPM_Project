const express = require('express');
const User = require('../models/user');

const router = express.Router();

//save payment
router.post('/user/save', (req,res) =>{
    let newUser = new User(req.body);

    newUser.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"saved successfully"
        });
    });
});

module.exports = router;
