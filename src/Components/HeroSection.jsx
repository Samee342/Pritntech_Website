import React, { useEffect, useState } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import Dashboard from "../assets/Dashboard.jpeg";
import Dashboard2 from "../assets/Dashboard2.jpg";
import Dashboard3 from "../assets/Dashbord3.jpg";

const HeroSection = () => {
  const dashboards = [
    {
      image: Dashboard,
      label: "BUSINESS OVERVIEW",
      title: "Everything at a glance",
    },
    {
      image: Dashboard2,
      label: "SMART ESTIMATES",
      title: "Create quotes in seconds",
    },
    {
      image: Dashboard3,
      label: "SIMPLE BILLING",
      title: "Keep payments organized",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dashboards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [dashboards.length]);

  return (
    <section className="relative overflow-hidden bg-[#fdfbf7]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:gap-16">
          {/* =====================================================
              LEFT SIDE - CONTENT
          ====================================================== */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="h-2 w-2 font-surfer rounded-full bg-orange-500" />
              Built for printing businesses
            </div>

            {/* Heading */}
            <h1 className="text-4xl  font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[54px] xl:text-[60px]">
              Transform your
              <span className="block text-orange-500">printing workflow.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl font-surfer text-base leading-7 text-slate-500 sm:text-lg lg:mx-0">
              Create estimates, generate bills, track payments, and manage your
              customers — all from one simple platform built for printing
              businesses.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="/register"
                className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
              >
                Get Started
                <FiArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/features"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition duration-300 hover:border-orange-300 hover:text-orange-500"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-orange-400 group-hover:text-orange-500">
                  <FiPlay size={11} />
                </span>
                Explore PrintTech
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 lg:justify-start">
              <span>✓ Easy to use</span>
              <span>✓ Made for print shops</span>
              <span>✓ Organized records</span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - DASHBOARD
          ====================================================== */}
          <div className="relative">
            {/* Orange glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/30 blur-3xl" />

            {/* Dashboard container */}
            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                {/* Browser bar */}
                <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <div className="mx-auto h-5 w-2/5 rounded bg-white" />
                </div>

                {/* Dashboard slideshow */}
                <div className="relative h-[300px] overflow-hidden bg-white sm:h-[370px] lg:h-[420px] xl:h-[460px]">
                  {dashboards.map((slide, index) => (
                    <div
                      key={slide.image}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        currentImage === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {/* Dashboard Image */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-contain"
                      />

                      {/* Text Overlay */}
                      <div className="absolute left-4 top-4 z-20 rounded-xl border border-white/70 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-3">
                        <p className="text-[9px] font-bold tracking-[0.12em] text-orange-500 sm:text-[10px]">
                          {slide.label}
                        </p>

                        <p className="mt-0.5 text-xs font-bold text-slate-800 sm:text-sm">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide indicators */}
              <div className="mt-5 flex justify-center gap-2">
                {dashboards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show dashboard ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-7 bg-orange-500"
                        : "w-1.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-4 sm:h-8" />
    </section>
  );
};

export default HeroSection;
