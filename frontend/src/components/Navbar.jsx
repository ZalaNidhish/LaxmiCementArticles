import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="font-bold text-1xl bg-neutral-800/70 text-white flex items-center justify-between px-10 py-2 absolute top-0 z-5 w-full">
        <div className="text-2xl font-bold text-amber-500 text-center">Laxmi Cement <br /> Articles</div>
        <div className="flex items-center justify-center gap-10">
          <div className="hover:text-amber-500 hover:underline transition-all duration-300">
            <Link to="/">Home</Link>
          </div>
          <div className="hover:text-amber-500 hover:underline transition-all duration-300">
            <Link to="/about">About</Link>
          </div>
          <div className="hover:text-amber-500 hover:underline transition-all duration-300">
            <Link to="/products">Products</Link>
          </div>
          <div className="hover:text-amber-500 hover:underline transition-all duration-300">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="hover:text-amber-500 hover:underline transition-all duration-300">
            <Link to="/contactUs">Contact Us</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Navbar;
