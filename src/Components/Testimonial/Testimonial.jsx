import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    role: "Product Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    role: "Marketing Lead",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center bg-white py-16 dark:bg-gray-900 dark:text-white">
      <div className="mb-14 max-w-[400px] px-4 text-center">
        <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm font-semibold text-transparent">
          What people say
        </p>
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <p className="mt-2 text-xs text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
          quam!
        </p>
      </div>

      <div data-aos="fade-up" className="w-full max-w-[700px] px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          rewind={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="!pb-12"
        >
          {testimonialData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="relative flex h-full flex-col items-center rounded-2xl bg-black/5 px-5 py-8 text-center shadow-md dark:bg-white/10">
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-1 font-serif text-7xl leading-none text-black/20 dark:text-white/20"
                  >
                    &rdquo;
                  </span>

                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-[100px] w-[100px] rounded-full object-cover ring-4 ring-white dark:ring-gray-800"
                  />

                  <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {item.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;