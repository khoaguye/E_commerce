import React from 'react'
import Header from '../Components/Header'
import Filter_mobile from '../Components/Product/Filter_mobile'
import Sidebar from '../Components/Product/Sidebar'

function Product() {
  return (
    <div >
      <div className="px-[2em]  md:px-[6em]">
      <Header/>
      </div>
      <Filter_mobile/>
    </div>
  )
}

export default Product