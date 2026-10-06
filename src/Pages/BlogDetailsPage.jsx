import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    category: "Billing",
    title: "How to Create a Professional Printing Estimate",
    description:
      "Learn how to prepare clear and accurate estimates that help customers understand printing costs before placing an order.",
    date: "Oct 02, 2026",
    readTime: "5 min read",
    content: [
      "A professional estimate is one of the first things a customer sees before deciding to place a printing order. A clear estimate helps customers understand what they are paying for and gives your business a more organized appearance.",
      "Printing jobs can include different paper types, sizes, quantities, finishing options and additional services. When all of these details are written clearly, it becomes easier for both the customer and the printing team to understand the order.",
      "Start by adding the customer's basic information and the date of the estimate. Then clearly list the printing requirements such as product type, quantity, paper size, paper quality and finishing requirements.",
      "The price should be easy to understand. Instead of showing only a final amount, organize the estimate into individual items so the customer can see what each service costs.",
      "Once the customer confirms the estimate, the information can be used to prepare the final invoice. Keeping this process organized reduces mistakes and makes it easier to track previous jobs.",
    ],
  },

  {
    id: 2,
    category: "Business",
    title: "5 Common Billing Problems in Printing Businesses",
    description:
      "From misplaced records to forgotten payments, discover common billing problems and practical ways to handle them.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    content: [
      "Billing problems can create unnecessary confusion in a printing business. When estimates, invoices and payment records are maintained manually, important information can easily be missed.",
      "One common problem is losing track of previous estimates. Without organized records, employees may have difficulty finding what was quoted to a customer.",
      "Another problem is forgetting pending payments. When payment information is maintained across notebooks, spreadsheets and messages, it becomes difficult to know which customers still have outstanding balances.",
      "Incorrect invoice details are another common issue. Small mistakes in quantities, prices or customer information can lead to confusion and require invoices to be corrected.",
      "A digital billing workflow can help keep estimates, invoices, customers and payment information together. This gives printing businesses a clearer view of their daily financial activity.",
    ],
  },

  {
    id: 3,
    category: "Billing",
    title: "Estimate vs Invoice: What's the Difference?",
    description:
      "Understand the difference between estimates and invoices and when your printing business should use each one.",
    date: "Sep 24, 2026",
    readTime: "4 min read",
    content: [
      "Estimates and invoices are both important documents in a printing business, but they serve different purposes.",
      "An estimate is usually prepared before a customer confirms an order. It provides an expected price based on the customer's printing requirements.",
      "An invoice is created when the work has been confirmed or completed and payment is being requested. It represents the amount the customer is expected to pay.",
      "For example, a customer may request 1,000 business cards. You can prepare an estimate showing the expected printing cost. After the customer confirms the order, the final invoice can be generated based on the agreed details.",
      "Keeping estimates and invoices separate makes the billing process easier to understand and helps businesses maintain accurate records.",
    ],
  },

  {
    id: 4,
    category: "Business Tips",
    title: "How to Keep Customer Records Organized",
    description:
      "A simple approach to keeping customer information, previous jobs and billing history easier to find.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    content: [
      "Customer information becomes more valuable when it is organized properly. Printing businesses often work with repeat customers, making previous job information useful for future orders.",
      "A good customer record can include the customer's name, phone number, email address, previous jobs and billing history.",
      "Keeping this information together makes it easier to find previous orders and understand what a customer has purchased before.",
      "Organized customer records can also help employees provide faster service because they do not have to repeatedly ask customers for the same information.",
      "A simple digital customer management system can make these records easier to search, update and maintain.",
    ],
  },

  {
    id: 5,
    category: "Nepal",
    title: "Understanding VAT in Printing Services",
    description:
      "A practical overview of VAT considerations that printing businesses should understand when preparing bills.",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    content: [
      "VAT can be an important part of billing for businesses that are registered for VAT in Nepal. Printing businesses should understand how tax information is reflected in their billing process.",
      "When preparing an invoice, businesses should clearly separate the taxable amount and applicable VAT so that customers can understand how the final amount was calculated.",
      "The exact tax treatment can depend on the type of transaction and the current rules applicable to the business. Businesses should therefore maintain accurate records and follow the requirements provided by the relevant authorities.",
      "Digital billing can make this process easier by automatically calculating configured tax amounts and displaying them clearly on estimates and invoices.",
      "For tax compliance decisions, always verify the current requirements with the appropriate tax authority or a qualified tax professional.",
    ],
  },

  {
    id: 6,
    category: "Business",
    title: "From Paper Records to Digital Billing",
    description:
      "Explore how moving your estimates, invoices and customer records into a digital workflow can simplify daily operations.",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    content: [
      "Many printing businesses have traditionally relied on notebooks, printed invoices and spreadsheets to manage daily work. While these methods can work for a small number of orders, they become harder to manage as the business grows.",
      "Digital billing brings estimates, invoices, customers and payment information into a more organized workflow.",
      "Instead of searching through paper files, employees can quickly find customer records and previous transactions. This can also make it easier to review pending payments and completed jobs.",
      "Moving to digital records does not have to mean changing everything at once. Businesses can start by digitizing estimates and invoices and gradually move other records into the same system.",
      "The goal is simple: make important business information easier to create, find and manage.",
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();

  const post = blogPosts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <main className="min-h-screen bg-[#fdfbf7] px-6 py-24 text-slate-800">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            PrintTech Journal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            Article not found
          </h1>

          <p className="mt-4 text-slate-500">
            The article you are looking for does not exist.
          </p>

          <NavLink
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <FiArrowLeft />
            Back to Blog
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#fdfbf7] text-slate-800">
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          {/* Category */}
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            {post.category}
          </p>

          {/* Title */}
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-8 flex items-center justify-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <FiCalendar size={15} />
              {post.date}
            </span>

            <span>•</span>

            <span className="flex items-center gap-2">
              <FiClock size={15} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-7">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-slate-600 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
