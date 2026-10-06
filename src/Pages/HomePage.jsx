import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiUsers,
  FiBarChart2,
  FiCreditCard,
  FiPrinter,
  FiClock,
  FiPhone,
} from "react-icons/fi";
import WhyPrintTech from "../Components/WhyPrinttech";
import HeroSection from "../Components/HeroSection";
import PrintTechMerit from "../Components/PrintTechMerit";
import Workflow from "../Components/WorkFlow";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800">
      <HeroSection />

      <WhyPrintTech />

      {/* What PrintTech Handles */}
      <section className="border-y border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto text-center">
           <div className="inline-flex px-4 py-3 border border-orange-100 bg-orange-100 rounded-xl">
             <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-800">
              Multiple works in one Click
            </p>
           </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
              What PrintTech Handles
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Keep your daily printing business records organized without
              jumping between spreadsheets, notebooks and separate tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FiFileText,
                title: "Estimates",
                text: "Create professional estimates with your printing services and pricing.",
              },
              {
                icon: FiCreditCard,
                title: "Invoices",
                text: "Turn approved estimates into invoices and keep billing organized.",
              },
              {
                icon: FiUsers,
                title: "Customers",
                text: "Keep customer details and their previous transactions together.",
              },
              {
                icon: FiBarChart2,
                title: "Reports",
                text: "Understand sales, payments and business activity through reports.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border rounded-xl shadow border-orange-200 bg-[#fdfbf7] p-6 transition hover:border-orange-500"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PrintTechMerit />

      {/* Workflow */}
           <Workflow />
    </div>
  );
};

export default HomePage;
