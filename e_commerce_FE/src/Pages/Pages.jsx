import React from 'react'
import Home from "./Home"
import {Routes, Route} from 'react-router-dom'
import Product from './Product'
import Detail_product from './Detail_product'
import Cart from './Cart'
import Filter_bar from '../Components/Product/Filter_bar'
import Product_manage from '../Components/Admin/Product_manage';
import Admin from './Admin'
function Pages() {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path ='/product/:id' element ={<Detail_product/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/admin' element={<Admin/>}/> 
    </Routes>
  )
}

export default Pages