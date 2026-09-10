import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-xs sm:text-sm mb-6 flex-wrap", className)}
    >
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-1.5 transition-colors font-medium",
          isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-[#1D3A74]"
        )}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight
              className={cn("w-3.5 h-3.5 shrink-0", isDark ? "text-slate-500" : "text-slate-400")}
            />
            {isLast || !item.href ? (
              <span
                className={cn(
                  "font-semibold truncate max-w-xs sm:max-w-md",
                  isDark ? "text-blue-300" : "text-[#1D3A74]"
                )}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors font-medium truncate max-w-xs",
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-[#1D3A74]"
                )}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
