import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Popup from "../Components/Popup/Popup";

const Layout = () => {
  const [orderPopup, setOrderPopUp] = React.useState(false);

  const togglePopup = () => {
    setOrderPopUp(!orderPopup);
  };
  return (
    <>
      <div>
        <Navbar togglePopup={togglePopup} />
        <Outlet />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopUp={setOrderPopUp} />
      </div>
    </>
  );
};

export default Layout;
