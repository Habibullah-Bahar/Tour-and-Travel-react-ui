import React from "react";
import { IoClose } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopUp }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed h-screen w-screen top-0 left-0 z-50 backdrop-blur-sm font-serif dark:bg-gray-900 dark:text-white ">
          <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px] p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-lg">Book Your Trip</h1>
              <IoClose
                className="cursor-pointer text-xl "
                onClick={() => setOrderPopUp(false)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
              <input
                type="text"
                className="rounded-full w-full border border-gray-300 px-2 py-1 "
                placeholder="Name"
              />
              <input
                type="text"
                className="rounded-full w-full border border-gray-300 px-2 py-1 "
                placeholder="Email"
              />
              <input
                type="text"
                className="rounded-full w-full border border-gray-300 px-2 py-1 "
                placeholder="Address"
              />
              <div>
                <button className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white cursor-pointer shadow-md">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
