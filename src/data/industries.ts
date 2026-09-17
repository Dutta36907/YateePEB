import { Industry } from "@/types";

export const industriesData: Industry[] = [
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    tagline: "Heavy Heavy-Duty Engineering Bays, Heavy Crane Girders & Process Framing",
    shortDescription:
      "Purpose-engineered steel structures supporting high-capacity EOT cranes, heavy vibrating machinery, mezzanine assembly floors, and dynamic industrial processes.",
    overview:
      "Modern manufacturing requires versatile, high-load-bearing structural envelopes capable of integrating heavy overhead cranes (up to 100 MT), dynamic machinery vibrations, complex MEP routings, and high floor-load capacities. Yatee engineers heavy industrial PEB structures that maximize workflow ergonomics and withstand demanding production environments.",
    featuredImage: "/images/industries/manufacturing.webp",
    challenges: [
      { title: "Dynamic Machinery Vibration & Heavy Cranes", description: "Heavy press stamping lines, drop hammers, and high-capacity overhead cranes create severe fatigue stress and deflections." },
      { title: "Excessive Heat & Industrial Fumes", description: "Foundries, heat treatment, and welding shops generate extreme thermal plumes that require rapid exhaustion." },
      { title: "Complex Utility & Service Routing", description: "Need for extensive overhead pipe racks, bus ducting, compressed air lines, and firefighting sprinkler systems." },
    ],
    solutions: [
      { title: "Heavy Stepped Columns & Surge Girders", description: "Custom tapered and built-up box sections engineered for AISE Technical Report 13 deflection standards." },
      { title: "Engineered High-Volume Ridge Monitors", description: "Continuous 1200mm ridge ventilators and industrial louvers achieving 15+ air changes per hour naturally." },
      { title: "Pre-Engineered Service Bracket Slots", description: "Integrated bracketry and secondary framing pre-detailed in Tekla for seamless MEP suspension." },
    ],
    buildingSystems: [
      { title: "Primary Framing", description: "Tapered rigid portal frames with stepped column profiles for 10T to 50T EOT cranes." },
      { title: "Floor Systems", description: "Heavy composite metal deck mezzanine floors with load ratings up to 3,000 kg/m²." },
      { title: "Wall & Roof Systems", description: "Galvalume coated high-crest trapezoidal sheets with acoustic and thermal under-roof insulation." },
    ],
    advantages: [
      "Unobstructed bay spacing up to 12m for flexible factory equipment layouts",
      "Vibration-isolated foundation anchor designs protecting structural frames",
      "Rapid turnkey execution ensuring 4 to 6 months earlier commercial production",
      "Built-in provisions for future bay extensions and crane line additions",
    ],
    typicalSpansAndSpecs: [
      { label: "Clear Span Range", value: "24m to 60m (Multi-bay up to 180m)" },
      { label: "Clear Eave Height", value: "8m to 18m" },
      { label: "Crane Capacities", value: "5 Tonne to 100 Tonne EOT Cranes" },
      { label: "Bay Spacing", value: "8m to 12m Standard" },
    ],
    engineeringConsiderations: [
      "Dynamic impact factors for overhead crane accelerations and lateral surge forces",
      "Corrosion-resistant epoxy primer systems for chemical and humid environments",
      "Code compliance with IS 800:2007 (Steel) and IS 875 (Wind & Collateral Loads)",
    ],
    relevantProductSlugs: ["pre-engineered-buildings", "industrial-sheds", "ventilation-systems"],
    relevantServiceSlugs: ["peb-design-engineering", "fabrication-manufacturing", "installation-erection"],
    caseStudySlugs: ["ahmedabad-heavy-auto-manufacturing-plant", "gujarat-chemical-process-facility"],
  },
  {
    slug: "warehousing-logistics",
    title: "Warehousing & Logistics",
    tagline: "Mega Fulfillment Hubs, High-Bay Clear Spans & Superflat Floor Framing",
    shortDescription:
      "High-clearance, column-free mega distribution centers engineered for multi-tier selective racking, automated sortation lines, and dock leveller bays.",
    overview:
      "With the rapid growth of e-commerce, 3PL logistics, and modern supply chain infrastructure, warehouses require expansive column-free layouts, high clear heights (12m to 16m), FM2 superflat floors, multiple loading docks with weather canopies, and standing seam leak-proof roofing.",
    featuredImage: "/images/industries/warehousing.webp",
    challenges: [
      { title: "High-Density Racking & Forklift Operations", description: "Maximizing volumetric cubic storage requires tall clear heights and wide column grids without floor obstructions." },
      { title: "Severe Water Ingress Risk", description: "A single roof leak over electronic goods or sensitive inventory can cause catastrophic financial losses." },
      { title: "Fast-Track Development Schedules", description: "Institutional developers face strict tenant handover deadlines with severe delay penalties." },
    ],
    solutions: [
      { title: "Ultra-Wide 24m x 12m Column Grids", description: "Engineered jack portal frames minimizing interior columns to allow optimal pallet aisle configurations." },
      { title: "360° Double-Lock Standing Seam Roofs", description: "Concealed fastener standing seam roofing rolling up to 80m continuous sheets with zero through-screws." },
      { title: "Parallel Manufacturing & Fast Assembly", description: "Erecting up to 50,000 sq. ft. of structural framing weekly using certified mobile crane fleets." },
    ],
    buildingSystems: [
      { title: "Primary Structural Frame", description: "Clear-span and multi-span rigid frames with wide jack beams and tapered rafters." },
      { title: "Docking Canopies", description: "Heavy cantilevered dock canopies extending 4.5m to 6m for weatherproof truck loading." },
      { title: "Daylight System", description: "Polycarbonate continuous skylights providing 5% to 7% roof coverage for daylight harvesting." },
    ],
    advantages: [
      "Optimized volumetric storage capacity with up to 16m clear eave heights",
      "100% leak-proof standing seam roofing backed by a comprehensive warranty",
      "FM2 / DM2 laser screed concrete flooring interface with integrated dock pits",
      "Substantial energy savings through natural skylighting and ventilation louvers",
    ],
    typicalSpansAndSpecs: [
      { label: "Building Footprint", value: "100,000 to 1,000,000+ Sq. Ft." },
      { label: "Clear Eave Height", value: "11m to 16m (Grade-A Standard)" },
      { label: "Internal Grid", value: "12m x 24m / 16m x 24m with Jack Beams" },
      { label: "Roofing System", value: "Standing Seam / 0.55mm AZ150 Galvalume" },
    ],
    engineeringConsiderations: [
      "Rigid deflection limits for long-span rafters under heavy monsoon rain ponds",
      "Wind uplift engineering on perimeter eaves and ridge zones per IS 875 Part 3",
      "Seismic drift control for high-bay structural frames with tall dock doors",
    ],
    relevantProductSlugs: ["pre-engineered-buildings", "c-z-purlins", "roofing-sheets"],
    relevantServiceSlugs: ["peb-design-engineering", "turnkey-solutions", "roofing-cladding"],
    caseStudySlugs: ["pune-mega-logistics-park", "hyderabad-fmcg-distribution-center"],
  },
  {
    slug: "commercial",
    title: "Commercial Buildings",
    tagline: "Architectural Steel Showrooms, Office Complexes & Multi-Tier Retails",
    shortDescription:
      "Aesthetic structural steel frameworks integrating glass curtain walls, composite deck multi-storey slabs, and dramatic architectural entry atriums.",
    overview:
      "Commercial projects demand architectural elegance combined with structural speed. Yatee delivers multi-storey structural steel buildings, modern automobile showrooms, retail multiplexes, and IT commercial hubs with expansive open floor plates, slim column footprints, and striking architectural geometries.",
    featuredImage: "/images/industries/commercial.webp",
    challenges: [
      { title: "Architectural Aesthetics & Glass Integration", description: "Commercial designs require seamless interface between steel framing, structural glazing, and ACP cladding." },
      { title: "Open Floor Plates with Slim Columns", description: "Retail and office tenants require maximum usable carpet area without heavy concrete columns." },
      { title: "Strict Acoustic & Fire Safety Ratings", description: "Multi-storey commercial occupancy requires 2-hour to 4-hour certified fireproofing." },
    ],
    solutions: [
      { title: "Composite Steel-Concrete Framing", description: "Steel beams with welded shear studs and profiled metal decking creating slim, high-load floor slabs." },
      { title: "Intumescent Thin-Film Fire Coatings", description: "Aesthetic decorative intumescent fireproofing preserving crisp architectural steel lines." },
      { title: "Curved Rafters & Cantilevered Feature Canopies", description: "Custom 3D-modeled space frames and cantilevered entry portals for iconic visual appeal." },
    ],
    buildingSystems: [
      { title: "Superstructure", description: "High-yield structural steel columns and composite floor beams with shear connector studs." },
      { title: "Decking Floor System", description: "High-tensile galvanized metal deck profiles (0.8mm to 1.2mm) with reinforced concrete overlay." },
      { title: "Facade Sub-Structure", description: "Engineered galvanized tubular sub-framing for curtain wall glazing and architectural louvers." },
    ],
    advantages: [
      "50% reduction in foundation dead load compared to conventional RCC frames",
      "Slim column profiles maximizing usable commercial retail floor area",
      "Rapid multi-storey erection allowing earlier retail leasing and cash flow",
      "Striking contemporary architectural aesthetics with exposed structural steel",
    ],
    typicalSpansAndSpecs: [
      { label: "Storey Heights", value: "3.6m to 4.5m per floor (G+3 to G+8)" },
      { label: "Floor Live Load", value: "350 kg/m² to 1,000 kg/m²" },
      { label: "Fire Resistance", value: "1-Hour to 3-Hour Fire Rated" },
      { label: "Floor Deck Type", value: "Composite Metal Deck 54mm / 75mm Profile" },
    ],
    engineeringConsiderations: [
      "Vibration and floor bounce dampening for human comfort in office spaces",
      "Thermal expansion joints in large multi-bay commercial complexes",
      "Moment connection detailing for high lateral seismic frame rigidity",
    ],
    relevantProductSlugs: ["pre-engineered-buildings", "c-z-purlins", "lgs-structures"],
    relevantServiceSlugs: ["custom-steel-structures", "peb-design-engineering", "turnkey-solutions"],
    caseStudySlugs: ["chennai-commercial-tech-center"],
  },
  {
    slug: "institutional",
    title: "Institutional Buildings",
    tagline: "Large-Span Aircraft Hangars, Sports Arenas, Terminals & Auditoriums",
    shortDescription:
      "Monumental clear-span structural steel systems engineered for sports complexes, airport maintenance hangars, convention centers, and university facilities.",
    overview:
      "Institutional and public infrastructure demands monumental architectural scale, uncompromising safety standards, and column-free spaces spanning 60 to 100+ meters. Yatee engineers heavy structural steel space frames, tubular trusses, and high-tensile PEB systems for world-class institutional facilities.",
    featuredImage: "/images/industries/institutional.webp",
    challenges: [
      { title: "Massive Column-Free Clear Spans", description: "Aircraft hangars and sports stadiums require unobstructed internal widths exceeding 80 meters." },
      { title: "High Seismic & Extreme Wind Exposure", description: "Large surface areas must resist extreme cyclonic wind uplift forces and seismic events." },
      { title: "Acoustic Insulation & Climate Control", description: "Auditoriums and sports facilities require specialized acoustic dampening and thermal envelopes." },
    ],
    solutions: [
      { title: "Tubular Space Trusses & Heavy Box Girders", description: "Engineered high-efficiency 3D space trusses providing extreme torsional stiffness at minimal weight." },
      { title: "High-Lift Hangar Door Headers", description: "Massive structural steel header trusses designed to carry motorized telescoping hangar doors." },
      { title: "Multi-Layer Acoustic Insulated Roofs", description: "Perforated acoustic liner sheets with rockwool and vapour barrier layers for high NRC ratings." },
    ],
    buildingSystems: [
      { title: "Primary Space Frame", description: "3D tubular pipe trusses and tapered heavy plate welded portal frames." },
      { title: "Roof Envelope", description: "Continuous standing seam aluminum-zinc roof with high-density rockwool acoustic insulation." },
      { title: "Catwalks & Rigging Grids", description: "Overhead service catwalks and stage lighting rigging grids suspended from roof trusses." },
    ],
    advantages: [
      "Unmatched clear spans of up to 100+ meters without intermediate supports",
      "High fire, acoustic, and thermal performance meeting international safety standards",
      "Certified NDT testing and complete material traceability for government audits",
      "Stunning architectural scale and clean modern spatial volume",
    ],
    typicalSpansAndSpecs: [
      { label: "Clear Span", value: "50m to 100m+ Unobstructed" },
      { label: "Apex Height", value: "14m to 25m" },
      { label: "Hangar Door Clear Opening", value: "Up to 80m Width x 12m Height" },
      { label: "Acoustic Rating", value: "NRC 0.85+ / STC 45+" },
    ],
    engineeringConsiderations: [
      "Dynamic wind pressure distributions on curved and low-slope wide roofs",
      "Thermal expansion and contraction across massive continuous steel roof planes",
      "Heavy overhead suspended loads for HVAC units, lighting rigs, and scoreboards",
    ],
    relevantProductSlugs: ["pre-engineered-buildings", "c-z-purlins", "roofing-sheets"],
    relevantServiceSlugs: ["custom-steel-structures", "peb-design-engineering", "installation-erection"],
    caseStudySlugs: ["pune-mega-logistics-park", "chennai-commercial-tech-center"],
  },
  {
    slug: "cold-storage",
    title: "Cold Storage & Controlled Atmosphere",
    tagline: "High-Efficiency Thermal Envelopes, PUFF Insulated Bays & Cleanrooms",
    shortDescription:
      "Airtight, thermally-isolated structural steel building systems designed for deep-freeze logistics, pharmaceutical cold chain, and food processing plants.",
    overview:
      "Temperature-sensitive industries like dairy, pharmaceuticals, seafood, and horticulture require hermetically sealed structural envelopes that prevent thermal bridging, eliminate moisture condensation, and maintain strict temperatures between -40°C and +4°C with minimal energy loss.",
    featuredImage: "/images/industries/cold-storage.webp",
    challenges: [
      { title: "Severe Thermal Bridging & Energy Loss", description: "Steel conduction through structural columns and roof purlins can lead to massive refrigeration power waste." },
      { title: "Vapour Condensation & Ice Buildup", description: "Humidity infiltration through panel joints creates frost buildup and structural corrosion." },
      { title: "Sub-Zero Structural Floor Frost Heave", description: "Freezing sub-soil causes floor expansion and catastrophic structural slab cracking." },
    ],
    solutions: [
      { title: "Thermal-Break Structural Connections", description: "High-density polyamide and Teflon thermal breaks isolating internal steel frames from exterior envelopes." },
      { title: "Cam-Lock Continuous Injected PUFF/PIR Panels", description: "Tongue & groove insulated sandwich panels with vapour barrier seals maintaining absolute airtightness." },
      { title: "Under-Floor Sub-Ventilation & Heater Grids", description: "Engineered foundation airflow pipes and thermal insulation preventing sub-slab freezing." },
    ],
    buildingSystems: [
      { title: "Structural Frame", description: "External PEB structural envelope supporting internal suspended PUFF ceiling panels." },
      { title: "Insulation Envelope", description: "80mm to 150mm rigid PIR/PUFF panels with food-grade antimicrobial facing steel." },
      { title: "Airtight Hermetic Doors", description: "Automated high-speed insulated sectional doors and air curtains at loading docks." },
    ],
    advantages: [
      "Up to 40% reduction in refrigeration electricity consumption via low U-value panels",
      "Zero thermal bridging and complete condensation elimination",
      "FDA, HACCP, and EU-compliant cleanroom hygienic interior wall finishes",
      "Turnkey execution including civil insulated plinth, PEB frame, and PUFF envelope",
    ],
    typicalSpansAndSpecs: [
      { label: "Operating Temperature", value: "-40°C (Blast Freeze) to +15°C (Cool Ante-Room)" },
      { label: "Insulation Panel Thickness", value: "80mm, 100mm, 120mm, 150mm PIR Core" },
      { label: "U-Value Rating", value: "As low as 0.14 W/m²K" },
      { label: "Clear Storage Height", value: "8m to 14m High-Bay Automated Racking" },
    ],
    engineeringConsiderations: [
      "Vapour barrier continuity across wall-to-ceiling and wall-to-floor junctions",
      "High thermal contraction coefficient allowances in sub-zero steel members",
      "Heavy overhead refrigeration evaporator unit load suspensions on roof trusses",
    ],
    relevantProductSlugs: ["lgs-structures", "pre-engineered-buildings", "roofing-sheets"],
    relevantServiceSlugs: ["turnkey-solutions", "roofing-cladding", "peb-design-engineering"],
    caseStudySlugs: ["bengaluru-pharma-cold-storage-hub"],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & Heavy Steel Projects",
    tagline: "Metro Station Structures, Bridge Girders, Power Plants & Toll Plazas",
    shortDescription:
      "High-grade certified structural steel fabrication and erection for heavy public infrastructure, railway terminals, metro viaducts, and energy corridors.",
    overview:
      "Public infrastructure projects demand rigorous quality control, full material traceability, EN 1090-2 structural steel execution compliance, and complex heavy rigging capabilities. Yatee partners with Tier-1 EPC contractors and government authorities to fabricate and erect heavy infrastructure steelwork.",
    featuredImage: "/images/industries/infrastructure.webp",
    challenges: [
      { title: "Stringent NDT & Inspection Standards", description: "100% radiographic and ultrasonic weld testing under third-party inspection (TPI) agencies." },
      { title: "Complex Heavy Lifts in Urban Environments", description: "Erecting massive steel girders over operating highways and live railway lines under tight night possession windows." },
      { title: "Severe Atmospheric & Corrosive Exposure", description: "Structures exposed to heavy vehicle emissions, marine coastal salt air, and extreme weather cycles." },
    ],
    solutions: [
      { title: "EN 1090 EXC3 Certified Shop Fabrication", description: "Automated SAW welding, calibrated CNC drilling, and computerized trial shop assembly of complex nodes." },
      { title: "Heavy Mobile Crane Lifting Plans", description: "Tandem crane hoisting plans simulated in 3D CAD to ensure safe, rapid installation during rail blocks." },
      { title: "Hot-Dip Galvanizing & Multi-Coat Epoxies", description: "High-spec 100-micron hot-dip galvanizing and polyurethane topcoats for 50-year maintenance-free life." },
    ],
    buildingSystems: [
      { title: "Heavy Plate Girders", description: "Built-up welded box girders and I-girders with plate thicknesses up to 80mm." },
      { title: "Tubular Arch & Space Trusses", description: "Curved aesthetic tubular trusses for metro station canopies and airport entry gates." },
      { title: "High-Strength Anchor Systems", description: "Grade 8.8 / 10.9 hot-dip galvanized anchor bolts and specialized elastomeric bearing pads." },
    ],
    advantages: [
      "Strict compliance with IRC (Indian Roads Congress) and RDSO Railway specifications",
      "Full mill test certificate (MTC) traceability linked to barcode tags on every piece",
      "Over 22,000 MT annual heavy fabrication throughput for fast project milestones",
      "Experienced safety engineers holding NEBOSH / IOSH credentials managing site erection",
    ],
    typicalSpansAndSpecs: [
      { label: "Plate Thicknesses", value: "Up to 100mm High-Tensile Steel" },
      { label: "Weld Testing", value: "100% UT / MPI / Radiography per AWS D1.1" },
      { label: "Corrosion Protection", value: "Hot-Dip Galvanized / 250 Micron Epoxy System" },
      { label: "Structural Standards", value: "IRC 24 / IS 800 / EN 1090-2 (EXC3)" },
    ],
    engineeringConsiderations: [
      "Fatigue stress calculations for dynamic vehicular and high-speed train vibrations",
      "Differential thermal deflection across long-span bridge girders",
      "Wind vortex shedding and aerodynamic stability analysis on tall canopy canopies",
    ],
    relevantProductSlugs: ["pre-engineered-buildings", "c-z-purlins", "custom-steel-structures"],
    relevantServiceSlugs: ["custom-steel-structures", "fabrication-manufacturing", "installation-erection"],
    caseStudySlugs: ["gujarat-chemical-process-facility", "chennai-commercial-tech-center"],
  },
];
