import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
        quantity: { type: Number},
      },
    ],
  });



const Cart = mongoose.model("Cart", cartSchema);

export default Cart;