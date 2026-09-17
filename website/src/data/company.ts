import { CompanyStats, LeadershipMember } from "@/types";

export const companyDetails = {
  name: "Yatee Steel Structures Pvt Ltd",
  brandName: "Yatee PEB",
  tagline: "Engineering Spaces. Building The Future.",
  establishedYear: 2004,
  cin: "U28112PN2004PTC019842",
  gstin: "27AABCY8491M1Z8",
  contact: {
    phone: "+91 90390 52643",
    altPhone: "+91 90390 52644",
    email: "info@yateesteel.com",
    salesEmail: "info@yateesteel.com",
    careersEmail: "info@yateesteel.com",
    whatsapp: "+919039052643",
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
  },
  headquarters: {
    title: "Corporate Headquarters",
    addressLine1: "PRK Maple, Rau",
    addressLine2: "Near Rau Circle",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "453331",
    country: "India",
    phone: "+91 90390 52643 / +91 90390 52644",
    email: "info@yateesteel.com",
  },
  manufacturingFacility: {
    title: "Primary Manufacturing Facility & Heavy Fabrication Plant",
    addressLine1: "Nandasan, Kadi",
    addressLine2: "Near Ahmedabad Mehsana Highway",
    city: "Kadi (Mehsana)",
    state: "Gujarat",
    postalCode: "382705",
    country: "India",
    landArea: "6 Acres Dedicated Industrial Land",
    coveredShopArea: "60,000+ Sq. Ft. Heavy Fabrication Bays",
    annualCapacity: "22,000 MT / Annum",
    equipmentHighlights: [
      "Automatic H-Beam Line (PTW Machine)",
      "High-Definition CNC Plasma Cutting Machine",
      "Submerged Arc Welding (SAW) Automated Lines",
      "Continuous Cold Roll Forming Line (C & Z Purlins)",
      "Heavy Plate Shearing & Hydraulic CNC Press Brakes",
      "Automatic Shot Blasting to SA 2.5 Standard",
    ],
  },
  branches: [
    {
      city: "Siliguri",
      state: "West Bengal",
      region: "Eastern & North-Eastern Regional Office",
      email: "info@yateesteel.com",
      phone: "+91 90390 52643",
    },
    {
      city: "Patna",
      state: "Bihar",
      region: "Bihar & Jharkhand Regional Office",
      email: "info@yateesteel.com",
      phone: "+91 90390 52644",
    },
  ],
  stats: {
    projectsCompleted: 100,
    happyClients: 100,
    yearsExperience: 20,
    skilledProfessionals: 20,
    annualCapacityMT: 22000,
    manufacturingAreaSqFt: 60000,
  } as CompanyStats,
};

