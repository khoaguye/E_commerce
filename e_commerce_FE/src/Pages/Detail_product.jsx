import React,{useContext} from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import Product_detail from '../Components/Product/Product_detail';
import ProductContext from "../Components/Product/ProductContext";
function Detail_product() {

  return (
    <>
    <div className="md:px-[6em]">
      <div className="px-[2em]">
        <Header/>
        <Product_detail className="mx-auto"/>
       
      </div>
    </div>
   
    </>
  )
}

export default Detail_product