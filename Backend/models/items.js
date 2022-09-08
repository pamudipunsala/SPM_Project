const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    icode:{
        type:String,
        // required:true
    },
    iname:{
        type:String,
        // required:true
    },
    ctg:{
        type:String,
        // required:true
    },
    amt:{
        type:Number,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    // img:{
    //     type:File,
    //     required:true
    // }

});

module.exports = mongoose.model('Items', itemSchema);