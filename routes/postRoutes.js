import express from "express"
import * as dotenv from "dotenv"
import mongodb from "../db/mongodb/index.js"
import { uploadimg } from "../utils/multersetup.js";
import cloud from "../config/cloudinary.js"



dotenv.config();

const router = express.Router();
router.get("/",(req, res)=>{
    res.send("Successfully connected to the route")
})

router.post("/upload", uploadimg.single("file"), (req, res)=>{
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
    const { stock_name, cost, price, quantity, category, message } = req.body;
    
    const postStock =async ()=>{
        const uploaded =await cloud.uploadCloudinary(req.file.buffer, "/succo/img/stocks")
            
        //const public_id = uploaded.public_id //path to image without extension or format
        const url = uploaded.url
        //post the form data and the image url to the mongodb database

        const newStock = await mongodb.Stock.create({
            name: stock_name,
            price: Number(price),
            description: message,
            category: category,
            img: url,
            qty: Number(quantity),
            cost: Number(cost),
        })
    }
    postStock()
})

export default router