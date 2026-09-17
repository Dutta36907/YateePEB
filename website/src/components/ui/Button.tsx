import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  icon,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.99]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 font-medium",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#1D3A74] hover:bg-[#162E60] text-white shadow-sm border border-[#1D3A74] hover:shadow-md",
    secondary:
      "bg-[#1F4283] hover:bg-[#1D3A74] text-white shadow-sm border border-[#1F4283] hover:shadow-md",
    outline:
      "bg-transparent text-[#1D3A74] border-2 border-[#1D3A74] hover:bg-[#1D3A74] hover:text-white",
    white:
      "bg-white text-[#1D3A74] hover:bg-slate-100 shadow-sm border border-slate-200 font-bold",
    ghost:
      "bg-transparent text-slate-700 hover:text-[#1D3A74] hover:bg-slate-100",
    dark:
      "bg-[#0B1B3D] text-white hover:bg-[#1D3A74] border border-slate-800",
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};
