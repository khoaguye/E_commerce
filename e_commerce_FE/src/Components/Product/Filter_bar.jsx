import React, { useState } from "react";

function Filter_bar() {
  const [price, setPrice] = useState(50);
  const [checkboxes, setCheckboxes] = useState([
    { id: "checkbox1", label: "Product A - Z", isChecked: false },
    { id: "checkbox2", label: "Product Z - A", isChecked: false },
    { id: "checkbox3", label: "Price Low - High", isChecked: false },
    { id: "checkbox4", label: "Price High - Low", isChecked: false },
  ]);
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleCheckboxChange(event) {
    const clickedCheckboxId = event.target.id;
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === clickedCheckboxId
          ? { ...checkbox, isChecked: event.target.checked }
          : checkbox
      )
    );
  }
  return (
    <div className=" md:mt-2 flex flex-col md:gap-7 gap-4 border md:border-none">
      <div className="mt-4 px-4">
        <h2 className="text-[1.5rem] font-bold text-green-900">Categories</h2>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="bg-light-grey rounded-full p-2 ">
            <p> Technologies </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Fashsions </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Furnitures</p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Cosmetics </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Jewelleries </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Skincare </p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4">
        <h2 className="text-[1.5rem] font-bold text-green-900">Prices</h2>
        <div className=" flex space-between">
          <div className="bg-light-grey rounded-full p-2 gap-4">
            <p> Under $50 </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Under $200 </p>
          </div>
          <div className="bg-light-grey rounded-full p-2">
            <p> Under $500 </p>
          </div>
        </div>
        <div className="w-full">
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="500"
            value={price}
            onChange={handlePriceChange}
            className="w-[100%] accent-green-900"
          />
          <label
            htmlFor="price"
            className="block  text-gray-700 font-bold mb-2"
          >
            Price: $0 - ${price}
          </label>
          <button className="bg-light-grey px-4 py-2 rounded-full mt-1 font-bold">
            APPLY
          </button>
        </div>
      </div>

      <div className="mt-4 px-4">
        <h2 className="text-[1.5rem] font-bold text-green-900">Sorting</h2>

        <div className=" grid grid-cols-2 gap-4 ">
          {checkboxes.map(({ id, label, isChecked }) => (
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 accent-green-900"
                  checked={isChecked}
                  id={id}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700">{label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <button className=" w-[100%] mt-4 bg-green-900 text-white  px-5 py-3 text-[1.25rem] tracking-wider">RESET FILTER</button>
      
    </div>
  );
}

export default Filter_bar;
