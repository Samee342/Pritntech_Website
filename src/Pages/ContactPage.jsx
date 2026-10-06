import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";
import ContactImage from "../assets/ContactImage2.jpg";

const ContactPage = () => {
  return (
    <main className="overflow-hidden bg-[#fdfbf7] text-slate-800 ">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="w-full px-4 pb-6 md:px-6">
          <img
            src={ContactImage}
            alt="PrintTech Contact"
            className="block w-full  rounded-lg border border-slate-200"
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              We’re here to help.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Whether you are switching from paper records, setting up your
              first digital billing system, or simply have a question, send us a
              message.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-7">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange-100 text-orange-600">
                  <FiMail size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>

                  <a
                    href="mailto:info@printtech.com"
                    className="mt-1 block text-sm text-slate-500 transition hover:text-orange-600"
                  >
                    printech7777@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange-100 text-orange-600">
                  <FiPhone size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>

                  <a
                    href=""
                    className="mt-1 block text-sm text-slate-500 transition hover:text-orange-600"
                  >
                    +977 9744819231{" "}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange-100 text-orange-600">
                  <FiMapPin size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Kohalpur-11, Banke, Nepal{" "}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange-100 text-orange-600">
                  <FiClock size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Working hours
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Sunday – Friday, 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-slate-200 bg-white p-7 md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                Send a message
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Tell us what you need.
              </h2>
            </div>

            <form className="mt-8 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What can we help you with?"
                  className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Send Message
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
