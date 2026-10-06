import React from "react";
import { NavLink } from "react-router-dom";
import { FiMail, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import LogoImage from "../assets/LogoImage.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="inline-flex items-center">
              <img
                src={LogoImage}
                alt="PrintTech Logo"
                className="w-15 h-15 "
              />
              <span className="text-2xl font-black tracking-tight text-slate-800">
                Print<span className="text-orange-500">Tech</span>
              </span>
            </NavLink>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              Estimate and billing software built for printing presses to manage
              customers, invoices, payments and sales records.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-600">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Built for printing businesses
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Product
            </h3>

            <div className="mt-5 space-y-3">
              <NavLink
                to="/features"
                className="flex items-center gap-1 text-sm text-slate-500 transition hover:text-orange-500"
              >
                Features
                <FiArrowUpRight size={13} />
              </NavLink>

              <NavLink
                to="/estimates"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Estimates
              </NavLink>

              <NavLink
                to="/invoices"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Invoices
              </NavLink>

              <NavLink
                to="/customers"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Customers
              </NavLink>

              <NavLink
                to="/reports"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Reports
              </NavLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              <NavLink
                to="/"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Home
              </NavLink>

              <NavLink
                to="/contact"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Contact
              </NavLink>

              <NavLink
                to="/login"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="block text-sm text-slate-500 transition hover:text-orange-500"
              >
                Get Started
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold tracking-tight text-slate-800 text-xl">
              Stay updated with PrintTech.
            </h1>

            <form className="w-full max-w-xl">
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                  <FiMail className="mr-3 shrink-0 text-slate-400" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 w-full bg-transparent  text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    required
                  />
                </div>

                {/* Subscribe */}
                <button
                  type="submit"
                  className="group flex h-12 w-full  items-center rounded-xl justify-center gap-2 bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Subscribe
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                No spam. Only relevant PrintTech updates.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Hive Web Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
