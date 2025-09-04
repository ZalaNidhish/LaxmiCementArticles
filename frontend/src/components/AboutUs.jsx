import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let totalSpans = document.querySelectorAll(".AboutUsText span").length;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".AboutUs",
          start: "top top",
          end: "+=" + totalSpans * 200, // enough space for each line
          scrub: true,
          pin: true,
          // markers: true, // uncomment for debugging
        },
      });

      tl.from(".AboutUsText span", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-[100vw] flex flex-col items-center justify-center gap-10 AboutUs py-20">
      <h2 className="text-5xl font-bold text-amber-500">About Us</h2>
      <div className="text-justify text-lg px-20 py-6 leading-8">
        <p className="AboutUsText">
          <span className="block">
            Laxmi Cement Articles is India's leading Manufacturer and Trader of
            quality cement articles. In the past 28 years,
          </span>
          <span className="block">
            our organization has achieved immense success and has become a leader in the market with
            its specialty in producing
          </span>
          <span className="block">
            diverse cement articles like Ready Made Compound Wall, RCC Compound Wall, Garden Benches, Curbstones,
            Road Dividers and many more. Considering the diverse requirements of our
            purchasers, we provide a wide range of
          </span>
          <span className="block">
            products that are used in commercial, residential, construction and industrial projects. Our
            cement articles are offered to
          </span>
          <span className="block">
            clients in many designs, shapes and sizes at reasonable prices so that clients get option of choosing as
            per their desires.
          </span>
          <span className="block">
            Our products are highly demanded by Architectures,
            Civil Engineers, Contractors, Municipal Corporations,
          </span>
          <span className="block">
            Zilla Parishad, Gram Panchayats, etc.
          </span>
        </p>
      </div>
      <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 cursor-pointer">
        View More About Us
      </button>
    </div>
  );
};

export default AboutUs;
