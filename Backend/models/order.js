const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    oname:{
        type:String,
        required:true
    },
    odate:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Order', orderSchema)