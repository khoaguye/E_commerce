import React from 'react'
import head from './headphone.png'
import ProductCard from './ProductCard'
function Product() {
  return (
    <div className="mt-4">
        <h1 className='text-green-900 text-[1.5rem] font-bold'>Happy Shopping!!</h1>
        <div className="mt-4 grid grid-cols-1 md:p-10 p-6 md:grid-cols-3 gap-6 mx-auto">
            <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />
            
            <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />

        <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />

        <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />

        <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />

        <ProductCard
                image = {head}
                name = "Sony Headphone MX3000"
                description = "Premium bone conduction noise cancellation bluetooth headphone "
           />




        </div>
    </div>
  )
}

export default Product