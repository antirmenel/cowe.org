import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12">
      <motion.div
        className="flex flex-col md:flex-row items-left justify-between mx-4 md:mx-0"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl xl:text-7xl mr-2">
          Why Should <br />
          Choose Our
        </h1>
        <p className="w-full md:w-1/2 mt-4 md:mt-0 font-light">
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
          It's for great minutes, minor achievements, and in the middle between.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-around mt-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="flex flex-col md:mr-8 mx-4 md:mx-12">
          <motion.div className="faq-item" whileHover={{ scale: 1.1 }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-garamond">
              Dedicated home office
            </h2>
            <div className="flex justify-between md:space-x-24 lg:space-x-32">
              <p className="w-2/5 text-sm mb-2 md:w-1/3 lg:w-2/5">
                Sale property listings
              </p>
              <div className="flex space-x-4">
                <p>$1,0000</p>
                <p>$1,0000</p>
              </div>
            </div>
            <hr className="w-full md:w-[40rem] border-1 border-black" />
          </motion.div>
          <motion.div className="faq-item" whileHover={{ scale: 1.1 }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-garamond mt-10">
              Corner lot
            </h2>
            <div className="flex justify-between md:space-x-24 lg:space-x-32">
              <p className="w-2/5 text-sm mb-2 md:w-1/3 lg:w-2/5">
                Aggregated and then to major
              </p>
              <div className="flex space-x-4">
                <p>$2’000</p>
                <p>$2’000</p>
              </div>
            </div>
            <hr className="border-1 border-black" />
          </motion.div>
          <motion.div className="faq-item" whileHover={{ scale: 1.1 }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-garamond mt-10">
              Hardwood floors
            </h2>
            <div className="flex justify-between md:space-x-24 lg:space-x-32">
              <p className="w-2/5 text-sm mb-2 md:w-1/3 lg:w-2/5">
                Major real estate
              </p>
              <div className="flex space-x-4">
                <p>$9,0000</p>
                <p>$9,0000</p>
              </div>
            </div>
            <hr className="border-1 border-black" />
          </motion.div>
          <motion.div className="faq-item" whileHover={{ scale: 1.1 }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-garamond mt-10">
              Front porch or deck
            </h2>
            <div className="flex justify-between md:space-x-24 lg:space-x-32">
              <p className="w-2/5 text-sm mb-2 md:w-1/3 lg:w-2/5">
                House is modest some work
              </p>
              <div className="flex space-x-4">
                <p>$1,0000</p>
                <p>$1,0000</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.img
          src={require("../assets/FAQ.png")}
          alt="FAQ"
          className="mt-4 md:mt-0 lg:h-[40rem] w-full md:w-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        />
      </motion.div>
    </div>
  );
};

export default FAQ;
