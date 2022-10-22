const mongoose = require('mongoose');

const DreqSchema = new mongoose.Schema({

    orderid:{
        type:String,
        unique: true
        // required:true
    },
    name:{
        type:String,
        // required:true
    },
    mobile:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    }

});

module.exports = mongoose.model('Dreq', DreqSchema);
