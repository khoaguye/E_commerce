import express from "express";
import productRouter from "./Route/Product.js"
import userInfor from "./Route/User.js"
import orderInfor from "./Route/Order.js"
import promoteCode from "./Route/PromotionCode.js"
import cors from "cors" //npm install cors
import cookieParser from "cookie-parser"//npm install cookie-parser
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(
    cors({
      origin: "http://localhost:3000",
    })
);
app.use(cookieParser()) 
app.use("/api/product", productRouter)
app.use("/api/user", userInfor)
app.use("/api/order", orderInfor)
app.use("/api/promote", promoteCode)

app.listen(8800,()=>{
    console.log('connected')
})