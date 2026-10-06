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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800">
      <HeroSection />

      <WhyPrintTech />

      {/* What PrintTech Handles */}
      <section className="border-y border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Multiple works in one Click
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
              How PrintTech Works
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
                  className="border-l-2 border-orange-200 bg-[#fdfbf7] p-6 transition hover:border-orange-500"
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

      {/* Workflow */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                A simpler workflow
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                Keep every job moving from estimate to payment.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-500">
                PrintTech keeps the important information connected, so your
                team can spend less time searching through records and more time
                handling customer orders.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Create an estimate",
                    text: "Add the required printing items, quantities and pricing.",
                  },
                  {
                    number: "02",
                    title: "Confirm the order",
                    text: "Keep approved work organized and ready for billing.",
                  },
                  {
                    number: "03",
                    title: "Generate the invoice",
                    text: "Create the customer's bill from the recorded order.",
                  },
                  {
                    number: "04",
                    title: "Track the payment",
                    text: "Record payments and keep your sales history updated.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="text-sm font-black text-orange-500">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-700">{step.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side visual */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Monthly overview
                    </p>

                    <p className="mt-1 text-2xl font-black text-slate-700">
                      NPR 8,42,500
                    </p>
                  </div>

                  <FiBarChart2 className="text-orange-500" size={25} />
                </div>

                <div className="mt-8 flex h-44 items-end gap-3">
                  {[45, 70, 52, 85, 62, 95, 78, 100, 72, 88, 66, 92].map(
                    (height, index) => (
                      <div key={index} className="flex flex-1 items-end">
                        <div
                          className="w-full rounded-t-md bg-orange-400"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-5 flex justify-between text-xs text-slate-400">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                  <FiClock />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Records</p>
                  <p className="text-sm font-bold text-slate-700">Organized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
