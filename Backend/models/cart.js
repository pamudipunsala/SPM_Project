const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    active: Boolean,
    modifiedOn: Date,
    products: [
      {
        productId:String,
        qunantity: String,
        name: String,
        price: Number,
        
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", CartSchema);