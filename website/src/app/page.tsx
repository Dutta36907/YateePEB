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
import { generateFaqSchema } from "@/lib/seo";

export default function HomePage() {
  const homepageFaqs = [
    {
      question: "What is a Pre-Engineered Building (PEB) and why is it superior to conventional steel construction?",
      answer: "A Pre-Engineered Building (PEB) is a custom structural steel building designed with tapered built-up I-sections engineered precisely to match load moments. PEBs are fabricated entirely off-site in automated factories and bolted on-site, offering up to 30% steel weight savings, 40-50% faster construction, column-free clear spans up to 90 meters, and strict compliance with IS 800:2007.",
    },
    {
      question: "What is the manufacturing capacity and location of Yatee Steel Structures?",
      answer: "Yatee Steel Structures operates a state-of-the-art 6-acre heavy fabrication complex in Nandasan, Kadi (near Ahmedabad Mehsana Highway), Gujarat, with an annual manufacturing capacity of 22,000 MT. We are headquartered in Indore, Madhya Pradesh, with regional branches in Siliguri (West Bengal) and Patna (Bihar).",
    },
    {
      question: "What structural design codes and software does Yatee utilize?",
      answer: "Our in-house team of 20+ engineering specialists designs structures in full compliance with IS 800:2007 (Limit State Design), IS 875 (Part 1-5 for Wind & Imposed Loads), IS 1893 (Earthquake Resistance), and international MBMA/AISC standards using STAAD.Pro and Tekla Structures 3D BIM modeling.",
    },
    {
      question: "How does Yatee ensure structural quality and welding integrity?",
      answer: "We are an ISO 9001:2015 certified manufacturer. Our 6-acre facility utilizes high-definition CNC plasma cutters, automatic H-beam lines (PTW), and Submerged Arc Welding (SAW). All structural welds undergo 100% visual inspection and non-destructive Ultrasonic Testing (UT) per AWS D1.1 standards.",
    },
    {
      question: "How can I get a quotation for an industrial shed or PEB project?",
      answer: "You can request a comprehensive technical and cost estimate by submitting your building length, width, eave height, crane load requirements, and location through our online PEB Estimator or contact our engineering team directly at info@yateesteel.com or call +91 90390 52643 / +91 90390 52644.",
    },
  ];

  const faqSchema = generateFaqSchema(homepageFaqs);

  return (
    <div className="flex flex-col w-full">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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

      {/* 11. Manufacturing Excellence (6-Acre Nandasan Gujarat Plant) */}
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
