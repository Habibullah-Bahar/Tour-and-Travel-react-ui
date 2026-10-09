import React from "react";

const Hero = () => {
  const [price, setPrice] = React.useState(150);
  return (
    <div className="flex justify-center items-center dark:bg-gray-900 dark:text-white w-full object-cover h-full ">
      <div className="flex flex-col px-auto justify-center items-center text-white w-[75%]">
        <div className="text-left">
          <h1 data-aos="fade-up" className="text-md">
            Our packages
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-3xl pb-3"
          >
            Search Your Destination
          </h1>
        </div>

        {/* card section */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="w-full mx-auto rounded-md bg-gray-100 px-4 py-10 text-gray-700 space-y-4 flex flex-col sm:flex-row gap-3"
        >
          <div className="sm:w-1/3 w-full ">
            <p>Searh your Destination</p>
            <input
              type="text"
              placeholder="Dubai"
              className="font-serif bg-primary/10 rounded-full px-2 py-2 border outline-none w-full"
            />
          </div>
          <div className="sm:w-1/3 w-full">
            <p>Date</p>
            <input
              type="date"
              placeholder="Dubai"
              className="font-serif bg-primary/10 rounded-full px-2 py-2 border outline-none w-full"
            />
          </div>
          <div className="sm:w-1/3 w-full">
            <div className="flex justify-between w-full">
              <p>Max Price</p>
              <p className="font-bold text-xl">${price}</p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-2 py-2 flex justify-center items-center w-full">
              <input
                type="range"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min={150}
                max={1000}
                step={10}
                className="w-full transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-delay="700" className="relative w-full">
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full cursor-pointer hover:scale-105 duration-300 absolute -bottom-4 translate-x-1/2 right-1/2 ">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
