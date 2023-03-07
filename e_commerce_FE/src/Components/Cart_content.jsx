import React, { useState } from "react";
import Cart_content_card from "./Cart_content_card";
import DeliveryMethod from "./DeliverryMethod";

function Cart_content() {
  const [selectedOption, setSelectedOption] = useState("credit-card");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform payment method submission logic
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-[2em] gap-4">
      <div className=" md:col-span-3 ">
        <div className="border p-3 md:p-5 ">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            YOUR CARTS
          </h1>
          <Cart_content_card />
          <Cart_content_card />
           <Cart_content_card />
           
        </div>
        <div className="border mt-4 p-3 md:p-5">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            PAYMENT METHODS
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Payment Method</h2>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit-card"
                  name="paymentMethod"
                  value="credit-card"
                  checked={selectedOption === "credit-card"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="credit-card" className="ml-3">
                  Credit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={selectedOption === "paypal"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="paypal" className="ml-3">
                  PayPal
                </label>
              </div>
            </div>
            {selectedOption === "credit-card" && (
              <div>
                <h2 className="text-lg font-medium mb-2">
                  Credit Card Information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nameOnCard"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      className="form-input w-full border"
                    />
                  </div>
                </div>
              </div>
            )}
            {selectedOption === "paypal" && (
              <div>
                <h2 className="text-lg font-medium mb-2">PayPal Information</h2>
                <div>
                  <p>
                    Please login to your PayPal account to complete the payment.
                  </p>
                </div>
              </div>
            )}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <DeliveryMethod />
      </div>

      <div className="md:col-span-1 ">
        <div className=" p-3 md:p-5 border bg-white rounded-lg shadow-lg">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            Subtotal <span className="text-[1rem]">(1 item)</span> 
          </h1>
          <div className="flex justify-between font-light mt-4">
            <div >
             <p>SubTotals: </p>
             <p>Tax(8%): </p> 
             </div>
                <div>
                <p> $300</p>
                 <p>+ $24 </p>
                </div>

        </div>
        <hr/>
        <div className="flex justify-between font-light mt-4">
            <div >
             <p>Your Totals: </p>
             </div>
                <div>
                <p> $340</p>
                </div>

        </div>
        <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 w-[100%] hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Pay Now
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart_content;
