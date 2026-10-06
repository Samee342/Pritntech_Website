import React from "react";

const workflowSteps = [
  {
    number: "01",
    title: "Create an estimate",
    text: "Add printing items, quantities and pricing to quickly prepare a professional estimate for your customer.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Confirm the order",
    text: "Keep approved printing work organized with all the important order details in one place.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Generate the invoice",
    text: "Turn the recorded order into a professional invoice without entering the same information again.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Track the payment",
    text: "Record customer payments and keep your sales history organized for better business tracking.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  },
];

const Workflow = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex rounded-xl border border-orange-100 bg-orange-100 px-4 py-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
              A simpler workflow
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            Keep every job moving from{" "}
            <span className="text-orange-500">estimate to payment.</span>
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            PrintTech keeps your printing jobs organized from the first estimate
            to the final payment.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 space-y-24">
          {workflowSteps.map((step, index) => (
            <div
              key={step.number}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              {/* Text */}
              <div
                className={`max-w-xl ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="text-sm font-black tracking-[0.2em] text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-500">
                  {step.text}
                </p>

                <div className="mt-7 h-1 w-12 bg-orange-500" />
              </div>

              {/* Image */}
              <div
                className={`overflow-hidden rounded-2xl ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
