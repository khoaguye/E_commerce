import React from 'react'

import {AiFillStar,AiOutlineHeart} from 'react-icons/ai'
function ProductCard(props) {
  return (
    <div className="w-full h-full object-cover  flex flex-col gap-4 md:gap-2 relative">
        <AiOutlineHeart size={'20px'} className="absolute top-2 right-4"/>
        <img src={props.image} className='w-[100%] h-[50%]'/>
         <h1 className='text-[1.5rem] font-bold'>{props.name}</h1>
         <p className='font-light'>{props.description}</p>
         <p className='font-bold'>{props.prices}</p>
         <div className='flex '>
            <AiFillStar className='text-green-700'/>
            <AiFillStar className='text-green-700' />
            <AiFillStar className='text-green-700'/>
            <AiFillStar className='text-green-700'/>
         </div>
         <button className="rounded-full font-bold px-4 py-2 border-2 border-black bg-white hover:bg-green-900 hover:transition-duration-1000 hover:text-white"> Add to Cart</button>
    </div>
    
  )
}

export default ProductCard