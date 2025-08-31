import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white gap-10">
      <div className="flex items-center justify-between gap-30 h-10/12">
        <p className="max-w-lg text-justify">
          <b>Laxmi Cement Articles</b> is India's leading Manufacturer and Trader of
          quality cement articles. In the past 28 years, our organization has
          achieved immense success and has become a leader in the market with
          its specialty in producing diverse cement articles like Ready Made
          Compound Wall, RCC Compound Wall, Garden Benches, Curbstones, Road
          Dividers and many more.
        </p>
        <div className="w-full max-w-md h-64 overflow-hidden shadow-lg flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Locate Us Here.</h1>
          <iframe
            src="https://www.google.com/maps?q=22.70442,75.85688&z=15&output=embed"
            className="w-full h-full border-0 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
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
