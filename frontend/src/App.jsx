import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <div className="fixed w-full z-10">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
