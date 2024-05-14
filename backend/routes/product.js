    import { Product } from "../models/productModel.js";
    import { Router } from "express";
    import mongoose from "mongoose";

    const router = Router();

    router.get('/products', async (req, res) => {
        try{
         
         const savedproduct = await Product.find();
         return res.send(savedproduct)
    
    }
    catch(error)
    {
    
        console.log(error)
        return res.status(500).send({message : error.message});
    }
    })

    export default router
    