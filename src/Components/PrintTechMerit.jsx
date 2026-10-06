import React from "react";
import printImage from "../assets/PrintImage.png";

const PrintTechMerit = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Centered Text */}
      <div className="flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center justify-center rounded-xl border border-orange-200 bg-orange-100 px-4 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              Advance Your Print Business
            </p>
          </div>

          <h1 className=" font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Where Great Printing
            <br />
            Meets <span className="text-orange-500">Smart Management.</span>
          </h1>
        </div>
      </div>

      {/* Image */}
      <div className="mx-auto w-[80%]">
        <img
          src={printImage}
          alt="PrintTech printing management"
          className="h-[550px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default PrintTechMerit;
