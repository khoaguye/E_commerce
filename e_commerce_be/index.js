import express from "express";
import productRouter from "./Route/Product.js"
const app = express()

app.use(express.json())

app.use("/api/product", productRouter)

app.listen(8800,()=>{
    console.log('connected112')
    console.log('hi')
})