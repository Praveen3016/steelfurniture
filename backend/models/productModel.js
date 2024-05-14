import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    itemName: String,
    price: Number,
    desc: String,
    imageUrl: String
  });

 export const Product = mongoose.models.producs || mongoose.model('product' ,userSchema);