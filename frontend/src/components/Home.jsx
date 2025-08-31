import React from "react";
import bg from "../assets/bg.jpg";
import HomeSlider from "./HomeSlider";
import AboutUs from "./AboutUs";
import ProductsSlider from "./ProductsSlider";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <HomeSlider />
        <AboutUs />
        <ProductsSlider />
      </div>
    </div>
  );
};

export default Home;
