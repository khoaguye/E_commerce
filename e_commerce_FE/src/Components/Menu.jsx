import React from 'react'
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <div className=" bg-light-grey md:bg-white w-[60%] md:h-[5vh] h-[50vh] p-4 mt-12 md:mt-2 absolute md:right-[6em] right-0 z-50 fixed ">
        <ul className='text-[1.5rem] flex flex-col md:flex-row justify-between'>
          <Link to = "/product">
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Products</li>
            </Link>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Deals</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Your wish list</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Sign In</li>
        </ul>
    </div>
  )
}

export default Menu