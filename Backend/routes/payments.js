const express = require('express');
const Payment = require('../models/payments');

const router = express.Router();

//save payment
router.post('/payment/save', (req,res) =>{
    let newPayment = new Payment(req.body);

    newPayment.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Paid successfully"
        });
    });
});

//get payment
router.get('/payment',(req,res)=>{
    Payment.find().exec((err,payment) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPayment:payment
        });
    });
});

//get a specific payment details
router.get('/payment/:id',(req,res)=>{
    let paymentId = req.params.id;

    Payment.findById(paymentId,(err,payment) => {
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            payment
        });
    });
});

//update payment
router.put('/payment/update/:id',(req,res) => {
    Payment.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err) =>{
            if(err) {
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete payment 
router.delete('/payment/delete/:id',(req,res) => {
    Payment.findByIdAndRemove(req.params.id).exec((err,deletePayment) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deletePayment
        });
    });
});

module.exports = router;