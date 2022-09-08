const express = require('express');
const Payment = require('../models/payments');

const router = express.Router();

//get payment
router.get('/payment',(req,res)=>{
    Payment.find().exec((err,staff) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success
        })
    })
})