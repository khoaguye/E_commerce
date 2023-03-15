import express from "express"
import {productContent, allProduct, category, productCategory,searchProduct, productDetail} from "../Controller/Product.js"
const router = express.Router();

router.get("/productContent", productContent)
router.get("/allProduct", allProduct)
router.get("/productDetail/:id", productDetail)
router.get("/category", category)
router.get("/productCategory/:category", productCategory)
router.get("/searchProduct/:product", searchProduct)



export default router