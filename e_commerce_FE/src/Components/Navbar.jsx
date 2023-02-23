import React, {useState} from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import headPhone from "./a.png"
function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false)
    
    function handleToggle(){
        setMenuToggle(!menuToggle)
    }
  return (
    <div className='px-[2em] md:px-[6em] h-[100vh] w-[100%]'>
    <div className='md:mt-[1em] mt-[2em]  flex justify-between '>
        <h1 className="text-green-900 md:text-[1.5rem]"><span className=' md:text-[2.5rem] text-[1.75rem] text-bold'>Shop</span> for <span className='md:text-[2.5rem] text-[1.75rem] text-strong'>You</span></h1>
    <div className=" hidden md:block  md:bg-white w-[60%] md:h-[10vh] h-[50vh] p-4 mt-0 absolute md:right-[8em] right-0 z-50 fixed ">
        <ul className='text-[1.5rem] flex flex-col md:flex-row justify-between'>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Categories</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Deals</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Your wish list</li>
            <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Account</li>
        </ul>
    </div>
    
        {
            !menuToggle ?
         <GiHamburgerMenu size={"30px"} className='mt-2 text-green-900  md:hidden'
            onClick={handleToggle}
         /> : 
            <BsFillArrowRightSquareFill size={"30px"} className='mt-2 text-green-900'
            onClick={handleToggle}/>
        }
         {
            menuToggle && <Menu />
         }
         </div>

        <div className ="bg-light-pink mt-[2em] w-[100%] h-[50%] text-center p-5 flex flex-col justify-around md:flex-row">
        <div className=" md:h-[50%] md:my-auto">
            <h1 className= " md:text-[4rem] text-[1.5rem] text-green-900 text-bold">Welcome To Shop for You</h1>
            <p className = "md:text-[1.5rem]" > ALL item is sale up to 50%</p>
            
            <button className = "bg-green-900 rounded-full border px-10 md:text-[1.25rem] py-2 text-white text-strong mt-3"> Buy Now</button>
            </div> 
            <img src={headPhone} alt="headphone" className=" mx-auto w-[140px] md:w-[450px]"/>
        </div>
         
    </div>
  )
}

export default Navbar