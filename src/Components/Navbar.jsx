import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoImage.jpeg";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="PrintTech Logo"
            className="h-15 w-15 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Print<span className="text-orange-500">Tech</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors font-surfer duration-200 ${
                  isActive
                    ? "bg-orange-500 border border-slate-200 rounded-2xl text-white p-2"
                    : "text-slate-600 hover:text-orange-500 "
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="border border-orange-200 hover:bg-orange-400 px-4 py-3 rounded-xl "
          >
            <NavLink
              to="/login"
              className="hidden text-sm font-semibold text-slate-600  hover:text-white sm:block"
            >
              Login
            </NavLink>
          </button>

          <NavLink
            to="/register"
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
