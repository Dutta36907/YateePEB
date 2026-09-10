"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-all mb-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{title}</h4>
          {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className={cn(
            "w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 bg-blue-100 text-[#1D3A74]"
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ items: { question: string; answer: string }[]; className?: string }> = ({
  items,
  className,
}) => {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.question} defaultOpen={idx === 0}>
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
};
