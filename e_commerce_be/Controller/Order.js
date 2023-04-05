import { db } from "../db.js";

export const allOrder = (req, res) => {
    const q = `SELECT
  MAX(e_commere.order_management.id) as orderId,
   e_commere.user.username, e_commere.order_management.date, 
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
        // convert the date string to a Date object
        results.forEach(result => {
            result.date = new Date(result.date)
        })

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



export const createOrder =(req, res) =>{
    let orderId;
    const order_management_value = [
        req.body.uid,
        req.body.date,
        req.body.orderStatus
    ]
    
    const q = "INSERT INTO order_management (`uid`, `date`, `orderStatus`) VALUES (?)"
    db.query(q,[order_management_value], (error, results) =>{
        if(error){
            throw error;
        } else{
           orderId = results.insertId;
           const orderDetail_values = req.body.cart.map(item => [
            orderId,
            item.productId,
            item.quantity
          ]);
            const orderDetail_querry = 
            "INSERT INTO orderdetail (`orderId`, `productId`, `quantity`) VALUES ?"
            db.query(orderDetail_querry, [orderDetail_values], (error, results) =>{
                if(error){
                    throw error;
                }
                else{
                    res.status(201).json({orderId})
                }
            })
        }
    
    })
}

export const updateOrder = (req, res) =>{
    const orderStatus = req.body.orderStatus
    const orderId = req.body.id

    const q = `UPDATE order_management SET orderStatus = "${orderStatus}" WHERE id = ${orderId}`
    db.query(q,(error, results)=>{
        if(error) throw error;
        res.json({message: " Order successfull updated"})
    })
}
export const deleteOrder =(req,res) =>{
    const orderId = req.body.id
   
    const q = `DELETE FROM order_management WHERE id = ${orderId}`
  
    db.query(q, (error, results)=>{
      if(error) throw error;
      res.json({message: " Order successfull deleted"})
    })        
  
  }
