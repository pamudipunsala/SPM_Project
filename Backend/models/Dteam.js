const mongoose = require('mongoose');

const DteamSchema = new mongoose.Schema({

    teamcode:{
        type:String,
        unique: true
        // required:true
    },
    memberone:{
        type:String,
        // required:true
    },
    membertwo:{
        type:String,
        // required:true
    },
    memberthree:{
        type:String,
        // required:true
    },
    vehicleNo:{
        type:String,
        // required:true
    }

});

module.exports = mongoose.model('Dteam', DteamSchema);
