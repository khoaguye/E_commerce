import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import Product_detail from '../Components/Product/Product_detail';
function Detail_product() {
  return (
    <>
    <div className="md:px-[6em]">
      <div className="px-[2em]">
        <Header />
        <Product_detail className="mx-auto"/>
       
      </div>
    
    </div>
    {/* <div className='md:fixed w-[100%] bottom-0'>
    <Footer/>
    </div> */}
   
    </>
  )
}

export default Detail_product