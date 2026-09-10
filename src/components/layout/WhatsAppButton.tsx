"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { companyDetails } from "@/data/company";

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${companyDetails.contact.whatsapp.replace(/\D/g, "")}?text=Hello%20Yatee%20PEB%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20PEB%20/%20Structural%20Steel%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Yatee Engineering"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-green-400/40"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
        Instant WhatsApp Enquiry
      </span>
    </a>
  );
};
