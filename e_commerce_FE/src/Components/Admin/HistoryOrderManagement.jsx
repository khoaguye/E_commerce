import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios'

function HistoryOrderMangement() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAllOrders() {
      try {
        const response = await axios.get('/order/historyOrder');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllOrders();
  },);
  // const handleQuantityChange = (event, id) => {
  //   const updatedData = data.map((order) => {
  //     if (order.id === id) {
  //       return {
  //         ...order,
  //         quantity: parseInt(event.target.value),
  //       };
  //     }
  //     return order;
  //   });
  //   setData(updatedData);
  // };

  // const handleOrderStatusChange = (event, id) => {
  //   const updatedData = data.map((order) => {
  //     if (order.id === id) {
  //       return {
  //         ...order,
  //         orderStatus: event.target.value,
  //       };
  //     }
  //     return order;
  //   });
  //   setData(updatedData);
  // };
  return (
    <table className="table-fixed w-full mt-6">
    <thead className="bg-green-900 text-white">
      <tr>
        <th className="w-1/6 border border-white">Username</th>
        <th className="w-1/6 border border-white">Date</th>
        <th className="w-1/6 border border-white">Quantity</th>
        <th className="w-1/6 border border-white">Order Status</th>
        <th className="w-1/6 border border-white">Price</th>
        <th className="w-1/6 border border-white">Actions</th>
      </tr>
    </thead>
    <tbody overflow-x-scroll overflow-y-scroll >
      {data.map((order) => (
        <tr key={order.id} className="bg-white hover:bg-blue-300" >
          <td className="border border-green-900 pl-2">{order.username}</td>
          <td className="border border-green-900 pl-2">{order.date}</td>
          <td className="border border-green-900 pl-2">
            <input
              type="number"
              min="0"
              value={order.total_quantity}
              // onChange={(event) => handleQuantityChange(event, order.id)}
            />
          </td>
          <td className="border border-green-900 pl-2">
            <select
              value={order.orderStatus}
              // onChange={(event) => handleOrderStatusChange(event, order.id)}
            >
              <option value="ship">Ship</option>
              <option value="delivered">Delivered</option>
            </select>
          </td>
          <td className="border border-green-900 pl-2">${order.product_price}</td>
          <td className="border border-green-900 pl-2">
            <button >Delete</button>
          </td>
        </tr>
       ))} 
    </tbody>
  </table>
  )
}

export default HistoryOrderMangement
