const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
    cardNo:{
        type:String,
        required:true
    },
    cdate:{
        type:Date,
        required:true
    },
    expMonth:{
        type:String,
        required:true
    },
    expYear:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    },
    cemail:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Payment', paymentSchema)
