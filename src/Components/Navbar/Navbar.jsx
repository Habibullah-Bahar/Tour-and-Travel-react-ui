import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import Logo from "../../assets/places/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/about",
  },
];

const Navbar = ({ togglePopup }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div>
      <div className="w-full bg-white text-black shadow-md backdrop-blur-sm dark:bg-gray-900 dark:text-white">
        <div className="sm:flex justify-between w-full items-center backdrop-blur-sm py-[2px] hidden px-4 sm:px-12 md:px-24 bg-gradient-to-r from-primary to-secondary text-white">
          <h1 className="text-md">20% off on next booking</h1>
          <p className="flex items-center gap-2">
            <span>
              <MdPhoneInTalk className="text-md" />
            </span>
            +880 1703-321082
          </p>
        </div>
        {/* lower Navbar section  */}
        <div className="w-full px-4 md:px-16">
          <div className="flex justify-between items-center">
            <div>
              {/* section 1  */}
              <div>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={Logo} alt="" className="h-16" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* section 2  */}
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/blogs"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/places"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/about"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="group cursor-pointer relative">
                  <div className="flex items-center">
                    <p>Quick Links</p>
                    <MdArrowDropDown className="text-xl group-hover:rotate-180 transition-all duration-300" />
                  </div>
                  <div className="hidden z-10 group-hover:block absolute top-full -translate-x-6 text-black bg-gray-50 shadow-sm rounded-md py-2 w-[150px] items-center">
                    <ul className="text-left pt-6 p-1">
                      {DropdownLinks.map((item, idx) => (
                        <li key={idx}>
                          <a
                            className="w-full hover:bg-primary/20 rounded-md p-2 inline-block"
                            href={item.link}
                          >
                            {item.name}{" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              {/* section 3  */}
              <div className="flex items-center gap-4">
                <div>
                  <button
                    onClick={togglePopup}
                    className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer transition-all duration-700"
                  >
                    Book Now
                  </button>
                </div>
                <div className="md:hidden flex items-center gap-3">
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={toggleMenu}
                      className="cursor-pointer"
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={toggleMenu}
                      className="cursor-pointer"
                      size={30}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
