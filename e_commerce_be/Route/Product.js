import express from "express"
import {productContent, allProduct, category, productCategory,searchProduct} from "../Controller/Product.js"
const router = express.Router();

router.get("/productContent", productContent)
router.get("/allProduct", allProduct)
router.get("/category", category)
router.get("/productCategory/:category", productCategory)
router.get("/searchProduct/:product", searchProduct)



export default router