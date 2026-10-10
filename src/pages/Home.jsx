import React from "react";
import NatureVideo from "../assets/video/main.mp4";
import Hero from "../Components/Hero/Hero";
import Places from "../Components/Places/Places";
import Banner from "../Components/Banner/Banner";
import Blogs from "./Blogs";
import Banner2 from "../Components/Banner/Banner2";
import TravelImage from "../assets/places/cover-women.jpg";
import TravelImage2 from "../assets/places/travel-cover2.jpg";
import Testimonial from "../Components/Testimonial/Testimonial";
import Popup from "../Components/Popup/Popup";

const Home = () => {
  const [orderPopup, setOrderPopUp] = React.useState(false);

  const togglePopup = () => {
    setOrderPopUp(!orderPopup);
  };
  return (
    <>
      <div className="w-full">
        <div className="relative isolate overflow-hidden min-h-[700px] w-full flex justify-center items-center">
          <video
            src={NatureVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover "
          />
          <Hero />
        </div>
        <Places togglePopup={togglePopup} />
        <Banner TravelImage={TravelImage} />
        <Blogs />
        <Banner2 />
        <Banner TravelImage={TravelImage2} />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopUp={setOrderPopUp} />
      </div>
    </>
  );
};

export default Home;
