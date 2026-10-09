import React from "react";
import TravelImage from "../../assets/places/travelbox.png";
import { MdFlight } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";

const Banner2 = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-[550px] px-4 sm:px-10 lg:px-24 pb-8 dark:bg-gray-900 dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div
          data-aos="flip-up"
          >
            <img
              src={TravelImage}
              alt=""
              className="max-w-[450px] w-full h-[200px] sm:h-[350px] object-cover mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]"
            />
          </div>
          <div>
            <h1 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold">
              Explore all corners of the world with us
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis doloremque in mollitia dicta deleniti molestiae itaque
              nostrum
            </p>
            <div data-aos="fade-up" className="flex gap-6 justify-between items-center">
              <div className="flex flex-col items-center gap-6 ">
                <div className="flex gap-4 items-center">
                  <MdFlight className="text-4xl p-4 h-12 w-12 shadow-sm rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <span>Flight</span>
                </div>
                <div className="flex gap-4 items-center">
                  <MdHotel className="text-4xl p-4  h-12 w-12 shadow-sm rounded-full bg-orange-100 dark:bg-orange-400" />
                  <span>Hotel</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 md:pr-44">
                <div className="flex gap-4 items-center">
                  <IoIosWifi className="text-4xl p-4  h-12 w-12 shadow-sm rounded-full bg-violet-100 dark:bg-violet-400" />
                  <span>Wi-Fi</span>
                </div>
                <div className="flex gap-4 items-center">
                  <IoFastFood className="text-4xl p-4  h-12 w-12 shadow-sm rounded-full bg-gray-100 dark:bg-gray-400" />
                  <span>Foods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
