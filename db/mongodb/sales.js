import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    img: { type: String, required: true },
    totalCost: {type: Number, required: true },
    totalSale: {type: Number, required: true },
    totalQty: {type: Number},
});

const Sale = mongoose.model("Sales", SalesSchema);

export default Sale;