import React from 'react'
import {ContextProvider} from "../Components/Product/ProductContext"
import Home from "./Home"
import {Routes, Route} from 'react-router-dom'
import Product from './Product'
import Detail_product from './Detail_product'
import Cart from './Cart'
import Filter_bar from '../Components/Product/Filter_bar'
import Product_manage from '../Components/Admin/Product_manage';
import { Login } from '../Components/Login/Login'
import { Register } from '../Components/Register/Register'
import Admin from './Admin'
function Pages() {
  return (
    <ContextProvider>
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path ='/product/:id' element ={<Detail_product/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/admin' element={<Admin/>}/> 
        <Route path = '/user/login' element={<Login/>}/>
        <Route path = '/user/register' element={<Register/>}/>
    </Routes>
    </ContextProvider>
  )
}

export default Pages