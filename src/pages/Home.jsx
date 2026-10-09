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
    <div className="h-full w-full">
      <div className="h-[700px] relative">
        <video
          src={NatureVideo}
          autoPlay
          muted
          loop
          className="absolute top-0 right-0 w-full h-[700px] object-cover z-[-1] "
        /> 
        <Hero />
      </div>
      <Places togglePopup={togglePopup}/>
      <Banner TravelImage={TravelImage} />
      <Blogs />
      <Banner2 />
      <Banner TravelImage={TravelImage2} />
      <Testimonial />
      <Popup orderPopup={orderPopup} setOrderPopUp={setOrderPopUp} />
    </div>
  );
};

export default Home;
