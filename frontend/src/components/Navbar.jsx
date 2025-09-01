import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="font-bold text-1xl bg-neutral-800/90 text-white flex items-center justify-between px-10 py-2 absolute top-0 z-5 w-full">
        <div className="text-2xl font-bold text-amber-500 text-center">
          Laxmi Cement <br /> Articles
        </div>

        <div className="flex items-center justify-center gap-10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline font-bold"
                : "hover:text-amber-500 hover:underline transition-all duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline font-bold"
                : "hover:text-amber-500 hover:underline transition-all duration-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline font-bold"
                : "hover:text-amber-500 hover:underline transition-all duration-300"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline font-bold"
                : "hover:text-amber-500 hover:underline transition-all duration-300"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline font-bold"
                : "hover:text-amber-500 hover:underline transition-all duration-300"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
