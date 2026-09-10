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
    executiveEmails: ["pradeep@yateesteel.com", "pankaj@yateesteel.com"],
    leadershipContacts: [
      { name: "Pradeep", email: "pradeep@yateesteel.com", role: "Management & Operations" },
      { name: "Pankaj", email: "pankaj@yateesteel.com", role: "Commercial & Business Development" },
    ],
    whatsapp: "+919039052643",
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
  },
  headquarters: {
    title: "Corporate & Registered Office",
    addressLine1: "Office No. 410, PRK Maple, Above Axis Bank",
    addressLine2: "Rau",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "453331",
    country: "India",
  },
  manufacturingFacility: {
    title: "Primary Manufacturing Facility & Heavy Fabrication Plant",
    addressLine1: "Plot No. A-42/45, Phase II, Chakan Industrial Area",
    addressLine2: "Taluka Khed",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "410501",
    country: "India",
    landArea: "25+ Acres Dedicated Industrial Land",
    coveredShopArea: "250,000+ Sq. Ft. Heavy Fabrication Bays",
  },
  stats: {
    projectsCompleted: 500,
    happyClients: 250,
    yearsExperience: 20,
    skilledProfessionals: 300,
    annualCapacityMT: 45000,
    manufacturingAreaSqFt: 250000,
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
      "100% recyclable structural steel combined with energy-efficient insulated PUFF wall cladding, natural skylights, and low carbon footprint manufacturing.",
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
    description: "Procurement of prime structural steel plates (E350/E250 Grade) directly from primary producers like Tata Steel and JSW with mill test certificates.",
  },
  {
    step: "04",
    title: "Automated Fabrication",
    description: "CNC plasma cutting, automatic submerged arc welding (SAW) of built-up beams, and cold-roll forming of high-tensile Z/C purlins.",
  },
  {
    step: "05",
    title: "Quality Inspection & Testing",
    description: "100% weld visual and ultrasonic testing (UT), magnetic particle inspection (MPI), and dry film thickness (DFT) paint verification.",
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
    description: "Inception as a specialized structural fabrication firm in Pune with an initial capacity of 3,000 MT/annum.",
  },
  {
    year: "2009",
    title: "Automated PEB Facility Commissioning",
    description: "Expanded into full Pre-Engineered Building solutions with automated H-beam welding lines in Chakan Industrial Area.",
  },
  {
    year: "2014",
    title: "ISO 9001 & 14001 Certification",
    description: "Achieved international quality and environmental management certifications; scaled production capacity to 20,000 MT/annum.",
  },
  {
    year: "2018",
    title: "Major Infrastructure & Multi-Storey Milestones",
    description: "Executed landmark multi-tier warehouse and commercial structural steel projects for Tier-1 logistics and manufacturing conglomerates.",
  },
  {
    year: "2022",
    title: "Advanced CNC & PUFF Panel Integration",
    description: "Upgraded facility with high-precision fiber lasers, automated CNC drilling lines, and continuous PUFF sandwich panel press lines.",
  },
  {
    year: "2026",
    title: "45,000 MT Annual Capacity Benchmark",
    description: "Delivered 500+ landmark industrial projects across India with 250,000+ sq. ft. of manufacturing capability and 300+ professionals.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Rajendra V. Deshmukh",
    role: "Managing Director & Chief Executive Officer",
    experience: "28+ Years in Structural Steel & Heavy EPC Projects",
    bio: "Pioneered Yatee's growth from a boutique fabrication workshop into a leading national PEB manufacturing enterprise. M.Tech in Structural Engineering from IIT Bombay.",
    credentials: "FIE, M.Tech (Structures) IIT Bombay",
  },
  {
    name: "Vikramaditya Sengupta",
    role: "Director – Technical & Engineering",
    experience: "22+ Years in Advanced Steel Design & PEB Optimization",
    bio: "Leads the 40+ member structural engineering and Tekla detailing division, specializing in seismic-resistant long-span hangars and multi-storey industrial framing.",
    credentials: "B.E. (Civil), Lead Design Consultant (IS/AISC)",
  },
  {
    name: "Arun K. Pillai",
    role: "Vice President – Plant Operations & Manufacturing",
    experience: "25+ Years in Heavy Steel Fabrication & Welding Technology",
    bio: "Oversees the 25-acre Chakan fabrication complex, automated SAW lines, CNC machine shop, and stringent ISO QA/QC testing workflows.",
    credentials: "B.Tech (Mech), ASNT Level III NDT Specialist",
  },
  {
    name: "Pooja Malhotra",
    role: "Head – Project Erection & On-Site Safety",
    experience: "18+ Years in Turnkey Industrial Construction & Site Safety",
    bio: "Manages on-site erection crews, heavy mobile crane operations, and strict zero-harm safety standards across all active project sites nationwide.",
    credentials: "NEBOSH Certified, PMP®, B.E. (Civil)",
  },
];
