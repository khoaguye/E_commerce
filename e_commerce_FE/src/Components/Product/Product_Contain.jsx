import React, {useState, useEffect, useContext} from 'react'
import head from '../headphone.png'
import ProductCard from '../ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CategoryContext from './CategoryContext'

function Product_Contain() {
     const [content, setContent] = useState([]);  
     const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);   
     console.log(selectedCategory)
     useEffect(() => {
          async function fetchAllProducts() {
               try {
                 const response = await axios.get('/product/allProduct');
                 setContent(response.data.products);
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
                 console.log(selectedCategory)
                 setContent(response.data.products);
                 console.log(response)
               } catch (error) {
                 console.error(error);
               }
             }
            
            fetchProducts();
          }
        }, [selectedCategory]);
    

  return (
    <div className="mt-4">
  
    <div className="mt-4 grid grid-cols-1 md:p-10 p-6 md:grid-cols-3  md:gap-10 mx-auto">
    {content.map((items) => ( 
     <div> 
           <Link to = {"/product/" + items.id}>
            <ProductCard
                key = {items.id}
                image = {items.images[0]}
                name = {items.title}
                description = {items.description}
                prices= {items.price}
           />
           </Link>
     </div>
           ))} 
    </div>
    
</div>
  )
}

export default Product_Contain