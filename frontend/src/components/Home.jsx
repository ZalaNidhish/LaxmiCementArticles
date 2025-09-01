import React from "react";
import bg from "../assets/bg.jpg";
import HomeSlider from "./HomeSlider";
import AboutUs from "./AboutUs";
import ProductsSlider from "./ProductsSlider";
import Footer from "./Footer.jsx";


const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <HomeSlider />
        <AboutUs />
        <ProductsSlider />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
