import React from "react";
import Footer from "./Footer.jsx";
import bg from "../assets/background.jpg";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className='h-50 w-full flex items-end relative justify-center text-5xl text-white'>
          <h1 className='pb-10 font-semibold'>Contact Us</h1>
          <img src={bg} alt="" className="absolute -z-1 object-cover w-full h-full" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 w-full max-w-6xl mt-10">
        {/* Contact Info */}
        <div className="bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-600">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-700">
            We’d love to hear from you! Reach out using the details below or
            send us a message.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              <strong>Address:</strong> 123 Cement Street, Industrial Area,
              Ahmedabad, Gujarat
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Email:</strong> info@laxmicement.com
            </li>
            <li>
              <strong>Working Hours:</strong> Mon – Sat, 9 AM – 7 PM
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-600">
            Let’s Connect
          </h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
