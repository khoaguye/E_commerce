import { db } from "../db.js"
import bcrypt from "bcryptjs"

export const registerUser = (req, res)=>{
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"
    db.query(q,[req.body.email, req.body.username], (err, data)=>{
        if(err) return res.json
        if(data.length) return res.status(409).json("user already exists")

        //hashy the pass
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.pw, salt);

        const q = "INSERT INTO user(`fname`,`lname`,`username`, `pw`,`email`, `address`, `phone`) VALUES (?)"
        const values = [
            req.body.fname,
            req.body.lname,
            req.body.username,
            hash,
            req.body.email,
            req.body.address,
            req.body.phone
        ]

        db.query(q, [values], (err, data)=>{
            if (err) return res.json(err);
            return res.status(200).json("USER CREATED")
        })
    })

}
