import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { MdArrowRightAlt } from "react-icons/md";

const Header = () => {
  const logoImages = [
    require("../assets/logo-0.png"),
    require("../assets/logo-1.png"),
    require("../assets/logo-2.png"),
    require("../assets/logo-3.png"),
    require("../assets/logo-4.png"),
  ];

  return (
    <div className="overflow-y-hidden relative">
      <Nav />
      <motion.header
        className="flex flex-col md:flex-row items-center mx-4 md:mx-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-5xl md:text-8xl font-garamond mb-4">
            Renowned Architectural
          </h1>
          <p className="mb-4 md:w-3/4 lg:w-1/2">
            Sina Structural Plan is the zenith of prestigious designer Sina
            Sadeddin's times of involvement making excellent private homes.
            Established in 2004.
          </p>
          <motion.button
            className="bg-primary text-white font-garamond py-4 px-6 flex items-center transition-colors duration-300 hover:bg-black hidden md:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <MdArrowRightAlt className="ml-2" size={20} />
          </motion.button>
        </div>
        <div className="flex flex-col md:flex-row md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <div className="relative">
            <motion.img
              className="w-full md:w-auto"
              src={require("../assets/hero.jpeg")}
              alt="hero"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex md:flex-col md:justify-center ml-4 text-center md:ml-0 md:items-center space-x-4">
            <StatItem count="300+" label="Unique Styles" />
            <StatItem count="200+" label="Projects Finished" />
            <StatItem count="500+" label="Happy Customers" />
          </div>
        </div>
        <div className="flex justify-center my-4 md:hidden">
          <motion.button
            className="bg-primary text-white font-garamond py-5 px-8 flex items-center transition-colors duration-300 hover:bg-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <MdArrowRightAlt className="ml-2 mt-1" size={20} />
          </motion.button>
        </div>
      </motion.header>
      <div className="flex flex-wrap justify-evenly md:justify-around mx-4 my-12 md:mx-24 ">
        {logoImages.map((src, index) => (
          <LogoImage key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ count, label }) => {
  return (
    <div className="group mb-4 md:mr-8">
      <h1 className="text-3xl md:text-4xl font-garamond font-bold">{count}</h1>
      <p className="md:text-base text-sm mt-1">{label}</p>
    </div>
  );
};

const LogoImage = ({ src }) => {
  return (
    <motion.img
      src={src}
      className="h-8  transition-opacity duration-300 hover:opacity-75 mx-2 my-2 md:mx-4"
      alt="logo"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

export default Header;
