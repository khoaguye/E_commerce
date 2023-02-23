import React from 'react'

function Menu() {
  return (
    <div className=" bg-light-grey md:bg-white w-[60%] md:h-[10vh] h-[50vh] p-4 mt-12 absolute md:right-[8em] right-0 z-50 fixed ">
        <ul className='text-[1.5rem] flex flex-col md:flex-row justify-between'>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Categories</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Deals</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Your wish list</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Account</li>
        </ul>
    </div>
  )
}

export default Menu