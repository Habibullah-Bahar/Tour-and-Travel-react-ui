import React from "react";
import { MdPhoneInTalk, MdArrowDropDown } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/places/logo.png";
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="relative z-50 w-full bg-white text-black shadow-md dark:bg-gray-900 dark:text-white">
      {/* Top Navbar */}
      <div className="hidden w-full items-center justify-between bg-gradient-to-r from-primary to-secondary px-6 py-1 text-white sm:flex md:px-12 lg:px-24">
        <p className="text-sm md:text-base">20% off on next booking</p>

        <p className="flex items-center gap-2 text-sm md:text-base">
          <MdPhoneInTalk />
          +880 1703-321082
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-3 sm:px-4 md:px-8 lg:px-16">
        <div className="flex min-h-16 w-full items-center justify-between gap-2 sm:min-h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src={Logo}
              alt="Travel Logo"
              className="h-11 w-auto sm:h-14 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4 lg:gap-6">
              <li className="py-4">
                <NavLink
                  to="/"
                  onClick={scrollToTop}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Home
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink
                  to="/blogs"
                  onClick={scrollToTop}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Blogs
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink
                  to="/places"
                  onClick={scrollToTop}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Best Places
                </NavLink>
              </li>

              <li className="py-4">
                <NavLink
                  to="/about"
                  onClick={scrollToTop}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  About
                </NavLink>
              </li>

              {/* Dropdown */}
              <li className="group relative cursor-pointer py-4">
                <div className="flex items-center gap-1">
                  <span>Quick Links</span>

                  <MdArrowDropDown className="text-xl transition-transform duration-300 group-hover:rotate-180" />
                </div>

                <div className="invisible absolute left-0 top-full z-50 w-40 translate-y-2 rounded-md bg-white py-2 text-black opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul>
                    {DropdownLinks.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.link}
                          className="block w-full px-3 py-2 transition-colors hover:bg-primary/20"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              onClick={togglePopup}
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-secondary px-2.5 py-1.5 text-xs text-white transition-all duration-300 hover:scale-105 sm:px-3 sm:text-sm md:px-4 md:text-base"
            >
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={toggleMenu}
              className="flex shrink-0 items-center justify-center md:hidden"
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              {showMenu ? <HiMenuAlt1 size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
