import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiFileText,
  FiCreditCard,
  FiUsers,
  FiBarChart2,
  FiPrinter,
  FiPackage,
  FiClock,
  FiShield,
  FiLayers,
  FiArrowRight,
  FiTrendingUp,
} from "react-icons/fi";
import customerList from "../assets/customerlist.png";
import paymentList from "../assets/paymentlist.jpg";
import EstimateImage from "../assets/Estimate.jpg";
import InvoiceImage from "../assets/Invoice.jpg";

const mainFeatures = [
  {
    number: "01",
    icon: FiFileText,
    title: "Estimates that look professional",
    description:
      "Prepare clear, itemized estimates for printing jobs. Add quantities, rates, discounts and tax, then share a structured cost breakdown with your customers.",
    points: [
      "Item-wise pricing and quantities",
      "Discount and VAT calculation",
      "Clear estimate totals",
    ],
    tag: "ESTIMATE MANAGEMENT",
    image: EstimateImage,
  },
  {
    number: "02",
    icon: FiPrinter,
    title: "Invoices ready for every job",
    description:
      "Turn approved printing jobs into organized invoices. Keep billing details consistent and make every transaction easier to review.",
    points: [
      "Structured invoice generation",
      "Consistent customer details",
      "Organized billing records",
    ],
    tag: "INVOICE MANAGEMENT",
    image: InvoiceImage,
  },
  {
    number: "03",
    icon: FiUsers,
    title: "Customer records in one place",
    description:
      "Keep customer contact information and billing history organized, so previous work and customer details are easier to find.",
    points: [
      "Customer information",
      "Previous billing records",
      "Easier customer lookup",
    ],
    tag: "CUSTOMER MANAGEMENT",
    image: customerList,
  },
  {
    number: "04",
    icon: FiCreditCard,
    title: "Know what has been paid",
    description:
      "Track payment information alongside your billing records and identify invoices that still need attention.",
    points: [
      "Payment status tracking",
      "Pending payment visibility",
      "Clear billing history",
    ],
    tag: "PAYMENT TRACKING",
    image: paymentList,
  },
];

const extraFeatures = [
  {
    icon: FiBarChart2,
    title: "Sales reports",
    description:
      "Review sales figures and billing activity to understand how your printing business is performing.",
  },
  {
    icon: FiPackage,
    title: "Printing job details",
    description:
      "Keep job descriptions, quantities and pricing details organized within your estimate and billing workflow.",
  },
  {
    icon: FiClock,
    title: "Pending work at a glance",
    description:
      "See which estimates or invoices need follow-up without searching through scattered records.",
  },
  {
    icon: FiLayers,
    title: "Organized business records",
    description:
      "Bring estimates, invoices, customer details and sales information into a more structured workflow.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Create an estimate",
    description: "Add the printing job, quantity, rate and applicable charges.",
  },
  {
    number: "02",
    title: "Confirm the details",
    description:
      "Review the cost breakdown before moving ahead with the order.",
  },
  {
    number: "03",
    title: "Generate the invoice",
    description: "Keep the billing details clear and ready for your customer.",
  },
  {
    number: "04",
    title: "Track and review",
    description: "Follow payment status and review your business reports.",
  },
];

const FeaturePage = () => {
  return (
    <main className="overflow-hidden bg-[#fdfbf7] text-slate-800">
      {/* MAIN FEATURES */}
      <section id="all-features" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* SECTION HEADING */}
          <div className="mb-16 text-center">
            <div className="inline-flex bg-orange-100 px-3 py-1.5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                What you can do
              </p>
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              The tools behind your daily work.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Practical features for the tasks printing businesses handle every
              day, from preparing a quote to reviewing a payment.
            </p>
          </div>

          {/* FEATURES */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 1;

              return (
                <article key={feature.number} className="group py-10 md:py-14">
                  <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
                    {/* TEXT */}
                    <div
                      className={`relative ${
                        isEven ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="mb-6 flex items-center justify-between md:mb-8">
                        <span className="font-mono text-sm text-slate-400">
                          / {feature.number}
                        </span>

                        {/* Mobile icon */}
                        <div className="flex h-12 w-12 items-center justify-center border border-orange-200 bg-orange-50 text-xl text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white md:hidden">
                          <Icon />
                        </div>
                      </div>

                      {/* Desktop icon */}
                      <div className="hidden h-12 w-12 items-center justify-center border border-orange-200 bg-orange-50 text-xl text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white md:flex">
                        <Icon />
                      </div>

                      <p className="mt-6 text-[10px] font-bold tracking-[0.18em] text-orange-600">
                        {feature.tag}
                      </p>

                      <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
                        {feature.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 md:text-base">
                        {feature.description}
                      </p>

                      <ul className="mt-7 space-y-4">
                        {feature.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <FiCheck className="mt-0.5 shrink-0 text-orange-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IMAGE */}
                    <div
                      className={`relative ${
                        isEven ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="absolute -inset-3 -z-10 bg-orange-50/70" />

                      <div className="flex min-h-[360px] items-center justify-center overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:min-h-[420px]">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="inline-flex bg-orange-200 p-2 rounded-xl ">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                  A clearer process
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                From estimate to payment.
                <span className="text-orange-600"> Step by step.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
                Keep your billing process structured, so each stage is easier to
                understand and your records stay connected to the work.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {workflow.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[48px_1fr] gap-5 border-b border-slate-200 py-6 md:grid-cols-[65px_1fr] md:py-8"
                >
                  <span className="font-mono text-sm text-orange-600">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturePage;
