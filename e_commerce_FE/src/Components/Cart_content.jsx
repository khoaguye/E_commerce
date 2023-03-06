import React from 'react'
import Cart_content_card from './Cart_content_card'

function Cart_content() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mt-[2em]'>
        <div className=' md:col-span-3  '>
            <div className='border '>
            <h1 className='text-[1rem] md:text-[2rem] font-bold text-yellow-600'>YOUR CARTS</h1>
                <Cart_content_card/>
                <Cart_content_card/>
                <Cart_content_card/>
            </div>
        </div>

        <div className='md:col-span-1 bg-blue-900'>
            <h1>Subtotal</h1>
        </div>
    </div>
  )
}

export default Cart_content