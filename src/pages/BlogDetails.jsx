import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../../src/Components/BlogComp/BlogData";
import Nopage from "./Nopage";
import BlogComp from "../Components/BlogComp/BlogComp";

const BlogDetails = () => {
  
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === Number(id));
  if (!blog) {
    return (
      <div>
        <Nopage />
      </div>
    );
  }
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-20 pb-10">
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt=""
            className="h-[350px] w-full object-cover hover:scale-110 transition-all duration-700 cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-slate-600 mt-5 mx-6">
          <p>{blog.date} </p>
          <p>By {blog.author} </p>
        </div>
        <h1 className="text-4xl font-bold mt-5 mx-6"> {blog.title} </h1>
        <p className="leading-8 mx-6 text-slate-700 mt-6">
          {blog.description}{" "}
        </p>
      </div>
      <BlogComp />
    </>
  );
};

export default BlogDetails;
