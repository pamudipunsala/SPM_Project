const express = require('express');
const Drequests = require('../models/Dreq');

const router = express.Router();

//add delivery request
router.post('/dreq/add', (req,res) => {
    let newRequest = new Drequests(req.body);

    newRequest.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Team added successfully!"
        });
    });
});

//retrive all delivery requests details
router.get('/dreqs', (req,res) => {
    Drequests.find().exec((err, deliveries) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDrequests:deliveries
        });
    });
});

//get specific delivery details
router.get("/dreq/:id", (req,res) => {
    let orderid = req.params.id;

    Drequests.findById(orderid, (err,deliveries) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            deliveries
        });
    });
});

//update request details
router.put('/dreq/update/:id',(req,res)=>{
    Drequests.findByIdAndUpdate(
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

//delete specific req details
router.delete('/dreq/delete/:id',(req,res)=>{
    Drequests.findByIdAndRemove(req.params.id).exec((err,deleteReq)=>{
        if(err) return res.status(400).json({
            message:"Couldn't Delete Request",err
        });
        return res.json({
            message:"Request Deleted successfully", deleteReq
        });
    });
});

module.exports = router;
