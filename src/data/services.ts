import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    slug: "peb-design-engineering",
    number: "01",
    title: "PEB Design & Engineering",
    tagline: "High-Precision 3D Structural Modeling & Value Engineering",
    shortDescription:
      "Advanced structural engineering utilizing STAAD.Pro, Tekla Structures, and MBS software to design optimized, code-compliant, long-span pre-engineered steel frames.",
    overview:
      "Our in-house design and engineering bureau comprises over 40 structural engineers, Tekla detailers, and drafting specialists. We engineer custom PEB structures that strictly conform to IS 800:2007, AISC 360, MBMA, and IBC building codes, ensuring optimal strength-to-weight ratios, wind resistance, and seismic compliance.",
    featuredImage: "/images/services/design-engineering.webp",
    galleryImages: [
      "/images/services/design-1.webp",
      "/images/services/design-2.webp",
      "/images/services/design-3.webp",
    ],
    capabilities: [
      {
        title: "3D BIM & Tekla Structures Detailing",
        description: "Clash-free 3D modeling providing direct CNC data transfer to shop-floor automated drilling and beam-welding machinery.",
        icon: "Cpu",
      },
      {
        title: "Dynamic Wind & Seismic Load Analysis",
        description: "Rigorous simulation for high wind speeds (up to 55 m/s) and Zone IV/V seismic criteria with customized moment connections.",
        icon: "Wind",
      },
      {
        title: "Overhead Heavy Crane System Integration",
        description: "Design of crane runways, bracket supports, surge trusses, and continuous crane beams for 5-tonne to 100-tonne EOT cranes.",
        icon: "Anchor",
      },
      {
        title: "Value Engineering & Material Optimization",
        description: "Optimizing plate thickness and taper geometries across moments of maximum stress to reduce unnecessary steel dead load by up to 25%.",
        icon: "TrendingDown",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Architectural & Functional Intake", description: "Analyzing column grid requirements, clear heights, bay spacing, dock locations, and environmental load factors." },
      { number: "02", title: "Finite Element & Load Modeling", description: "3D structural modeling in STAAD.Pro calculating dead, live, wind, seismic, crane, and collateral loads." },
      { number: "03", title: "Tekla Connection Detailing", description: "Generating fabrication shop drawings, anchor bolt plans, cross-bracing assemblies, and high-tensile bolt schedules." },
      { number: "04", title: "Vetting & Client Approval", description: "Peer review by certified structural consultants and generation of NC files for direct CNC machine dispatch." },
    ],
    benefits: [
      { title: "Up to 25% Steel Weight Optimization", description: "Tailored built-up I-sections match the exact bending moment diagram of the building frame." },
      { title: "Zero Clash On-Site", description: "100% 3D BIM modeling ensures flawless alignment of purlins, sag rods, bracing, and ME&P conduits." },
      { title: "Regulatory & Code Compliance", description: "Complete documentation ready for statutory factory inspector and municipal approvals." },
    ],
    technicalExpertise: [
      { title: "Codes & Standards Followed", points: ["IS 800:2007 (Indian Standard Code of Practice for Steel)", "AISC 360-16 / AISC Manual 15th Edition", "MBMA (Metal Building Manufacturers Association 2018)", "IS 875 Parts 1-5 (Wind & Design Loads)"] },
      { title: "Software Ecosystem", points: ["Tekla Structures 2024 (3D Detailing)", "STAAD.Pro Connect Edition (Structural Analysis)", "MBS (Metal Building Software)", "AutoCAD 2025 (Drafting & Layouts)"] },
    ],
    applications: [
      "Heavy Manufacturing & Forging Plants",
      "High-Bay Automated Logistics Warehouses",
      "Large-Span Airport Hangars & Railway Terminals",
      "Multi-Tier Commercial & Institutional Structures",
    ],
    relatedIndustries: ["industrial-manufacturing", "warehousing-logistics", "commercial", "infrastructure"],
    relatedProjectSlugs: ["pune-mega-logistics-park", "ahmedabad-heavy-auto-manufacturing-plant"],
    faqs: [
      { question: "What is the maximum clear span Yatee can engineer without interior columns?", answer: "We routinely design clear-span structures of up to 90 meters (300 ft) without intermediate columns using high-grade tapered steel sections and structural space trusses." },
      { question: "How does Yatee ensure structural safety during extreme seismic and cyclone events?", answer: "Our designs strictly adhere to IS 1893 (Seismic) and IS 875 Part 3 (Wind), incorporating heavy portal frame bracing, high-tensile anchor bolt patterns, and fail-safe moment connections." },
    ],
  },
  {
    slug: "fabrication-manufacturing",
    number: "02",
    title: "Fabrication & Manufacturing",
    tagline: "45,000 MT Annual Capacity Across 250,000 Sq. Ft. Heavy Bays",
    shortDescription:
      "Automated CNC plasma cutting, submerged arc welding (SAW), automated shot blasting to SA 2.5, and cold roll-forming in our 25-acre plant.",
    overview:
      "Operating from our state-of-the-art 25-acre manufacturing complex in Chakan, Pune, Yatee utilizes automated CNC beam lines, multi-torch plasma cutting tables, dual-wire submerged arc welding systems, and continuous roll-forming mills to produce world-class structural steel components with micrometer precision.",
    featuredImage: "/images/services/fabrication-plant.webp",
    galleryImages: [
      "/images/services/fab-1.webp",
      "/images/services/fab-2.webp",
      "/images/services/fab-3.webp",
    ],
    capabilities: [
      {
        title: "Automated Submerged Arc Welding (SAW)",
        description: "Heavy-duty 4-head automatic SAW lines ensuring deep penetration and uniform fillet welds on built-up H-beams up to 2500mm depth.",
        icon: "Flame",
      },
      {
        title: "High-Definition CNC Plasma & Oxy-Fuel Cutting",
        description: "Precision cutting of high-tensile steel plates up to 100mm thickness with tight angular and dimensional tolerances.",
        icon: "Crosshair",
      },
      {
        title: "Automated Shot Blasting (SA 2.5 Standard)",
        description: "Through-feed centrifugal wheel blast cleaning removing mill scale, rust, and oil to ensure superior primer coat adhesion.",
        icon: "Sparkles",
      },
      {
        title: "Multi-Coat Airless Spray Painting System",
        description: "Controlled temperature paint bays applying zinc chromate, red oxide, and high-performance epoxy/polyurethane topcoats.",
        icon: "Paintbrush",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Raw Material Verification", description: "Spectrometric chemical testing, ultrasonic flaw check, and thickness verification of incoming E350/E250 steel plates." },
      { number: "02", title: "CNC Cutting & Bevelling", description: "Direct nesting software programming to maximize plate utilization and produce accurate weld prep bevels." },
      { number: "03", title: "Flange-Web Fit-up & SAW", description: "Hydraulic fit-up clamping and automatic continuous submerged arc welding under automated flux recovery." },
      { number: "04", title: "Shot Blasting & Protective Coating", description: "Automated SA 2.5 abrasive blasting followed by airless primer application and barcode tagging for erection sequence." },
    ],
    benefits: [
      { title: "Stringent Tolerances", description: "Fabricated strictly within MBMA and AWS D1.1 structural welding tolerances." },
      { title: "High-Speed Throughput", description: "Over 3,750 MT monthly output ensures on-time batch delivery for fast-track mega projects." },
      { title: "100% Quality Traceability", description: "Every fabricated component is marked with barcode tags linked to mill heat numbers." },
    ],
    technicalExpertise: [
      { title: "Key Machinery & Equipment", points: ["Automated Dual-Torch SAW Beam Welding Lines", "CNC 6-Axis Plasma Tube & Plate Cutting Center", "8-Wheel Centrifugal Plate & Section Shot Blasting Machine", "Automated Z/C Purlin Mill with Online Hydraulic Punching"] },
      { title: "Welding Standards", points: ["AWS D1.1 / D1.1M Structural Welding Code - Steel", "ASME Section IX Certified Welders", "EN 1090-2 Execution Standard"] },
    ],
    applications: [
      "Built-Up Columns and Tapered Rafters",
      "Crane Runway Girders & Monorail Beams",
      "High-Tensile Cold-Formed Secondary Purlins",
      "Complex Lattice Trusses & Tubular Space Frames",
    ],
    relatedIndustries: ["industrial-manufacturing", "infrastructure", "cold-storage"],
    relatedProjectSlugs: ["ahmedabad-heavy-auto-manufacturing-plant", "gujarat-chemical-process-facility"],
    faqs: [
      { question: "What steel grades are used for primary PEB structural framing?", answer: "We exclusively utilize high-tensile steel plates with minimum yield strength of 345–350 MPa (ASTM A572 Grade 50 / IS 2062 E350 Grade) from primary mills like Tata Steel, JSW, and SAIL." },
      { question: "What Non-Destructive Testing (NDT) is conducted during fabrication?", answer: "We perform 100% visual inspection, Magnetic Particle Testing (MPI) on critical fillet welds, and Ultrasonic Testing (UT) on all full-penetration butt welds by certified ASNT Level II technicians." },
    ],
  },
  {
    slug: "installation-erection",
    number: "03",
    title: "Installation & Erection",
    tagline: "Safety-First High-Elevation Erection & Precision Alignment",
    shortDescription:
      "Certified rigging engineers, heavy hydraulic crane fleet, and ISO 45001 zero-harm protocols ensuring rapid on-site structural assembly.",
    overview:
      "Site execution is where engineering excellence meets operational safety. Yatee deploys experienced site project managers, certified crane operators, and skilled rigging gangs trained in high-elevation safety protocols to erect complex structural frameworks safely, accurately, and ahead of schedule.",
    featuredImage: "/images/services/erection-site.webp",
    galleryImages: [
      "/images/services/erection-1.webp",
      "/images/services/erection-2.webp",
      "/images/services/erection-3.webp",
    ],
    capabilities: [
      {
        title: "Heavy Crane & Rigging Coordination",
        description: "Operating mobile telescopic and crawler cranes up to 150-tonne capacity with rigorous lifting plan simulations.",
        icon: "Truck",
      },
      {
        title: "High-Tensile Calibrated Torque Bolting",
        description: "Grade 8.8 and 10.9 structural bolts tightened using calibrated electric torque wrenches for rigid moment connections.",
        icon: "Wrench",
      },
      {
        title: "Digital Laser Theodolite Alignment",
        description: "Sub-millimeter vertical plumbness and horizontal alignment verification across columns, rafters, and crane runway rails.",
        icon: "Scan",
      },
      {
        title: "Zero-Harm Safety Protocol Enforcement",
        description: "100% life-line safety netting, fall-arrest harnesses, certified scaffolding, and daily safety toolbox meetings.",
        icon: "ShieldAlert",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Civil Anchor Bolt Verification", description: "3D laser survey of civil foundation pedestals and anchor bolt centerlines before structural unloading." },
      { number: "02", title: "Primary Column & Portal Erection", description: "Column erection, plumbing, cross-bracing installation, and base-plate non-shrink grouting." },
      { number: "03", title: "Rafter Assembly & Tandem Lifting", description: "Ground assembly of complete rafter sections and safe tandem crane hoisting into final position." },
      { number: "04", title: "Secondary Framing & Cladding", description: "Installation of purlins, sag rods, wall sheeting, and leak-proof standing seam roofing systems." },
    ],
    benefits: [
      { title: "Rapid Turnaround", description: "Erection speed averaging 30,000 to 50,000 sq. ft. of structural framing per week." },
      { title: "Flawless Crane Alignment", description: "Laser-aligned crane runway beams ensuring smooth, vibration-free overhead crane operation." },
      { title: "Zero Incident Record", description: "Over 3 million safe man-hours achieved across top industrial corridors." },
    ],
    technicalExpertise: [
      { title: "Safety Certifications", points: ["ISO 45001:2018 Certified Occupational Safety", "Full PPE & Fall Arrest Life-Line System Standard", "NEBOSH / IOSH Certified Safety Officers on all sites"] },
      { title: "Equipment Fleet", points: ["Heavy Hydraulic Telescopic Cranes (25T to 150T)", "Articulated Boom Lifts & Scissor Lifts", "Calibrated Digital Torque Wrenches", "Total Stations & Precision Optical Levels"] },
    ],
    applications: [
      "Mega Logistics Warehouses & Fulfillment Parks",
      "Automotive & Heavy Machine Assembly Plants",
      "Process Plant Pipe Racks & Mezzanines",
      "Cold Storage Enclosures & Industrial Canopies",
    ],
    relatedIndustries: ["warehousing-logistics", "industrial-manufacturing", "infrastructure"],
    relatedProjectSlugs: ["pune-mega-logistics-park", "chennai-commercial-tech-center"],
    faqs: [
      { question: "How are crane alignment and elevation tolerances maintained during erection?", answer: "We utilize electronic Total Stations to check column verticality and crane girder span tolerances within ±2mm as mandated by IS 800 and AISE Technical Report No. 13." },
      { question: "What safety protocols are implemented for roof sheet installation?", answer: "We install heavy-duty under-roof safety netting across the entire bay, safety lifelines with double-lanyard harnesses, and OSHA-compliant roof crawling ladders." },
    ],
  },
  {
    slug: "turnkey-solutions",
    number: "04",
    title: "Turnkey Solutions",
    tagline: "Single-Point Accountability from Groundbreaking to Commissioning",
    shortDescription:
      "Integrated EPC capability covering architectural design, civil foundation coordination, structural steel, roofing, insulation, and MEP integration.",
    overview:
      "For clients seeking a seamless, single-window delivery model, Yatee provides complete Design-Build Turnkey execution. We eliminate contractor handoff friction by managing structural engineering, civil interfaces, cladding, industrial flooring, ventilation, and statutory coordination under one unified contract.",
    featuredImage: "/images/services/turnkey-project.webp",
    galleryImages: [
      "/images/services/turnkey-1.webp",
      "/images/services/turnkey-2.webp",
      "/images/services/turnkey-3.webp",
    ],
    capabilities: [
      {
        title: "Integrated Design-Build Management",
        description: "Single-point project control encompassing civil works, structural framing, wall envelopes, and utility coordination.",
        icon: "Layers",
      },
      {
        title: "Heavy-Duty Laser Screed Industrial Flooring",
        description: "FM2 / DM2 grade superflat concrete floors with high wear-resistant metallic hardeners for high-reach forklifts.",
        icon: "Grid",
      },
      {
        title: "MEP & Fire Protection Interface",
        description: "Seamless integration of overhead firefighting sprinkler lines, HVAC ducting, and power distribution bus ducts.",
        icon: "Zap",
      },
      {
        title: "Fast-Track Project Scheduling",
        description: "Critical Path Method (CPM) and Primavera P6 scheduling reducing overall capital deployment timeline by months.",
        icon: "Calendar",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Feasibility & Master Planning", description: "Site contours, master layout, soil bearing capacity evaluation, and budget estimation." },
      { number: "02", title: "Detailed Engineering & MEP Routing", description: "Coordinated BIM model unifying civil foundations, PEB steel superstructure, and overhead services." },
      { number: "03", title: "Civil Interface & Structural Execution", description: "Parallel execution of foundation footings and factory fabrication to compress site duration." },
      { number: "04", title: "Finishes, Commissioning & Handover", description: "Dock levellers, insulated shutters, lighting, roof leak tests, and final handover with documentation." },
    ],
    benefits: [
      { title: "Single Point of Responsibility", description: "Zero disputes between civil contractor, steel supplier, and roofing installers." },
      { title: "Guaranteed Timeline & Budget", description: "Fixed-price, turnkey contracts protecting clients from cost overruns and delays." },
      { title: "Accelerated Revenue Generation", description: "Facility operational 4 to 6 months earlier than conventional multi-contract models." },
    ],
    technicalExpertise: [
      { title: "Turnkey Scope Coverage", points: ["Civil Foundations & Pedestals", "Complete PEB Superstructure & Secondary Framing", "Thermal & Acoustic Insulated Envelope", "Superflat Laser Screed Flooring (FM2 Standard)", "Industrial Ventilation & Natural Daylighting Systems"] },
      { title: "Project Management Tools", points: ["Primavera P6 & MS Project", "Autodesk BIM 360", "Cloud-based Daily Progress Monitoring"] },
    ],
    applications: [
      "Modern FMCG & Food Processing Facilities",
      "Pharmaceutical Clean Manufacturing Units",
      "Automated E-commerce Sortation Hubs",
      "Large Multi-Bay Heavy Engineering Plants",
    ],
    relatedIndustries: ["industrial-manufacturing", "warehousing-logistics", "cold-storage", "commercial"],
    relatedProjectSlugs: ["hyderabad-fmcg-distribution-center", "bengaluru-pharma-cold-storage-hub"],
    faqs: [
      { question: "What are the key advantages of a turnkey PEB contract over item-rate contracting?", answer: "Turnkey contracts provide complete accountability, synchronizing civil foundation readiness with factory steel fabrication for 30% faster project delivery and guaranteed cost certainty." },
      { question: "Can Yatee accommodate future expansion provisions in turnkey design?", answer: "Yes, our engineers design end-wall frames and foundation systems with future expandable portal frames and crane runway extensions pre-calculated into the structural model." },
    ],
  },
  {
    slug: "roofing-cladding",
    number: "05",
    title: "Roofing & Cladding Systems",
    tagline: "Weather-Tight, Leak-Proof Architectural Building Envelopes",
    shortDescription:
      "Standing seam 360° seamed roofing, Galvalume trapezoidal sheets, PUFF sandwich insulated panels, and polycarbonate skylight strips.",
    overview:
      "A building is only as durable as its weather envelope. Yatee designs and installs high-performance industrial roofing and wall cladding solutions engineered for superior thermal insulation, zero water penetration, high corrosion resistance, and sleek modern architectural aesthetics.",
    featuredImage: "/images/services/roofing-cladding.webp",
    galleryImages: [
      "/images/services/roof-1.webp",
      "/images/services/roof-2.webp",
      "/images/services/roof-3.webp",
    ],
    capabilities: [
      {
        title: "360° Double-Lock Standing Seam Roofing",
        description: "100% screwless continuous roof panels seamed on-site for zero-penetration, absolute water-tight performance.",
        icon: "Shield",
      },
      {
        title: "High-Tensile Galvalume & Color-Coated Sheets",
        description: "AZ150 Galvalume / 550 MPa high-strength steel with PVDF / RMP coatings for 25+ years corrosion protection.",
        icon: "Square",
      },
      {
        title: "Continuous Injected PUFF / PIR Sandwich Panels",
        description: "High thermal resistance (R-value) panels for energy-efficient climate control and cold room operations.",
        icon: "ThermometerSnowflake",
      },
      {
        title: "Polycarbonate Skylights & Smoke Vents",
        description: "UV-protected multiwall daylight panels transmitting up to 60% diffused natural light with zero glare.",
        icon: "Sun",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Thermal & Condensation Calculation", description: "U-value analysis and insulation selection tailored to regional temperatures and internal humidity." },
      { number: "02", title: "Mobile Roll-Forming at Site", description: "Single continuous roof sheet lengths up to 80 meters rolled on-site, eliminating horizontal lap joints." },
      { number: "03", title: "Concealed Clip Fastening", description: "Special sliding thermal expansion clips allowing unrestrained thermal expansion without tearing fastener holes." },
      { number: "04", title: "Mechanical 360° Seaming", description: "Automated electric robotic seaming machines locking panel ribs into a permanent hermetic seal." },
    ],
    benefits: [
      { title: "Zero Through-Fastener Leaks", description: "No exposed screws on roof flats ensures zero water ingress even under severe monsoons." },
      { title: "Substantial Energy Savings", description: "Thermal insulation reduces internal warehouse temperature by 5°C to 8°C, lowering HVAC cooling bills." },
      { title: "25+ Year Design Life", description: "High-grade Galvalume alloy substrate with superior resistance to UV degradation and acid rain." },
    ],
    technicalExpertise: [
      { title: "Available Materials & Coatings", points: ["Bare Galvalume (Al-Zn Alloy 55/45, AZ150 gsm)", "Pre-painted Galvalume (PPGL) / Pre-painted Galvanized (PPGI)", "PVDF (Polyvinylidene Fluoride) 70/30 High-Durability Coatings", "SMP (Silicon Modified Polyester) & Super Durable Polyester"] },
      { title: "Accessories & Trims", points: ["Curved Eaves & Ridges", "Die-formed Valley Gutters in Stainless Steel", "Self-Drilling EPDM Washer Fasteners", "Ridge Ventilators & Louver Assemblies"] },
    ],
    applications: [
      "High-Rainfall Coastal Industrial Plants",
      "Temperature-Controlled Food & Pharma Warehouses",
      "Modern Commercial Showrooms & IT Parks",
      "Chemical Processing & Fertilizer Storage Plants",
    ],
    relatedIndustries: ["cold-storage", "warehousing-logistics", "commercial"],
    relatedProjectSlugs: ["bengaluru-pharma-cold-storage-hub", "hyderabad-fmcg-distribution-center"],
    faqs: [
      { question: "What is the advantage of Standing Seam Roofing over conventional screw-down sheets?", answer: "Standing seam uses concealed clips and an automated 360-degree mechanical seam with zero through-fasteners on the roof pan, eliminating the primary cause of industrial roof leaks." },
      { question: "Can we install solar panels on Yatee standing seam roofs without puncturing?", answer: "Yes, we utilize non-penetrating aluminum S-5! clamps that grip the standing seam rib directly, preserving 100% roof watertightness and full warranty." },
    ],
  },
  {
    slug: "custom-steel-structures",
    number: "06",
    title: "Custom Steel Structure Solutions",
    tagline: "Heavy Industrial Structural Framing, Multi-Tier Mezzanines & Pipe Racks",
    shortDescription:
      "Engineering complex high-tonnage structural steel, power plant frames, conveyor galleries, multi-storey steel buildings, and industrial towers.",
    overview:
      "Beyond standard pre-engineered buildings, Yatee specializes in complex, high-tonnage heavy structural steel projects. From heavy processing plants with multiple mezzanine decks to long-span conveyor trestles and architectural space frames, we deliver custom engineered solutions for demanding industrial challenges.",
    featuredImage: "/images/services/custom-structures.webp",
    galleryImages: [
      "/images/services/custom-1.webp",
      "/images/services/custom-2.webp",
      "/images/services/custom-3.webp",
    ],
    capabilities: [
      {
        title: "Multi-Storey Steel Building Systems",
        description: "Composite steel-concrete floor systems with metal deck profile sheets for rapid commercial and factory office construction.",
        icon: "Building2",
      },
      {
        title: "Industrial Pipe Racks & Conveyor Trestles",
        description: "Heavy structural steel frames engineered for heavy chemical, refinery, and bulk material handling corridors.",
        icon: "Workflow",
      },
      {
        title: "Heavy Equipment Support Structures",
        description: "High-rigidity structural steel towers supporting vibrating screens, crushers, silos, and industrial furnaces.",
        icon: "Cog",
      },
      {
        title: "Architectural Steel Space Frames",
        description: "Aesthetically striking space frames and canopy structures for airport terminals, sports stadiums, and entry atriums.",
        icon: "Compass",
      },
    ],
    engineeringProcess: [
      { number: "01", title: "Equipment Dynamic Load Modeling", description: "Calculating dynamic vibration frequencies, harmonic resonance, and static loads from operating plant equipment." },
      { number: "02", title: "Heavy Built-Up Section Fabrication", description: "Fabricating box columns, cruciform columns, and heavy plate girders with full penetration ultrasonic tested welds." },
      { number: "03", title: "Trial Shop Assembly", description: "Complete trial assembly of complex three-dimensional nodes at factory prior to protective coating." },
      { number: "04", title: "High-Tonnage Site Hoisting", description: "Engineered heavy lift plans utilizing multi-crane setups with digital load monitoring." },
    ],
    benefits: [
      { title: "Extreme Load Capacities", description: "Capable of supporting heavy process equipment with floor loading exceeding 5,000 kg/sq.m." },
      { title: "Modular Erectability", description: "Pre-assembled modular structural blocks reducing shutdown times in operating refineries and plants." },
      { title: "Custom Architectural Geometry", description: "Complex curved rafters, cantilevered canopies, and architectural trusses tailored to design intent." },
    ],
    technicalExpertise: [
      { title: "Structural Typologies", points: ["Multi-Storey Composite Structural Steel Framing", "Refinery & Petrochemical Pipe Bridges", "Long-Span Tubular Lattice Trusses", "Bulk Material Handling Conveyor Galleries"] },
      { title: "Quality & Testing Protocol", points: ["100% Full Penetration Butt Weld Ultrasonic Testing (UT)", "Magnetic Particle Inspection (MPI)", "Third Party Inspection (TPI) by Lloyds, TUV, DNV"] },
    ],
    applications: [
      "Chemical, Cement & Power Plant Structures",
      "Multi-Tier E-Commerce Fulfillment Mezzanines",
      "Airport Terminals & Exhibition Convention Halls",
      "Automotive Paint Shops & High-Bay Press Lines",
    ],
    relatedIndustries: ["infrastructure", "industrial-manufacturing", "commercial"],
    relatedProjectSlugs: ["gujarat-chemical-process-facility", "chennai-commercial-tech-center"],
    faqs: [
      { question: "What is the advantage of multi-storey structural steel over RCC construction?", answer: "Multi-storey structural steel reduces column sizes by 60%, slashes foundation dead load by 40%, and reduces construction schedules by up to 50% through rapid bolted erection." },
      { question: "Can Yatee supply fire-proofed structural steel components?", answer: "Yes, we apply factory-applied intumescent fireproofing coatings or provide cementitious vermiculite spray fireproofing achieving 1-hour to 4-hour fire ratings (BS 476 / IS 1641)." },
    ],
  },
];
