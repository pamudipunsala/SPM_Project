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

//register users 
router.post('/register',(req,res)=>{
    const { uname, regNo, uemail, userName, upwd} = req.body
    User.findOne({userName:userName}, (err,user) =>{
        if(user){
            res.send({message:"User already registered"})
        } else {
            const newUser = new Users({
                uname,
                regNo,
                uemail,
                userName,
                upwd
            })
            newUser.save((err) => {
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }else{
                    return res.status(200).json({
                        message: "Successfully Registered, Please login now." 
                    });
                }
                
            });
        }
    })

    
});

//login
router.post("/userlogin",(req,res) => {
    const {userName, upwd} = req.body
    Users.findOne({userName:userName}, (err, users) => {
        if (users) {
            if(upwd === users.upwd) {
                res.send({message :"Login Successful", users:users})
            } else {
                res.send({message : "Password didn't match"})
            }
        } else {
            res.send({message:"User not registered"})
        }
    })
})

//get users
router.get('/users',(req,res)=>{
    Users.find().exec((err,users) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingUsers:users
        });
    });
});

//get a specific user details
router.get('/users/:id',(req,res) => {
    let userId = req.params.id;

    Users.findById(userId,(err,user) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            user
        });
    });
});

//update users
router.put('/users/update/:id',(req,res)=>{
    Users.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete user
router.delete('/students/delete/:id',(req,res)=>{
    Users.findByIdAndRemove(req.params.id).exec((err,deleteUser)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteUser
        });
    });
});

module.exports = router;
