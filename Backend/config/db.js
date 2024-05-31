import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://ayush:ayushshrivastava@cluster0.dzw7tro.mongodb.net/QuickBites').then(()=>console.log("DB Connected"));
}