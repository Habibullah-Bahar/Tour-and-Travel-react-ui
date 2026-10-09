import React from "react";
import img1 from "../../assets/places/boat.jpg";
import img2 from "../../assets/places/tajmahal.jpg";
import img3 from "../../assets/places/water.jpg";
import img4 from "../../assets/places/place4.jpg";
import img5 from "../../assets/places/place5.jpg";
import img6 from "../../assets/places/place6.jpg";
import { MdLocationOn } from "react-icons/md";

const PlacesData = [
  {
    img: img1,
    title: "Boat Tour",
    location: "USA",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: img4,
    title: "Sydney",
    location: "USA",
    description:
      "lorem The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra. ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];
const Places = ({ togglePopup }) => {
  return (
    <div className="bg-white text-black py-10 w-full mx-auto dark:text-white dark:bg-gray-950">
      <div className="px-24">
        <h1
          data-aos="fade-up"
          className="border-l-8 border-primary/50 text-3xl font-bold py-2 my-8 mx-3 px-2"
        >
          Best Places to visit
        </h1>
        <div>
          <ul
            onClick={togglePopup}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
          >
            {PlacesData.map((item, idx) => (
              <li key={idx} className="cursor-pointer px-3 py-4 ">
                <div className="" data-aos="zoom-in">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="h-[220px] object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110 w-full"
                    />
                  </div>
                  <div className="shadow-md space-y-2 py-3 px-2">
                    <h1 className="font-bold line-clamp-1 text-xl">
                      {item.title}{" "}
                    </h1>
                    <p className="flex items-center gap-2 opacity-70">
                      {" "}
                      <MdLocationOn /> <span>{item.location}</span>{" "}
                    </p>
                    <p className="line-clamp-2">{item.description} </p>

                    <div className="flex items-center justify-between border-t-2 border-gray-200 ">
                      <p className="opacity-70">{item.type}</p>
                      <p className="text-lg font-bold">${item.price} </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Places;
