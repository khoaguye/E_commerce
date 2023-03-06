import React from 'react'
import Home from "./Home"
import {Routes, Route} from 'react-router-dom'
import Product from './Product'
import Detail_product from './Detail_product'
function Pages() {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path ='/product/id' element ={<Detail_product/>}/>
    </Routes>
  )
}

export default Pages