import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-slate-600 shadow-lg w-full mb-3">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          COUNTRIES INFO APP
        </NavLink>
        <div className="space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-blue-100 hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-blue-100 hover:text-white transition-colors"
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
