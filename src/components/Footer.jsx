import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logos = [logo1, logo2, logo3, logo4];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <footer ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row justify-between py-6 px-4 md:px-8 lg:px-24"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="flex flex-col mb-6 md:mb-0">
          <h1 className="font-garamond text-primary text-4xl mb-2">
            cowe.org.
          </h1>
          <p className="text-sm mt-6 font-light">
            Shop our entire lineup of fine faves <br />
            in store, get styled and join <br />
            the Fine Crew.
          </p>
          <div className="flex mt-8">
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href="/"
                className="w-7 h-7 mr-2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <motion.img src={logo} alt={`Logo ${index + 1}`} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:ml-12 justify-between space-y-4 md:space-y-0 md:space-x-12">
          {[
            {
              title: "Stores & Services",
              items: ["Services", "Projects", "Solutions"],
            },
            {
              title: "Help",
              items: ["Shipping", "Returns + Exchange", "Warranty", "All FAQ"],
            },
            {
              title: "Resources",
              items: [
                "Corner lot",
                "Ring Sizer",
                "Pricing Aftercare",
                "Style Edit",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="font-garamond text-lg mb-2 text-primary">
                {section.title}
              </h4>
              {section.items.map((item, i) => (
                <motion.a
                  key={i}
                  href="/"
                  className="text-sm mb-1"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      <hr className="md:hidden" />
      <h4 className="text-center text-gray-400 pt-4 pb-2">
        © 2022, All Rights Reserved by cowe.org.
      </h4>
    </footer>
  );
};

export default Footer;
