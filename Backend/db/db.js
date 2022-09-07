const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://spmGroceryStore:!Gs432@cluster0.tcydskt.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

       console.log('DB Connection Success'); 
    } catch(err){
        console.log(err);
    }
};

module.exports = connectDB;