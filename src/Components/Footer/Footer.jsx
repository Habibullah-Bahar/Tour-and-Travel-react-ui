import React from "react";
import NatureVid from "../../assets/video/footer.mp4";
import FooterLogo from "../../assets/places/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="mt-6 relative overflow-hidden min-h-[550px]  flex justify-center items-center">
        <video
          src={NatureVid}
          autoPlay
          loop
          muted
          className="absolute left-0 bottom-0  w-full h-full overflow-hidden object-cover z-[-1]"
        ></video>
        <div className="flex flex-col sm:flex-row gap-8 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]   bg-white/80 rounded-t-2xl md:justify-between md:pr-34 my-6 py-12 px-4">
          <div 
          data-aos="zoom-in"
          className="h-full">
            <img src={FooterLogo} alt="" className="max-w-[100px]" />
            <p className="text-sm text-gray-600 w-[200px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum
              tenetur.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <FaLocationDot className="h-8 w-8 p-2 rounded-full bg-orange-100 dark:bg-orange-400 shadow-sm" />
              <p className="text-gray-800">Tangail, Dhaka </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdLocalPhone className="h-8 w-8 p-2 rounded-full bg-violet-100 dark:bg-violet-400 shadow-sm" />
              <p className="text-gray-800">+880 1703-321082</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <BsInstagram className="text-3xl" />
              </a>
              <a href="#">
                <BsLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebookSquare className="text-3xl" />
              </a>
            </div>
          </div>
          <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20 py-16 sm:py-0  sm:ml-6">
            {/* links  */}
            <div>
              <ul>
                <h1 className="text-2xl font-bold w-5 pb-3 dark:text-gray-600">Important Links</h1>
                {FooterLinks.map((item, id) => (
                  <li key={id}>
                    <div className="flex gap-1 items-center py-2 text-gray-600 hover:translate-x-1 transition-all duration-500 hover:text-primary">
                      <MdOutlineSubdirectoryArrowRight />
                      <a href={item.link}>
                        <p>{item.title} </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* links  */}
            <div>
              <ul>
                <h1 className="text-2xl font-bold w-5 pb-3">Important Links</h1>
                {FooterLinks.map((item, id) => (
                  <li key={id}>
                    <div className="flex gap-1 items-center py-2 text-gray-600 hover:translate-x-1 transition-all duration-500 hover:text-primary">
                      <MdOutlineSubdirectoryArrowRight />
                      <a href={item.link}>
                        <p>{item.title} </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* links  */}
            <div className="hidden md:block" >
              <ul>
                <h1 className="text-2xl font-bold w-5 pb-3">Important Links</h1>
                {FooterLinks.map((item, id) => (
                  <li key={id}>
                    <div className="flex gap-1 items-center py-2 text-gray-600 hover:translate-x-1 transition-all duration-500 hover:text-primary">
                      <MdOutlineSubdirectoryArrowRight />
                      <a href={item.link}>
                        <p>{item.title} </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
