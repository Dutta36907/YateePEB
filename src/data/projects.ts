import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "pune-mega-logistics-park",
    title: "Chakan Grade-A Logistics & Fulfillment Park",
    client: "Continental Logistics & Warehousing Corp",
    location: "Chakan Industrial Zone, Pune",
    state: "Maharashtra",
    industry: "Warehousing & Logistics",
    buildingType: "High-Bay Clear Span Distribution Center",
    builtUpAreaSqFt: 450000,
    steelTonnageMT: 2850,
    clearHeightMeters: 13.5,
    clearSpanMeters: 42,
    completionYear: 2025,
    status: "Completed",
    featuredImage: "/images/projects/project-pune.webp",
    galleryImages: {
      before: ["/images/projects/pune-before-1.webp"],
      during: ["/images/projects/pune-during-1.webp", "/images/projects/pune-during-2.webp"],
      after: ["/images/projects/pune-after-1.webp", "/images/projects/pune-after-2.webp"],
    },
    overview:
      "A flagship 450,000 sq. ft. Grade-A fulfillment facility engineered to accommodate automated high-bay sortation conveyors, heavy multi-tier selective pallet racking, and 48 motorized dock leveller bays.",
    requirement:
      "The client required an expansive column-free internal layout with 13.5m clear height to maximize cubic volumetric storage, combined with a 100% leak-proof roofing warranty to protect high-value electronics and consumer goods.",
    engineeringChallenge:
      "Balancing high wind uplift forces (Zone III Pune, 39 m/s) against lightweight 42m clear-span rafters while integrating 48 heavy cantilevered dock canopies and over 35,000 sq. ft. of polycarbonate daylight panels without compromising structural stiffness.",
    structuralSolution:
      "Yatee engineered custom tapered E350 high-tensile steel portal frames with jack-beam portals across column bays. The roof was executed with 360° double-lock standing seam Galvalume sheets roll-formed on-site in continuous 68m lengths, eliminating all horizontal lap joints and through-screws.",
    designDetails: [
      "Tekla 3D BIM connection modeling ensuring zero site clashes across 14,000 bolted assemblies",
      "Jack beam portal design reducing internal columns by 50% for unhindered forklift circulation",
      "Integrated roof safety lifeline system and smoke extraction ridge ventilators",
    ],
    fabricationHighlights: [
      "Automated SAW beam welding with 100% UT testing on all moment connection butt joints",
      "SA 2.5 automatic centrifugal shot blasting and 80-micron epoxy high-build primer coating",
      "Sequenced batch dispatch matching on-site crane erection phasing",
    ],
    installationHighlights: [
      "Completed entire structural steel erection and standing seam roof installation in 16 weeks",
      "Zero safety incidents across 180,000 site man-hours with ISO 45001 safety protocols",
      "Laser-guided total station alignment achieving column verticality within ±1.5mm",
    ],
    testimonial: {
      quote:
        "Yatee PEB delivered our flagship Chakan logistics park 3 weeks ahead of schedule. The quality of the standing seam roof and the precision of the steel framing allowed our racking vendor to install without a single adjustment.",
      person: "Col. Sanjeev Nair (Retd.)",
      designation: "Director – Projects, Continental Logistics Parks",
    },
  },
  {
    slug: "ahmedabad-heavy-auto-manufacturing-plant",
    title: "Sanand Heavy Automobile Stamping & Assembly Plant",
    client: "Apex Auto Infrastructure Ltd",
    location: "Sanand Industrial Estate, Ahmedabad",
    state: "Gujarat",
    industry: "Industrial & Manufacturing",
    buildingType: "Heavy Industrial Factory with 50T Crane Girders",
    builtUpAreaSqFt: 320000,
    steelTonnageMT: 3400,
    clearHeightMeters: 16.0,
    clearSpanMeters: 36,
    completionYear: 2024,
    status: "Completed",
    featuredImage: "/images/projects/project-ahmedabad.webp",
    galleryImages: {
      before: ["/images/projects/ahmedabad-before-1.webp"],
      during: ["/images/projects/ahmedabad-during-1.webp"],
      after: ["/images/projects/ahmedabad-after-1.webp"],
    },
    overview:
      "A heavy industrial manufacturing complex featuring four 36m-wide parallel production bays equipped with tandem 50-tonne and 30-tonne overhead EOT cranes for automotive stamping and robotic body-in-white assembly.",
    requirement:
      "Extreme structural rigidity with strict deflection limits (L/1000 for crane runways) under heavy cyclic dynamic braking and acceleration loads, along with high-volume ventilation to dissipate heat from welding lines.",
    engineeringChallenge:
      "Engineering heavy stepped columns (up to 1800mm depth) and surge trusses to carry dynamic crane loads without transmitting lateral vibrations into delicate robotic laser-welding cells on adjacent mezzanine floors.",
    structuralSolution:
      "Designed composite box-column assemblies and heavy built-up crane runway girders with continuous high-strength friction-grip (HSFG) Grade 10.9 bolting. 1200mm continuous aerodynamic ridge ventilators and motorized intake louvers were integrated to achieve 14 air changes per hour.",
    designDetails: [
      "Dynamic harmonic vibration analysis in STAAD.Pro to prevent structural resonance with operating press equipment",
      "Custom crane surge truss geometry absorbing lateral trolley braking forces",
      "Heavy mezzanine deck carrying 2,500 kg/m² auxiliary stamping tooling loads",
    ],
    fabricationHighlights: [
      "Heavy built-up plate girders up to 40mm thickness with 100% radiographic weld testing",
      "Precision CNC line-boring of crane girder connection holes for exact rail alignment",
      "Zinc silicate high-durability primer for enhanced corrosion resistance",
    ],
    installationHighlights: [
      "Tandem heavy crane lifts utilizing 120-tonne hydraulic telescopic cranes",
      "Sub-millimeter optical theodolite rail alignment across 250m long crane runway tracks",
      "Rapid turnkey erection executed within 18 weeks",
    ],
    testimonial: {
      quote:
        "The precision of Yatee's heavy fabrication is world-class. Our 50-tonne overhead cranes rolled across the 250-meter runway tracks with zero vibration from day one.",
      person: "Rameshwar Patel",
      designation: "VP – Projects & Plant Engineering, Apex Auto Infrastructure Ltd",
    },
  },
  {
    slug: "bengaluru-pharma-cold-storage-hub",
    title: "Hosur Road Pharma Cold Chain & Clean Logistics Center",
    client: "Zenith BioPharma Supply Chain",
    location: "Electronic City Corridor, Bengaluru",
    state: "Karnataka",
    industry: "Cold Storage",
    buildingType: "High-Bay Temperature-Controlled PUFF Facility",
    builtUpAreaSqFt: 180000,
    steelTonnageMT: 1250,
    clearHeightMeters: 14.0,
    clearSpanMeters: 38,
    completionYear: 2024,
    status: "Completed",
    featuredImage: "/images/projects/project-bengaluru.webp",
    galleryImages: {
      before: ["/images/projects/bengaluru-before-1.webp"],
      during: ["/images/projects/bengaluru-during-1.webp"],
      after: ["/images/projects/bengaluru-after-1.webp"],
    },
    overview:
      "A state-of-the-art temperature-controlled pharmaceutical distribution facility operating multiple climate zones (+2°C to +8°C cold rooms and -25°C deep freeze vaults) with complete thermal-break structural detailing.",
    requirement:
      "Complete elimination of thermal bridging through steel structural members, airtight vapour barrier seals, and high thermal resistance (U-value < 0.18 W/m²K) to meet strict WHO-GMP and US-FDA cold chain guidelines.",
    engineeringChallenge:
      "Suspending heavy overhead refrigeration evaporator units (each weighing 3.5 tonnes) from roof trusses without causing localized thermal shorts or excessive roof deflection under concentrated equipment loads.",
    structuralSolution:
      "Yatee designed an external PEB structural skeleton with polyamide thermal-break isolation blocks at all ceiling panel suspension points. 100mm and 150mm continuous injected PIR sandwich panels were installed with tongue-and-groove cam locks and vapour seals.",
    designDetails: [
      "Thermal modeling verifying zero condensation under 90% outdoor relative humidity",
      "Under-floor foundation sub-ventilation airflow pipes preventing sub-slab frost heave",
      "Integrated airtight dock shelters and rapid roll-up insulated sectional doors",
    ],
    fabricationHighlights: [
      "Galvanized secondary purlins with Z275 gsm coating for superior moisture resistance",
      "PIR insulated sandwich panels produced on continuous automated press line",
      "Hygienic antimicrobial food-grade coating on internal steel surfaces",
    ],
    installationHighlights: [
      "Hermetic pressure testing verifying envelope air tightness exceeding ASHRAE standards",
      "Turnkey civil-to-cladding execution completed in 14 weeks",
      "Seamless integration with industrial refrigeration plant contractors",
    ],
    testimonial: {
      quote:
        "Yatee delivered an airtight, thermally isolated facility that has cut our refrigeration compressor electricity load by 32% compared to our older facility.",
      person: "Dr. Sandeep Rao",
      designation: "Chief Infrastructure Officer, Zenith BioPharma",
    },
  },
  {
    slug: "chennai-commercial-tech-center",
    title: "OMR Multi-Storey Structural Steel Commercial Complex",
    client: "Southern Infra Developers",
    location: "Old Mahabalipuram Road (OMR), Chennai",
    state: "Tamil Nadu",
    industry: "Commercial",
    buildingType: "G+5 Multi-Storey Composite Steel Office Building",
    builtUpAreaSqFt: 260000,
    steelTonnageMT: 2200,
    clearHeightMeters: 4.2,
    clearSpanMeters: 28,
    completionYear: 2025,
    status: "Completed",
    featuredImage: "/images/projects/project-chennai.webp",
    galleryImages: {
      before: ["/images/projects/chennai-before-1.webp"],
      during: ["/images/projects/chennai-during-1.webp"],
      after: ["/images/projects/chennai-after-1.webp"],
    },
    overview:
      "A G+5 multi-storey commercial office and IT development center featuring composite structural steel framing, metal deck slabs, and an expansive architectural atrium with cantilevered structural canopies.",
    requirement:
      "Fast-track construction schedule to achieve commercial leasing 6 months faster than conventional concrete construction, with large open floor plates and 2-hour certified fireproofing.",
    engineeringChallenge:
      "Engineering moment-resisting steel beam-to-column connections for coastal seismic Zone III wind/earthquake loads while keeping structural column sizes slim to maximize prime leasable floor area.",
    structuralSolution:
      "Engineered composite structural steel framing utilizing high-yield E350 steel beams with welded shear studs and 75mm profiled metal deck slabs. The entire steel superstructure was finished with thin-film decorative intumescent fireproofing.",
    designDetails: [
      "Composite steel beam design reducing foundation dead weight by 45% compared to RCC",
      "Aesthetic curved steel canopy and glass curtain wall support framing",
      "Dynamic floor vibration dampening for high-occupancy office ergonomics",
    ],
    fabricationHighlights: [
      "Precision box column fabrication with internal diaphragm stiffeners",
      "Automated CNC 3D drilling ensuring zero on-site hole reaming",
      "Certified 2-hour intumescent fire protection coating application",
    ],
    installationHighlights: [
      "Erected all 6 structural floor levels in only 11 weeks using tower cranes",
      "Continuous laser survey checking inter-storey drift and plumbness within ±2mm",
      "Zero noise complaints in busy IT corridor with quiet bolted connections",
    ],
    testimonial: {
      quote:
        "Building in steel with Yatee enabled us to open our commercial center half a year before our competing RCC developments. The open column-free floor plates leased at a 15% premium.",
      person: "M. K. Swaminathan",
      designation: "Managing Director, Southern Infra Developers",
    },
  },
  {
    slug: "gujarat-chemical-process-facility",
    title: "Dahej Special Economic Zone Chemical Process Plant",
    client: "Trans-India Chemicals & Polymers Ltd",
    location: "Dahej SEZ, Bharuch",
    state: "Gujarat",
    industry: "Infrastructure",
    buildingType: "Heavy Structural Steel Process Framing & Pipe Racks",
    builtUpAreaSqFt: 195000,
    steelTonnageMT: 2900,
    clearHeightMeters: 22.0,
    clearSpanMeters: 30,
    completionYear: 2026,
    status: "Ongoing",
    featuredImage: "/images/projects/project-gujarat.webp",
    galleryImages: {
      before: ["/images/projects/gujarat-before-1.webp"],
      during: ["/images/projects/gujarat-during-1.webp"],
    },
    overview:
      "A high-tonnage structural steel project comprising multi-tier reactor support towers, 800m of multi-level inter-unit pipe racks, and a heavy machinery processing building designed for aggressive coastal marine and chemical environments.",
    requirement:
      "Extreme corrosion protection against acidic vapor emissions and coastal salt spray, combined with heavy static and dynamic equipment loading up to 4,500 kg/m² on multi-level processing platforms.",
    engineeringChallenge:
      "Managing complex dynamic torsional stresses from operating reactors, centrifuges, and vibrating screens while meeting stringent EN 1090-2 EXC3 fabrication and third-party inspection standards.",
    structuralSolution:
      "Heavy built-up cruciform and box columns with heavy gusseted moment connections. All structural steel is treated with 100-micron hot-dip galvanizing and high-build polyamine cured coal-tar epoxy topcoats.",
    designDetails: [
      "Dynamic frequency analysis avoiding resonance with variable-speed industrial centrifuges",
      "Multi-level pipe bridge modular units designed for fast tandem crane hoisting",
      "Stainless steel 316 grade connection fasteners in high-corrosion zones",
    ],
    fabricationHighlights: [
      "100% Radiographic and Ultrasonic weld testing inspected by Bureau Veritas",
      "Full trial assembly of complex 3D pipe rack intersection nodes at factory",
      "Heavy steel plate cutting up to 65mm thickness on CNC plasma tables",
    ],
    installationHighlights: [
      "Phased erection with zero disruption to adjacent active chemical operating lines",
      "Specialized rigging using 150T mobile crawler cranes with computer-controlled load cells",
      "Strict compliance with chemical plant work permit and zero-spark safety rules",
    ],
  },
  {
    slug: "hyderabad-fmcg-distribution-center",
    title: "Jadcherla Multi-Bay FMCG & Retail Distribution Hub",
    client: "Deccan Retail & Logistics Parks",
    location: "Jadcherla Industrial Corridor, Hyderabad",
    state: "Telangana",
    industry: "Warehousing & Logistics",
    buildingType: "Multi-Bay Pre-Engineered Logistics Warehouse",
    builtUpAreaSqFt: 380000,
    steelTonnageMT: 2100,
    clearHeightMeters: 12.0,
    clearSpanMeters: 30,
    completionYear: 2026,
    status: "Ongoing",
    featuredImage: "/images/projects/project-hyderabad.webp",
    galleryImages: {
      before: ["/images/projects/hyderabad-before-1.webp"],
      during: ["/images/projects/hyderabad-during-1.webp"],
    },
    overview:
      "An expansive 380,000 sq. ft. multi-bay automated FMCG regional distribution hub featuring high-clearance bays, 32 automated loading docks, laser-screed FM2 superflat floors, and high-efficiency natural daylighting.",
    requirement:
      "Fast-track delivery within 20 weeks from foundation handover to support the client's peak festive supply chain rollout.",
    engineeringChallenge:
      "Maintaining rapid delivery across heavy monsoon rain disruptions while coordinating with civil flooring and automated conveyor installation teams simultaneously.",
    structuralSolution:
      "Pre-fabricated structural modules with high-speed bolted connection design. Mobile roll-forming of standing seam roof sheets directly over the building footprint allowed roof completion in parallel with structural frame erection.",
    designDetails: [
      "High Solar Reflectance Index (SRI > 78) roof coating reducing interior temperatures",
      "Continuous cantilevered loading dock canopy providing 6m dry clearance for trucks",
      "Heavy secondary girt framing supporting automated high-speed roll-up doors",
    ],
    fabricationHighlights: [
      "High-speed production throughput achieving 600 MT fabricated steel per week",
      "Automated pre-punched Z-purlins with continuous lap connection efficiency",
      "Barcoded component tagging linked directly to site erection master schedules",
    ],
    installationHighlights: [
      "Parallel multi-hook crane erection using 4 crane gangs simultaneously",
      "Average erection speed exceeding 45,000 sq. ft. per week",
      "Daily digital drone site tracking shared with client engineering team",
    ],
  },
];
