import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiBarChart2,
  FiCreditCard,
  FiClock,
} from "react-icons/fi";

const WhyPrintTech = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex p-2 bg-orange-200 border border-slate-200 rounded-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              A better way to work
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            From scattered records to one connected workflow.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            See the difference when your printing business moves from manual
            records to PrintTech.
          </p>
        </div>

        {/* Comparison */}
        <div className="relative mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* BEFORE */}
          <div className="relative overflow-hidden border border-slate-200 bg-[#f8f8f6]">
            {/* Top */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Before
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-700">
                  The manual way
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                <FiFileText size={18} />
              </div>
            </div>

            {/* Problems */}
            <div className="space-y-4 p-6">
              {/* Paper */}
              <div className="flex items-start gap-4 border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-100 text-slate-500">
                  <FiFileText size={18} />
                </div>

                <div>
                  <p className="font-bold text-slate-700">
                    Paper records everywhere
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Estimates and customer details spread across notebooks and
                    files.
                  </p>
                </div>
              </div>

              {/* Calculator */}
              <div className="flex items-start gap-4 border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-100 text-slate-500">
                  <FiBarChart2 size={18} />
                </div>

                <div>
                  <p className="font-bold text-slate-700">
                    Manual calculations
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Calculate totals, taxes and balances every time.
                  </p>
                </div>
              </div>

              {/* Searching */}
              <div className="flex items-start gap-4 border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-100 text-slate-500">
                  <FiClock size={18} />
                </div>

                <div>
                  <p className="font-bold text-slate-700">
                    Searching old records
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Finding a customer's previous order takes unnecessary time.
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex items-start gap-4 border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-100 text-slate-500">
                  <FiCreditCard size={18} />
                </div>

                <div>
                  <p className="font-bold text-slate-700">Payment tracking</p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Outstanding payments are difficult to keep track of.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="border-t border-slate-200 px-6 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                Disconnected workflow
              </div>
            </div>
          </div>

          {/* CENTER TRANSFORMATION */}
          <div className="relative flex items-center justify-center">
            {/* Desktop */}
            <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-500 lg:flex">
              <FiArrowRight size={22} />
            </div>

            {/* Mobile */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-500 lg:hidden">
              <FiArrowRight className="rotate-90" size={20} />
            </div>
          </div>

          {/* AFTER */}
          <div className="relative overflow-hidden border border-orange-200 bg-white">
            {/* Orange top accent */}
            <div className="h-1 bg-orange-500" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                  With PrintTech
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-800">
                  One connected workflow
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                <FiCheck size={18} />
              </div>
            </div>

            {/* Workflow */}
            <div className="p-6">
              {/* Estimate */}
              <div className="relative flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <FiFileText size={17} />
                  </div>

                  <div className="absolute top-10 h-12 w-px bg-orange-200" />
                </div>

                <div className="pb-7">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-slate-700">Create estimate</p>

                    <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                      READY
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    Build professional estimates in seconds.
                  </p>
                </div>
              </div>

              {/* Invoice */}
              <div className="relative flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <FiCreditCard size={17} />
                  </div>

                  <div className="absolute top-10 h-12 w-px bg-orange-200" />
                </div>

                <div className="pb-7">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-slate-700">Generate invoice</p>

                    <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
                      AUTOMATIC
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    Turn approved estimates into invoices.
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="relative flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <FiCheck size={17} />
                  </div>

                  <div className="absolute top-10 h-12 w-px bg-orange-200" />
                </div>

                <div className="pb-7">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-slate-700">Record payment</p>

                    <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                      TRACKED
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    Keep paid and outstanding amounts organized.
                  </p>
                </div>
              </div>

              {/* Reports */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <FiBarChart2 size={17} />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-slate-700">
                      Understand your business
                    </p>

                    <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                      ORGANIZED
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    See sales, payments and business activity in one place.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-orange-100 bg-orange-50/50 px-6 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Everything connected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrintTech;
