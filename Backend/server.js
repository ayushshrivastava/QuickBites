import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import'dotenv/config.js'


//app config 
const app = express()
const port = 5000

//middleware 
app.use(express.json())
app.use(cors())

//db connection 
connectDB();

//api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

//request the data from the server 
app.get("/",(req,res)=>{
    res.send("API Working")

})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://ayush:ayushshrivastava@cluster0.dzw7tro.mongodb.net/?