"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "+",
  prefix = "",
  label,
  sublabel,
  icon,
  theme = "light",
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const isDark = theme === "dark";

  return (
    <div
      ref={elementRef}
      className={cn(
        "flex flex-col p-6 rounded-xl border transition-all duration-300",
        isDark
          ? "bg-slate-900/60 border-slate-800 text-white hover:border-blue-700/60"
          : "bg-white border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200",
        className
      )}
    >
      {icon && (
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
            isDark ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-[#1D3A74]"
          )}
        >
          {icon}
        </div>
      )}

      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading",
            isDark ? "text-white" : "text-[#1D3A74]"
          )}
        >
          {prefix}
          {new Intl.NumberFormat("en-IN").format(displayValue)}
          <span className="text-blue-500 ml-0.5">{suffix}</span>
        </span>
      </div>

      <p
        className={cn(
          "mt-2 text-base font-bold leading-snug",
          isDark ? "text-slate-200" : "text-slate-900"
        )}
      >
        {label}
      </p>

      {sublabel && (
        <p
          className={cn(
            "mt-1 text-xs leading-relaxed",
            isDark ? "text-slate-400" : "text-slate-500"
          )}
        >
          {sublabel}
        </p>
      )}
    </div>
  );
};
