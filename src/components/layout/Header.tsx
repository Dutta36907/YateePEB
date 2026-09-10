"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { TopBar } from "./TopBar";
import {
  AboutMegaMenu,
  ServicesMegaMenu,
  ProductsMegaMenu,
  IndustriesMegaMenu,
} from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on route change during render
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", hasDropdown: "about" },
    { label: "Services", href: "/services", hasDropdown: "services" },
    { label: "Products", href: "/products", hasDropdown: "products" },
    { label: "Industries", href: "/industries", hasDropdown: "industries" },
    { label: "Projects", href: "/projects" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300" ref={navContainerRef}>
      <TopBar />

      {/* Main Bar */}
      <div
        className={cn(
          "w-full transition-all duration-300 relative",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3"
            : "bg-white border-b border-slate-100 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Yatee Steel Structures Home">
            <Image
              src="/images/yatee-logo.webp"
              alt="Yatee Steel Structures Pvt Ltd"
              width={190}
              height={52}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-1.5"
          >
            {navItems.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              const isDropdownOpen = activeDropdown === item.hasDropdown;

              return (
                <div
                  key={idx}
                  className="relative py-2"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(item.hasDropdown);
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (item.hasDropdown && activeDropdown !== item.hasDropdown) {
                        setActiveDropdown(item.hasDropdown);
                      }
                    }}
                    className={cn(
                      "px-3 xl:px-3.5 py-2 text-xs xl:text-sm font-extrabold tracking-tight rounded-xl transition-all flex items-center gap-1 select-none",
                      isActive
                        ? "text-[#1D3A74] bg-blue-50/80 shadow-2xs"
                        : "text-slate-800 hover:text-[#1D3A74] hover:bg-slate-50",
                      isDropdownOpen && "text-[#1D3A74] bg-blue-50/80 shadow-2xs"
                    )}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-slate-400",
                          isDropdownOpen && "rotate-180 text-[#1D3A74]"
                        )}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              href="/get-a-quote"
              variant="primary"
              size="md"
              showArrow
              className="bg-[#1D3A74] hover:bg-[#162E60] text-white shadow-md font-extrabold tracking-wide text-xs xl:text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-lg"
            >
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/get-a-quote"
              variant="primary"
              size="sm"
              className="hidden xs:inline-flex text-xs px-3 py-1.5 bg-[#1D3A74]"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns Centered across the Header Bar */}
        {activeDropdown && (
          <div
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-slideDown before:content-[''] before:absolute before:-top-3 before:h-4 before:left-0 before:right-0"
            onMouseEnter={() => {}}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeDropdown === "about" && <AboutMegaMenu onClose={() => setActiveDropdown(null)} />}
            {activeDropdown === "services" && <ServicesMegaMenu onClose={() => setActiveDropdown(null)} />}
            {activeDropdown === "products" && <ProductsMegaMenu onClose={() => setActiveDropdown(null)} />}
            {activeDropdown === "industries" && <IndustriesMegaMenu onClose={() => setActiveDropdown(null)} />}
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
