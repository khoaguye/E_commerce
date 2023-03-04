import React, {useState} from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

function Header() {
    const [menuToggle, setMenuToggle] = useState(false)
    
    function handleToggle(){
        setMenuToggle(!menuToggle)
    }
  return (
  
    <div className='w-[100%]'>
    <div className='md:mt-[1em] mt-[2em]  flex justify-between '>
        <h1 className="text-green-900 md:text-[1.5rem]"><span className=' md:text-[2.5rem] text-[1.75rem] font-bold'>Shop</span> for <span className='md:text-[2.5rem] text-[1.75rem] font-bold'>You</span></h1>   
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
         
    </div>
  
  
  )
}

export default Header