const express = require('express');
const Items = require('../models/items');

const router = express.Router();

router.post('/items/insert', (req,res) => {
    let newItemDtl = new Items(req.body);

    newItemDtl.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details added successfully!"
        });
    });
});

router.get('/items', (req,res) => {
    Items.find().exec((err, items) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingItems:items
        });
    });
});

router.get("/items/:id", (req,res) => {
    let icode = req.params.id;

    Items.findById(icode, (err,items) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            items
        });
    });
});

router.put('/items/update/:id',(req,res)=>{
    Items.findByIdAndUpdate(
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

router.delete('/items/delete/:id',(req,res)=>{
    Items.findByIdAndRemove(req.params.id).exec((err,deleteItem)=>{
        if(err) return res.status(400).json({
            message:"Couldn't Delete Details",err
        });
        return res.json({
            message:"Details Deleted successfully", deleteItem
        });
    });
});

module.exports = router;