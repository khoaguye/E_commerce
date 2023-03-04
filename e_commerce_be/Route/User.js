import express from "express"
import {registerUser} from "../Controller/User.js"
const router = express.Router();

router.get("/register", registerUser)

export default router