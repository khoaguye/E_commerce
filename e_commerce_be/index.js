import express from "express";
import productRouter from "./Route/Product.js"
import userInfor from "./Route/User.js"
import orderInfor from "./Route/Order.js"
import promoteCode from "./Route/PromotionCode.js"
const app = express()

app.use(express.json())

app.use("/api/product", productRouter)
app.use("/api/user", userInfor)
app.use("/api/order", orderInfor)
app.use("/api/promote", promoteCode)

app.listen(8800,()=>{
    console.log('connected')
})