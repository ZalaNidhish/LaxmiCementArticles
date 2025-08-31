import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center justify-center gap-10 h-screen">
      <h2 className="text-5xl font-bold text-amber-500">About Us</h2>
      <div className="text-center text-lg px-20 py-6 leading-8">
        <p>
          Laxmi Cement Articles is India's leading Manufacturer and Trader of
          quality cement articles. In the past 28 years, our organization has
          achieved immense success and has become a leader in the market with
          its specialty in producing diverse cement articles like Ready Made
          Compound Wall, RCC Compound Wall, Garden Benches, Curbstones, Road
          Dividers and many more. Considering the diverse requirements of our
          purchasers, we provide a wide range of products that are used in
          commercial, residential, construction and industrial projects. Our
          cement articles are offered to clients in many designs, shapes and
          sizes at reasonable prices so that clients get option of choosing as
          per their desires. Our products are highly demanded by Architectures,
          Civil Engineers, Contractors, Municipal Corporations, Zilla Parishad,
          Gram Panchayats, etc.
        </p>
      </div>
      <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 cursor-pointer">
        View More About Us
      </button>
    </div>
  );
};

export default AboutUs;
