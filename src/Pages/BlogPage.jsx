import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    category: "Billing",
    title: "How to Create a Professional Printing Estimate",
    description:
      "Learn how to prepare clear and accurate estimates that help customers understand printing costs before placing an order.",
    date: "Oct 02, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Business",
    title: "5 Common Billing Problems in Printing Businesses",
    description:
      "From misplaced records to forgotten payments, discover common billing problems and practical ways to handle them.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Billing",
    title: "Estimate vs Invoice: What's the Difference?",
    description:
      "Understand the difference between estimates and invoices and when your printing business should use each one.",
    date: "Sep 24, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    category: "Business Tips",
    title: "How to Keep Customer Records Organized",
    description:
      "A simple approach to keeping customer information, previous jobs and billing history easier to find.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Nepal",
    title: "Understanding VAT in Printing Services",
    description:
      "A practical overview of VAT considerations that printing businesses should understand when preparing bills.",
    date: "Sep 15, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Business",
    title: "From Paper Records to Digital Billing",
    description:
      "Explore how moving your estimates, invoices and customer records into a digital workflow can simplify daily operations.",
    date: "Sep 10, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "Billing", "Business", "Business Tips", "Nepal"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <main className="overflow-hidden bg-[#fdfbf7] text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl justify-center px-6 py-20 text-center md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex bg-orange-100 px-3 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                PrintTech Journal
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Ideas for running a
              <span className="text-orange-500">
                {" "}
                better printing business.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Practical guides, billing tips and useful insights for printing
              businesses looking to keep their work organized.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid overflow-hidden border border-slate-200 bg-white md:grid-cols-2">
              {/* Featured Visual */}
              <div className="flex min-h-[320px] items-center justify-center bg-slate-200 p-8 text-center md:min-h-[430px] md:p-10">
                <h2 className="max-w-md text-xl font-surfer font-bold leading-tight tracking-tight text-slate-800">
                  Smarter billing starts with a better estimate.
                </h2>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="text-orange-600">
                    {featuredPost.category}
                  </span>

                  <span>•</span>

                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                  {featuredPost.description}
                </p>

                <div className="mt-8">
                  <NavLink
                    to={`/blog/${featuredPost.id}`}
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-orange-500 px-4 py-3 text-sm font-bold text-white"
                  >
                    Read article
                    <FiArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY FILTER */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium font-surfer transition ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                Latest articles
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                From the PrintTech journal
              </h2>
            </div>

            <span className="hidden text-sm text-slate-400 md:block">
              {filteredPosts.length} articles
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article key={post.id} className="group">
                  {/* Article Visual */}
                  <div className="flex h-56 items-center justify-center bg-slate-200 p-6 text-center transition duration-300 group-hover:bg-slate-300">
                    <h3 className="max-w-sm font-surfer text-xl font-bold leading-tight tracking-tight text-slate-800">
                      {post.title}
                    </h3>
                  </div>

                  {/* Article Content */}
                  <div className="pt-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={13} />
                        {post.date}
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1.5">
                        <FiClock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900 transition group-hover:text-orange-600">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {post.description}
                    </p>

                    <NavLink
                      to={`/blog/${post.id}`}
                      className="group/link mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-orange-500 px-3 py-2 text-sm font-semibold text-white"
                    >
                      Read more
                      <FiArrowUpRight
                        size={15}
                        className="text-white transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </NavLink>
                  </div>
                </article>
              ))}
          </div>

          {/* Empty State */}
          {filteredPosts.filter((post) => !post.featured).length === 0 && (
            <div className="border border-slate-200 bg-white py-16 text-center">
              <p className="text-sm text-slate-500">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
