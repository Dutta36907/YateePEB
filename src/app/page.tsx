import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { PebEstimatorSection } from "@/components/home/PebEstimatorSection";
import { ProductsGridSection } from "@/components/home/ProductsGridSection";
import { PebAnatomySection } from "@/components/home/PebAnatomySection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ServicesShowcaseSection } from "@/components/home/ServicesShowcaseSection";
import { IndustriesGridSection } from "@/components/home/IndustriesGridSection";
import { ManufacturingSection } from "@/components/home/ManufacturingSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { SelectedProjectsSection } from "@/components/home/SelectedProjectsSection";
import { CinematicBannerSection } from "@/components/home/CinematicBannerSection";
import { QualityCertSection } from "@/components/home/QualityCertSection";
import { ClientsWallSection } from "@/components/home/ClientsWallSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { InsightsSection } from "@/components/home/InsightsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with Live Structural Ticker */}
      <HeroSection />

      {/* 2. Key Metrics & Trust */}
      <MetricsSection />

      {/* 3. Who We Are */}
      <WhoWeAreSection />

      {/* 4. Interactive Live PEB Structural Estimator Widget */}
      <PebEstimatorSection />

      {/* 5. Complete Steel Building Products */}
      <ProductsGridSection />

      {/* 6. Anatomy of a Yatee PEB (Interactive Subsystems) */}
      <PebAnatomySection />

      {/* 7. Engineering Benchmark: PEB vs Conventional Steel */}
      <ComparisonSection />

      {/* 8. Engineered Advantages */}
      <AdvantagesSection />

      {/* 9. End-to-End Turnkey Capabilities */}
      <ServicesShowcaseSection />

      {/* 10. Industry Solutions & Sectors */}
      <IndustriesGridSection />

      {/* 11. Manufacturing Excellence (25-Acre Chakan Plant) */}
      <ManufacturingSection />

      {/* 12. Integrated 8-Stage Process */}
      <ProcessTimelineSection />

      {/* 13. Selected Projects with Sector Filter */}
      <SelectedProjectsSection />

      {/* 14. Cinematic Architecture Banner */}
      <CinematicBannerSection />

      {/* 15. Quality & Certifications */}
      <QualityCertSection />

      {/* 16. Client Logos */}
      <ClientsWallSection />

      {/* 17. Executive Testimonial */}
      <TestimonialSection />

      {/* 18. Technical Insights & News */}
      <InsightsSection />
    </div>
  );
}
