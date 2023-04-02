import { db } from "../db.js";

export const allOrder = (req, res) => {
    const q = `SELECT e_commere.user.username, e_commere.order_management.date, 
   SUM(e_commere.orderdetail.quantity) as total_quantity, 
   MAX(e_commere.order_management.orderStatus) as order_status, 
   SUM(e_commere.products.price) as product_price
   FROM e_commere.user 
   JOIN e_commere.order_management ON e_commere.user.id = e_commere.order_management.uid
   JOIN e_commere.orderdetail ON e_commere.order_management.id = e_commere.orderdetail.orderId
   JOIN e_commere.products ON e_commere.orderdetail.productId = e_commere.products.id
   
   GROUP BY e_commere.user.username, e_commere.order_management.date;
`
    db.query(q, [req.query], (error, results) => {
        if (error) return res.send(err)
        return res.status(200).json(results)
    })
}

export const historyOrder = (req, res) => {
    const q = `SELECT e_commere.user.username, e_commere.order_management.date, 
    SUM(e_commere.orderdetail.quantity) as total_quantity, 
    MAX(e_commere.order_management.orderStatus) as order_status, 
    SUM(e_commere.products.price) as product_price
    FROM e_commere.user 
    JOIN e_commere.order_management ON e_commere.user.id = e_commere.order_management.uid
    JOIN e_commere.orderdetail ON e_commere.order_management.id = e_commere.orderdetail.orderId
    JOIN e_commere.products ON e_commere.orderdetail.productId = e_commere.products.id
    WHERE e_commere.order_management.orderStatus = 'delivered'
    GROUP BY e_commere.user.username, e_commere.order_management.date;
 `
     db.query(q, [req.query], (error, results) => {
         if (error) return res.send(err)
         return res.status(200).json(results)
     })
}

export const updateOrder = (req, res) =>{
}