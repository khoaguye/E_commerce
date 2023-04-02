import express from "express"
import { allOrder, historyOrder } from "../Controller/Order.js";
const router = express.Router();

router.get("/allOrder", allOrder)
router.get("/historyOrder", historyOrder)

export default router