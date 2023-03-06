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
    <div className="mt-4 gap-5 p-3 border w-full h-full object-cover">
      <div className="flex">
        <div className="w-[30%] ">
          <img src={head} className="w-[100%]" />
        </div>
        <div className="w-[70%]">
          <p className="md:text-[2rem]">
            Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones
          </p>
          <p className="font-bold text-[1.25rem] md:text-[2rem] mt-2">$300</p>
          <p className="hidden md:block mt-4 font-light">
            About this item Industry-leading noise canceling with Dual Noise
            Sensor technology Next-level music with Edge-AI, co-developed with
            Sony Music Studios Tokyo Up to 30-hour battery life with quick
            charging (10 min charge for 5 hours of playback) Touch Sensor
            controls to pause play skip tracks, control volume, activate your
            voice assistant, and answer phone calls.Note:If you face issue in
            Bluetooth connectivity please turn off the Bluetooth function for a
            couple of minutes, then turn it back on Speak-to-chat technology
            automatically reduces volume during conversations Superior call
            quality with precise voice pickup Wearing detection pauses playback
            when headphones are removed{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 mt-3 md:mt-5">
          <AiFillPlusCircle size={"25px"} className="mt-2 text-green-900" />
          <div class="flex justify-center items-center h-10 w-24 rounded-full bg-light-grey">
            <p class="text-center">0</p>
          </div>
          <AiFillMinusCircle size={"25px"} className="mt-2 text-green-900" />
        </div>

        <div class="flex justify-between mt-3 md:mt-[3em]">
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
