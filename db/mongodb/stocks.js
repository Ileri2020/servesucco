import mongoose from "mongoose";

const StocksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    category: { type:String, enum: ['food', 'drink', 'snacks', 'suplement'], required: true },
    cost: {type: Number, required: true },
    price: {type: Number, required: true },
    qty: {type: Number},
});

const Stock = mongoose.model("Stocks", StocksSchema);

export default Stock;