export const advantagesList = [
  {
    number: "01",
    title: "Faster Construction Timelines",
    description:
      "Precision-engineered off-site fabrication reduces on-site erection cycles by 40% to 50% compared to conventional concrete or structural steel fabrication.",
    icon: "Clock",
  },
  {
    number: "02",
    title: "Optimized Cost Efficiency",
    description:
      "Tapered built-up primary framing and high-strength cold-formed purlins achieve maximum structural strength with up to 30% reduced steel dead weight.",
    icon: "TrendingDown",
  },
  {
    number: "03",
    title: "High Structural Integrity",
    description:
      "Engineered in strict compliance with IS 800:2007, AISC 360, and MBMA guidelines to withstand high wind velocity, seismic forces, and heavy overhead crane loads.",
    icon: "ShieldCheck",
  },
  {
    number: "04",
    title: "Clear-Span Architectural Flexibility",
    description:
      "Unobstructed column-free clear spans of up to 90+ meters offer maximum internal operational freedom for logistics racking and automated assembly lines.",
    icon: "Maximize",
  },
  {
    number: "05",
    title: "Sustainable & Recyclable",
    description:
      "100% recyclable structural steel combined with energy-efficient insulated wall cladding, natural skylights, and low carbon footprint manufacturing.",
    icon: "Leaf",
  },
  {
    number: "06",
    title: "Long-Term Durability & Low Maintenance",
    description:
      "High-grade automated shot blasting to SA 2.5 and multi-coat epoxy primer coatings provide exceptional corrosion resistance in harsh industrial environments.",
    icon: "Award",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation & Site Analysis",
    description: "Detailed client requirements intake, geotechnical analysis, wind/seismic zone evaluation, and architectural layout planning.",
  },
  {
    step: "02",
    title: "Design & Structural Engineering",
    description: "Advanced 3D structural analysis in STAAD.Pro and Tekla Structures with complete Connection Detailing and Bill of Materials.",
  },
  {
    step: "03",
    title: "Material Sourcing & Planning",
    description: "Procurement of prime structural steel plates (E350/E250 Grade) directly from primary producers like Tata Steel, JSW Steel, and SAIL with mill test certificates.",
  },
  {
    step: "04",
    title: "Automated Fabrication",
    description: "High-definition CNC plasma cutting, automatic submerged arc welding (SAW), and automatic H-beam line (PTW) fabrication.",
  },
  {
    step: "05",
    title: "Quality Inspection & Testing",
    description: "100% weld visual and ultrasonic testing (UT), magnetic particle inspection (MPI), and dry film thickness (DFT) paint verification per ISO 9001:2015.",
  },
  {
    step: "06",
    title: "Sequenced Logistics & Dispatch",
    description: "Phased batch dispatch of tagged steel components to match erection sequencing on site, minimizing staging congestion.",
  },
  {
    step: "07",
    title: "Erection & Safety Execution",
    description: "Certified rigging teams, heavy mobile cranes, strict safety tool-box talks, torque-controlled high-tensile bolting, and laser alignment.",
  },
  {
    step: "08",
    title: "Handover & Lifecycle Support",
    description: "Final as-built drawings, QA/QC documentation handover, warranty certificates, and proactive annual structural inspection support.",
  },
];

export const companyMilestones = [
  {
    year: "2004",
    title: "Foundation of Yatee Steel",
    description: "Inception as a specialized structural fabrication and engineering service provider.",
  },
  {
    year: "2009",
    title: "Automated PEB Facility Commissioning",
    description: "Expanded into full Pre-Engineered Building solutions with automated H-beam welding lines and advanced roll formers.",
  },
  {
    year: "2015",
    title: "ISO 9001:2015 Certification",
    description: "Achieved ISO 9001:2015 certification for standardized quality management across design, fabrication, and erection workflows.",
  },
  {
    year: "2019",
    title: "Multi-State Regional Expansion",
    description: "Established dedicated regional offices in Siliguri (West Bengal) and Patna (Bihar) to service industrial infrastructure across East and Central India.",
  },
  {
    year: "2023",
    title: "Advanced 6-Acre Gujarat Plant Integration",
    description: "Upgraded manufacturing operations at the 6-acre Nandasan (Gujarat) facility with high-precision CNC plasma cutters and automatic H-beam PTW lines.",
  },
  {
    year: "2026",
    title: "22,000 MT Annual Capacity Benchmark",
    description: "Delivered 100+ landmark industrial projects across India with over 20+ experienced engineering and project specialists.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Engineering Leadership",
    role: "Technical & Structural Design Directorate",
    experience: "15+ Years in PEB Structural Engineering & Tekla Detailing",
    bio: "Our in-house design wing comprises 10+ core engineering professionals specializing in 3D BIM structural modeling, STAAD.Pro analysis, and connection design per IS 800:2007 and AISC standards.",
    credentials: "M.Tech / B.E. (Structures), Tekla & STAAD Specialists",
  },
  {
    name: "Manufacturing Directorate",
    role: "Plant Operations & Fabrication Quality",
    experience: "20+ Years in Heavy Steel Fabrication & Welding Technology",
    bio: "Oversees the 6-acre Nandasan manufacturing plant, automatic H-beam lines (PTW), CNC plasma cutting machines, and strict ISO 9001:2015 quality control systems.",
    credentials: "B.Tech (Mech), ASNT Level II/III NDT Quality Team",
  },
  {
    name: "Project Management Team",
    role: "Turnkey Erection & On-Site Safety",
    experience: "18+ Years in Heavy Industrial Erection & EPC Delivery",
    bio: "Manages nationwide erection crews, heavy mobile crane operations, torque-controlled bolting, and zero-incident site safety protocols across all project sites.",
    credentials: "Certified Rigging & Site Safety Directorate",
  },
];
