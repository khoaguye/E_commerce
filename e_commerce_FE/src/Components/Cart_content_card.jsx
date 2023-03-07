import React from "react";
import head from "./headphone.png";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
function Cart_content_card() {
  return (
    <div className="mt-4 p-3 border w-full h-full md:h-1/2 object-cover ">
        <div className="flex gap-4 md:gap-0">
      <div className="w-[30%] h-full ml-2">
        <img
          src={head}
          alt="your-image-alt"
          className="h-full w-full md:w-[50%] object-cover"
        />
      </div>
      <div className="w-[70%] md:p-4">
        <p className="md:text-[1.25rem]"> Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones</p>
        <p className="font-bold text-[1.25rem] md:text-[1.5rem] mt-2">$300</p>
      </div>
    </div>    
        
      <div className="flex justify-between">
        <div className="flex gap-4 mt-3 md:mt-2">
          <AiFillPlusCircle size={"25px"} className="mt-2 text-green-900" />
          <div class="flex justify-center items-center h-10 w-24 rounded-full bg-light-grey">
            <p class="text-center">0</p>
          </div>
          <AiFillMinusCircle size={"25px"} className="mt-2 text-green-900" />
        </div>

        <div class="flex justify-between mt-3 ">
          <button
            class="flex-1 bg-transparent border border-green-900 text-green-900 font-bold py-2 px-4 md:px-6 rounded transition-colors duration-300 hover:bg-green-900 hover:text-white focus:outline-none focus:bg-green-900 focus:text-white"
            onclick="this.classList.toggle('bg-green-500'); this.classList.toggle('text-white')"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_content_card;
