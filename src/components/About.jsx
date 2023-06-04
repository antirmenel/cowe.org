import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <h1 className="font-garamond text-6xl md:text-7xl -ml-12 md:-ml-0">
            Residential
            <br />
            Development
          </h1>
        </div>
        <p className="w-full md:w-1/2 mt-4 md:mt-0 font-light">
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8">
        <AnimatedCard
          imgSrc={require("../assets/first.png")}
          title="Shiva Stuthi Residence Before"
          author="Wright Inspires © Ash R Jain"
        />
        <AnimatedCard
          imgSrc={require("../assets/second.png")}
          title="Shiva Stuthi Residence After"
          author="Wright Inspires © Ash R Jain"
        />
        <AnimatedCard
          imgSrc={require("../assets/third.png")}
          title="Artificial Lighting Before"
          author="Improve the Kitchen Space"
        />
        <AnimatedCard
          imgSrc={require("../assets/fourth.png")}
          title="Artificial Lighting After"
          author="Improve the Kitchen Space"
        />
      </div>
    </div>
  );
};

const AnimatedCard = ({ imgSrc, title, author }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const getFlexBasis = () => {
    if (window.innerWidth <= 768) {
      return "100%";
    } else {
      return "calc(50% - 1rem)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg m-2"
      style={{ flexBasis: getFlexBasis() }}
    >
      <img src={imgSrc} alt="residence" className="w-full md:w-auto mb-4" />
      <h4 className="font-garamond text-xl">{title}</h4>
      <p className="text-sm">{author}</p>
    </motion.div>
  );
};

export default About;
