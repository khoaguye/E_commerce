import React, {useState, useEffect, useContext} from 'react'
import ProductCard from '../ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CategoryContext from './CategoryContext'

function Product_Contain() {
     const {content, setContent} = useContext(CategoryContext);  
     const {subContent, setsubContent} = useContext(CategoryContext)
     const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);  
     
     console.log(selectedCategory)
     useEffect(() => {
          async function fetchAllProducts() {
               try {
                 const response = await axios.get('/product/allProduct');
                 setContent(response.data.products);
                 setsubContent(response.data.products);
               
               } catch (error) {
                 console.error(error);
               }
          }
      
          if (selectedCategory === 'All Categories') {
           
            fetchAllProducts();
          } else {
          async function fetchProducts() {
               try {
                
                 const response = await axios.get(`/product/productcategory/${selectedCategory}`);
                 setContent(response.data.products);
                 setsubContent(response.data.products);
               } catch (error) {
                 console.error(error);
               }
             }
            
            fetchProducts();
          }
        
        },[selectedCategory]);
    
  return (
    <div className="mt-4">
    {/* {filterContent.length === 0  ?  */}
    <div className="mt-4 grid grid-cols-1 md:p-10 p-6 md:grid-cols-3  md:gap-10 mx-auto">
    {subContent.map((items) => ( 
     <div> 
         
            <ProductCard
                id = {items.id}
                image = {items.images[0]}
                name = {items.title}
                description = {items.description}
                prices= {items.price}
           />
     
     </div>
           ))} 
    </div>    
</div>
  )
}

export default Product_Contain