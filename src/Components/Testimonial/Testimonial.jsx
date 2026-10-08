import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-20 max-w-[400px] ">
          <h1 className="text-sm bg-gradient-to-r to-secondary from-primary bg-clip-text text-transparent">
            Testimonial
          </h1>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        <div data-aos="fade-left" className="max-w-[700px] mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            
            className="mx-auto"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col items-center w-[300px] justify-center rounded-2xl shadow-md bg-black/10 px-3 py-4 space-y-4 mb-12">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[120px] h-[120px] rounded-full object-cover"
                    />
                  </div>
                  <h1 className="text-xl font-bold">{item.name} </h1>
                  <p className="text-gray-500 text-sm"> {item.text} </p>
                  <p className="font-serif text-9xl absolute top-0 right-0 text-black/20">
                    ,,
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
