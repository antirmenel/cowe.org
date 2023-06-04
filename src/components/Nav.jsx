import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.header
      className="px-4 lg:px-12 flex items-center justify-between my-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.a
          className="text-primary text-4xl font-garamond hover:text-black transition-colors duration-300"
          href="/"
        >
          cowe.org.
        </motion.a>
      </div>
      <nav className="text-black space-y-4 lg:space-y-0 lg:space-x-12 hidden lg:flex">
        <motion.a
          href="/"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          Home
        </motion.a>
        <motion.a
          href="/services"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          Services
        </motion.a>
        <motion.a
          href="/projects"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          Projects
        </motion.a>
        <motion.a
          href="/solutions"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          Solutions
        </motion.a>
        <motion.a
          href="/about"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          About
        </motion.a>
        <motion.a
          href="/awards"
          className="font-medium hover:text-primary transition-colors duration-300"
        >
          Awards
        </motion.a>
      </nav>
      <motion.button
        className="px-4 mt-4 lg:mt-0 bg-primary text-white font-medium py-2 px-6 hover:bg-black transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.button>
    </motion.header>
  );
};

export default Nav;
