import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-primary font-dark font-extrabold mb-8 font-garamond">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="px-5 inline py-3 text-xl font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent  focus:outline-none bg-primary font-garamond active:bg-black hover:bg-black"
          >
            Homepage
          </Link>
          <p className="mt-8 text-sm text-gray-600">
            If you believe this is a mistake, you can contact the developer
            <a
              href="mailto:antirmenel@gmail.com"
              className="text-primary underline mx-1"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className=""
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
