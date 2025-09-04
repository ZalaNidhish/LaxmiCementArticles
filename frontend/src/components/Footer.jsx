import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Split paragraph text into word spans
    const p = document.querySelector(".footer-text");
    if (p) {
      const words = p.innerText.split(" ");
      p.innerHTML = words.map(word => `<span class="word inline-block">${word}</span>`).join(" ");
    }

    // Animate each word (falling effect)
    gsap.from(".footer-text .word", {
      opacity: 0,
      y: -20, // start above
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-text",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white gap-10">
      <div className="flex items-center justify-between gap-30 h-10/12">
        
        {/* Paragraph */}
        <p className="max-w-lg text-justify footer-text leading-7">
          <b>Laxmi Cement Articles</b> is India's leading Manufacturer and Trader of
          quality cement articles. In the past 28 years, our organization has
          achieved immense success and has become a leader in the market with
          its specialty in producing diverse cement articles like Ready Made
          Compound Wall, RCC Compound Wall, Garden Benches, Curbstones, Road
          Dividers and many more.
        </p>

        {/* Map */}
        <div className="w-full max-w-md h-64 overflow-hidden shadow-lg flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Locate Us Here.</h1>
          <iframe
            src="https://www.google.com/maps?q=22.70442,75.85688&z=15&output=embed"
            className="w-full h-full border-0 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex items-center h-1/12">
        <h1 className="w-fit bg-amber-500 h-full py-6 px-10 flex items-center rounded-r-3xl">
          Copyright © 2025 Laxmi Cement Articles. All right reserved. | Designed
          By Nidhish Zala
        </h1>
      </div>
    </div>
  );
};

export default Footer;
