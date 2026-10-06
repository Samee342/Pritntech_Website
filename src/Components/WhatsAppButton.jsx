import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9779744819231";

  const message = encodeURIComponent(
    "Hello PrintTech, I would like to know more about your software.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrintTech on WhatsApp"
      className="group fixed bottom-6 right-6 z-[70]"
    >
      {/* Ripple waves */}
      <span className="absolute inset-0 animate-whatsapp-ping rounded-full bg-green-500/80" />

      <span className="absolute -inset-2 animate-whatsapp-ping rounded-full bg-green-500/30 [animation-delay:0.8s]" />

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <FaWhatsapp size={29} />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
