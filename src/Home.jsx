import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <FAQ />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
