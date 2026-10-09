import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 4,
    name: "Best Places",
    link: "/places",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMenu(false)}
      />

      <div
        className={`
        ${showMenu ? "left-0" : "-left-[100%]"}
        fixed top-0 bottom-0 h-screen w-[75%]  bg-white text-black shadow-md rounded-r-2xl transition-all duration-500 z-50 dark:bg-gray-900 dark:text-white md:hidden
      `}
      >
        <div className="my-16 mx-8">
          <div className="flex flex-col gap-12">
            <div className="flex gap-2 font-serif">
              <FaUserCircle size={50} />
              <div className="flex flex-col">
                <p>Hello User</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Premium user</p>
              </div>
            </div>

            <div>
              <ul className="flex gap-8 flex-col text-lg">
                {NavbarLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="hover:text-gray-600 duration-300"
                      onClick={() => setShowMenu(false)}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
