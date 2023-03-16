import React from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {addToCart} from '../Redux/cartSlice';
import { Link } from 'react-router-dom'
function ProductCard({id, name, image, description, prices}) {
 const dispatch = useDispatch() 
 const handleAddToCart = (event) => {
  event.preventDefault();
  dispatch(addToCart({id, name, image, prices}));
}
  return (
    <Link to ={"/product/" + id}>
    <div className="w-[100%] md:w-[90%] p-4 h-full object-cover flex flex-col gap-4 md:gap-2 relative bg-white rounded-lg shadow-lg">
    <AiOutlineHeart size={'25px'} className="absolute top-2 right-4" />
    <div className='w-full h-full object-cover'>
      <img src={image} className='w-[100%]'/>
    </div>
    <div>
      <h1 className='text-[1.5rem] font-bold w-full h-full object-cover'>{name}</h1>
    </div>
    <div>
      <p className='font-light'>{description}</p>
    </div>
    <p className='font-bold text-[1.5rem]'>$ {prices}</p>
    <div className='flex '>
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
    </div>
    <button className="rounded-full font-bold px-4 py-2 border-2 border-black bg-white hover:bg-green-900 hover:transition-duration-1000 hover:text-white"
     onClick={handleAddToCart}
    > Add to Cart</button>
  </div>
  </Link>
  )
}

export default ProductCard