import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Filter_bar from "../Components/Product/Filter_bar";
import Product_Contain from "../Components/Product/Product_Contain";
import {AiOutlineDown} from 'react-icons/ai'

function Product() {
  const [filterMobile, setFilterMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    console.log(windowSize);
    if (windowSize.width < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  function handleFilterDropDown(){
    setFilterMobile(!filterMobile)
  }
  return (
    <div className="md:px-[6em]">
      <div className="px-[2em]">
        <Header />
      </div>
      <div className="mt-4 px-[2em] md:hidden flex gap-2"
            onClick={handleFilterDropDown}
      >
      <p>Filter</p>
      <AiOutlineDown className="mt-1 font-bold"/>
      </div>
      <div>
        {" "}
        {!isMobile ? (
          <div className="grid grid-cols-4 ">
            <div>
              <Filter_bar />
            </div>
            <div className="col-span-3 ">
              <Product_Contain />
            </div>
          </div>
        ) : (
          <div >
            <div>
              <Product_Contain  />
            </div>
            {filterMobile && <Filter_bar/>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
