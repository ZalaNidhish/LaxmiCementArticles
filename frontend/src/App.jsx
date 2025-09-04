import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar.jsx";
import Start from "./components/Start.jsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // 🎬 Word animation (landing text etc.)
  useGSAP(() => {
    gsap.from(".word span", {
      y: 100,
      scale: 0.3,
      opacity: 0,
      stagger: 0.08,
      ease: "back.out(1.7)",
      duration: 1,
      delay: 1,
    });
  });



  // 🎬 Start animation + scroll lock
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden"; // lock scroll

    gsap.to(".start", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
      delay: 3,
      onComplete: () => {
        document.body.style.overflow = "auto"; // unlock scroll
        gsap.set(".start", { display: "none" }); // remove start div
      },
    });

    gsap.fromTo(
      ".HomePage",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power1.out", delay: 2.5 }
    );

    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power1.out", delay: 2.8 }
    );
  }, []);

  return (
    <div>
      <div className="absolute w-full h-full z-10 start">
        <Start />
      </div>
      <div className="fixed w-full z-10 navbar">
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
