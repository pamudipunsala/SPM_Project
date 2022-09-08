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

module.exports = router;