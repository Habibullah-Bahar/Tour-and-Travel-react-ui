import React from "react";
import { Link } from "react-router-dom";
import BlogsDat from "./BlogData";

const BlogComp = () => {
  return (
    <>
      <div>
        <h1
          data-aos="zoom-in"
          className="border-l-8 border-primary/50 py-2 text-3xl font-bold mx-4 sm:mx-10  lg:mx-24 px-2 dark:bg-gray-900 dark:text-white"
        >
          Our Latest Blogs
        </h1>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 px-4 sm:px-10 lg:px-24 gap-6 cursor-pointer ">
            {BlogsDat.map((item) => (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <li className="shadow-md px-3 py-2">
                  <div>
                    <div  className="overflow-hidden">
                      <img
                      data-aos="zoom-in"
                        src={item.image}
                        className="mx-auto h-[220px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110 "
                        alt=""
                      />
                    </div>
                    <div  data-aos="fade-up" 
                    data-aos-delay="600"
                    className="flex justify-between pt-2 text-slate-600">
                      <h1> {item.date} </h1>
                      <p className="line-clamp-1">by {item.author} </p>
                    </div>
                    <div className="space-y-2 py-3">
                      <h1 className="line-clamp-1 font-bold"> {item.title} </h1>
                      <h1 className="line-clamp-2"> {item.description} </h1>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
