import React, { useEffect, useState } from "react";
import {TiShoppingCart} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from '../Footer';
import pyramid from './images/pyramid.png'

function OrderHist(){

    const cart = useSelector((state) => state.cart)
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }  

        return (
         <>
      <div class="bg-amber-100 w-screen h-screen">

      <div class=" sm:h-32 sm:w-screen md:h-32 md:w-screen ">
      
      <ul className=' text-[1.5rem] flex flex-col md:flex-row px-2 justify-between'>

      <Link to ="/">
      <a href="#" className=" h-0 md:inset-y-0  text-neutral-700 md:text-[1.5rem] flex sm:translate-y-12 md:translate-y-8"><span className=' sm:text-4xl md:text-[3rem] text-[1.5rem] font-bold'>Sahara</span><img src={pyramid} alt="pyramid" className="translate-y-1 ml-0 my-auto md:mx-auto sm:pr-40 md:pr-20  mb-auto h-7 sm:translate-y-2.5 md:translate-y-1  md:h-10  md:translate-x-0"/></a>
      </Link>   
          
      <div class=" mx-auto text-sm sm:w-50  sm:text-base md:text-base md:font-medium text-center text-neutral-700 sm:-translate-x-20 md:translate-x-3 md:px-auto">
    <ul class=" flex pl-5 flex-wrap   py-2 translate-y-10 -translate-x-6 sm:translate-x-28 sm:translate-y-7 md:-translate-x-32 md:inset-0 md:translate-y-5 md:right-0 md:m-auto md:mr-auto">

    <Link to ="/user/profile">
        <li class="mr-2">
            <a href="#" class="inline-block mx-auto py-2 px-2 sm:py-4 sm:px-7 rounded-full bg-orange-500 md:bg-amber-100 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">Profile</a>
        </li>
        </Link>

        
        <li class="mr-2">
            <label href="#" class="inline-block mx-auto py-2 px-2 -translate-y-1 text-white sm:py-4 sm:px-7 border-4 md:translate-y-0 md:border-0 rounded-full border-orange-700 bg-orange-600  md:bg-amber-100 md:border-b-2 md:rounded-none  md:text-orange-500 md:border-orange-600">Order History</label>
        </li>
        
     

        <Link to ="/user/settings">
        <li class="mr-2">
            <a href="#" class="inline-block mx-auto py-2 px-1  md:translate-y-0 sm:py-4 sm:px-7 rounded-full text-neutral-700 bg-orange-500 md:bg-amber-100 md:border-0 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">User Settings</a>
        </li>
        </Link>
    </ul>
</div>
            <li className=" flex mx-auto w-14 h-14 md:inset-y-0 md:absolute right-0 md:pl10  -translate-y-6 translate-x-36 sm:translate-x-72 sm:-translate-y-14 md:translate-x-0 md:translate-y-20">

            <Link to ="/cart" class="w-14 h-14">

            <div className = "  flex  mx-auto">
            <TiShoppingCart size = {"50px"} className = " mt-4 text-orange-500"/>
            <p className =" bg-orange-500 rounded-full -translate-x-2 text-white text-lg sm:text-xl text-center -ml-4 px-2 pb-4  h-8 w-8">
            {getTotalQuantity() || 0}
            </p>
            </div>   
        </Link>
              </li>
            
        </ul>
        
        
       
      </div>
       
      <div class="w-11/12 h-4/6 mx-auto overflow-y-auto bg-white">

      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-red-900">Order 1</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-green-900">Order 2</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-orange-500">Order 3</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-neutral-900">Order 4</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-gray-500">Order 5</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-black">Order 6</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-green-500">Order 7</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-blue-900">Order 8</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-cyan-500">Order 9</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-indigo-500">Order 10</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-rose-600">Order 11</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-pink-900">Order 12</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-pink-400">Order 13</div>
      <div class="w-full h-1/6 text-xl text-white text-center mx-auto overflow-y-auto bg-red-500">Order 14</div>


      </div>



      </div>
      <Footer class="inset-x-0 bottom-0"/>
      </>
 )

}

export default OrderHist