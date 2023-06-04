import React from "react";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const Features = () => {
  return (
    <div className="flex flex-col items-left md:items-center justify-center text-left md:text-center  p-12 md:p-24">
      <h1 className="font-garamond text-4xl md:text-7xl">
        We are World’s Leading <br />
        Home Designers
      </h1>
      <p className="mt-4 mb-12 font-light">
        It's for great minutes, minor achievements, and in the middle between.
        <br />
        It's for great minutes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <FeatureCard
          imgSrc={require("../assets/feature1.png")}
          title="Modern Designs"
          description="Local MLSs, or the databases where for-sale property listings are aggregated and then to major real estate websites, typically"
        />
        <FeatureCard
          imgSrc={require("../assets/feature2.png")}
          title="Quality Work"
          description="I will always point out those desirable things that the buyer might not know otherwise from just looking at the pictures"
        />
        <FeatureCard
          imgSrc={require("../assets/feature3.png")}
          title="Affordable Prices"
          description="A great location is especially important to share when your house is modest or needs some work, advises, a top-performing Las Vegas agent. If your interior is fairly dated"
        />
      </div>
      <button className="bg-primary text-white font-garamond md:py-3 py-4 px-6 flex items-center transition-colors duration-300 hover:bg-black mt-8">
        Learn More
        <MdArrowRightAlt className="ml-2 mt-1" size={20} />
      </button>
    </div>
  );
};

const FeatureCard = ({ imgSrc, title, description }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center py-16 px-8 border rounded-md shadow-md"
      variants={cardVariants}
      whileHover="hover"
    >
      <img src={imgSrc} alt={title} className="w-32 h-32 object-contain mb-4" />
      <h4 className="font-bold text-xl pb-4 font-garamond">{title}</h4>
      <p className="text-sm text-center">{description}</p>
    </motion.div>
  );
};

export default Features;
