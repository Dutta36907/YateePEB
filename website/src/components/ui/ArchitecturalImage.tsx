"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  priority?: boolean;
  overlayText?: string;
  badge?: string;
  sizes?: string;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "video",
  priority = false,
  overlayText,
  badge,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectStyles = {
    video: "aspect-16/9",
    square: "aspect-square",
    portrait: "aspect-4/5",
    wide: "aspect-21/9",
    auto: "h-full w-full",
  };

  // Fallback architectural graphic when image fails to load or during development
  const renderFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B3D] via-[#1D3A74] to-[#1F4283] flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden bg-blueprint-grid">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 backdrop-blur-xs border border-white/20">
        <Building2 className="w-8 h-8 text-blue-300" />
      </div>
      <p className="font-bold text-sm tracking-wide text-white uppercase max-w-xs">{alt}</p>
      <span className="text-[10px] tracking-widest text-blue-200 mt-1 uppercase">Yatee Structural Engineering</span>
    </div>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-slate-900 group select-none",
        aspectStyles[aspectRatio],
        className
      )}
    >
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      ) : (
        renderFallback()
      )}

      {/* Subtle blueprint overlay line */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#1D3A74]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded border border-white/20 tracking-wide uppercase">
            {badge}
          </span>
        </div>
      )}

      {overlayText && (
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <p className="text-sm font-semibold drop-shadow-md">{overlayText}</p>
        </div>
      )}
    </div>
  );
};
