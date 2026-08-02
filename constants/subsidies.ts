export interface SubsidyService {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  keyPoints: string[];
  documents: string[];
  process: string[];
  timeframe?: string;
  validity?: string;
}

export const subsidiesData: SubsidyService[] = [
  // SECTION 1: CENTRAL GOVERNMENT SCHEMES
  {
    id: "agro-processing-cluster",
    title: "MoFPI - Agro Processing Cluster (APC) Scheme",
    category: "Central Govt Schemes",
    subCategory: "Food Processing Infrastructure",
    description: "A scheme under PM Kisan Sampada Yojana by the Ministry of Food Processing Industries (MoFPI). It aims to promote setting up of modern food processing units by creating common infrastructure and linking groups of producers/farmers with processors and markets.",
    keyPoints: [
      "Grant-in-aid of 35% of eligible project cost in general areas (max INR 10 Crores).",
      "Grant-in-aid of 50% of eligible project cost in difficult/hilly/SC-ST areas (max INR 10 Crores).",
      "Requires setting up of at least 5 food processing units with an aggregate investment of INR 25 Crores.",
      "Promotes collaboration, supply chain optimization, and reduction in post-harvest losses."
    ],
    documents: [
      "Detailed Project Report (DPR)",
      "Bank Loan Sanction Letter along with Appraisal Report",
      "Land ownership documents or registered lease deed (minimum 10 acres)",
      "Chartered Accountant (CA) certified sources and application of funds statement",
      "Partnership Deed / Incorporation Certificate",
      "Promoter PAN, Aadhaar, and net worth certificates"
    ],
    process: [
      "Form a Project Execution Agency (PEA) / Special Purpose Vehicle (SPV) and buy or lease suitable land (min 10 acres).",
      "Obtain bank term loan sanction and detailed project appraisal report.",
      "Submit the online application on the MoFPI Sampada portal along with the DPR.",
      "Presentation of the project before the Inter-Ministerial Approval Committee (IMAC).",
      "Upon approval, get the sanction letter and release of grant in 4 interest-free installments mapped to construction progress."
    ],
    timeframe: "4-6 months approval window",
    validity: "Permanent setup (implementation timeframe is 24 months)"
  },
  {
    id: "creation-expansion-of-food-processing-preservation-capacity-scheme",
    title: "MoFPI - CEFPPC Scheme",
    category: "Central Govt Schemes",
    subCategory: "Food Processing Infrastructure",
    description: "The Creation / Expansion of Food Processing & Preservation Capacities (CEFPPC) scheme promotes the setting up of new food processing units as well as expansion/modernization of existing ones. It covers agro-processing industries in sectors like fruits & vegetables, meat, poultry, dairy, fish, and grains.",
    keyPoints: [
      "Rebate/grant of 35% of eligible plant & machinery cost (max INR 5 Crores) in general areas.",
      "Rebate/grant of 50% of eligible cost (max INR 5 Crores) in North-East and difficult terrains.",
      "Targets individual entrepreneurs, proprietary firms, partnerships, SPVs, and Cooperatives.",
      "Helps increase value addition, increase shelf life of farm produce, and generate employment."
    ],
    documents: [
      "DPR detailing technical specifications and capacities",
      "CA certificate for actual/proposed capital expenditure",
      "Bank Sanction Letter and detailed appraisal report",
      "Land documents (Registry/Lease)",
      "NOC from local authorities and State Pollution Control Board",
      "Quotations for machinery and equipment"
    ],
    process: [
      "Acquire land and secure a term loan sanction from a commercial bank.",
      "Prepare a comprehensive DPR with itemized quotes for plant and machinery.",
      "Submit the application online on the MoFPI portal during active window.",
      "Project review by the Ministry's Technical Committee.",
      "Final approval by IMAC followed by the release of the grant in two equal installments (50% upfront, 50% post-completion)."
    ],
    timeframe: "3-5 months",
    validity: "Unit-specific (implementation timeframe is 18 months)"
  },
  {
    id: "integrated-cold-chain",
    title: "MoFPI - Integrated Cold Chain & Value Addition Infrastructure",
    category: "Central Govt Schemes",
    subCategory: "Food Processing Infrastructure",
    description: "A scheme providing financial assistance for setting up integrated cold chain facilities without any break from the farm gate to the consumer. It includes pre-cooling facilities at production sites, reefer vans, mobile cooling units, and multi-product cold storage.",
    keyPoints: [
      "Financial assistance of up to 50% for storage infrastructure (max INR 10 Crores).",
      "Financial assistance of up to 75% for value addition/processing machinery in general areas.",
      "Covers pre-cooling, bulk cooling, IQF, blast freezing, reefer trucks, and sorting/grading lines.",
      "Highly beneficial for horticulture, dairy, meat, poultry, and marine products."
    ],
    documents: [
      "DPR and Bank Appraisal Report",
      "Registered land documents showing non-agricultural use validation",
      "Reefer vehicle registration quotations and specifications",
      "CA certificate of net worth and promoter equity funds",
      "CE (Chartered Engineer) civil and mechanical certificates"
    ],
    process: [
      "Establish the project blueprint linking farm-gate collection centers to the main hub.",
      "Secure term loan financing and land clearance.",
      "Upload detailed application on the MoFPI online portal.",
      "Scrutiny by Project Management Agency (PMA) and field inspections.",
      "Approval by IMAC. Grants are disbursed in three installments (25%, 40%, and 35%) mapped to physical milestones."
    ],
    timeframe: "6 months",
    validity: "Permanent setup (implementation within 20-24 months)"
  },
  {
    id: "mega-food-park",
    title: "MoFPI - Mega Food Park Scheme",
    category: "Central Govt Schemes",
    subCategory: "Food Processing Infrastructure",
    description: "A capital-intensive infrastructure scheme that establishes a cluster-based 'hub and spoke' model. It provides state-of-the-art infrastructure for food processing units, comprising a Central Processing Center (CPC) supported by Primary Processing Centers (PPCs) and Collection Centers (CCs).",
    keyPoints: [
      "Grant of 50% of eligible project cost in general areas (max INR 50 Crores).",
      "Grant of 75% of eligible project cost in difficult regions (max INR 50 Crores).",
      "Minimum land requirement of 50 acres for the CPC.",
      "Provides common facilities like cold storage, warehouse, testing labs, roads, and power grids."
    ],
    documents: [
      "Feasibility Study and master layout plan",
      "SPV registration documents and shareholder agreements",
      "DPR with bank appraisal and financial closure proof",
      "Land registry papers (50+ acres in name of SPV)",
      "Environmental impact clearance report"
    ],
    process: [
      "Form an SPV consisting of corporate members, farmers, and retailers.",
      "Acquire 50+ acres of land and complete financial closure with banks.",
      "Submit the master project report online to MoFPI.",
      "Detailed project assessment by the Ministry and IMAC presentation.",
      "Disbursement of grant in 4 installments to execute the park construction."
    ],
    timeframe: "6-9 months",
    validity: "Permanent infrastructure (development within 30 months)"
  },
  {
    id: "operation-greens",
    title: "MoFPI - Operation Greens (TOP to TOTAL)",
    category: "Central Govt Schemes",
    subCategory: "Food Processing Infrastructure",
    description: "A scheme launched to stabilize the supply of Tomato, Onion, and Potato (TOP) crops and to limit price volatility. It has now been expanded to cover all notified fruits and vegetables (TOTAL) and provides subsidies for both transportation/storage and value addition projects.",
    keyPoints: [
      "50% subsidy on transportation of eligible crops from production area to consumption markets.",
      "50% subsidy on hiring storage facilities for a maximum period of 3 months.",
      "Up to 50% grant (max INR 15 Crores) for setting up Integrated Value Chain Development projects.",
      "Protects farmers from distress sales and boosts farm-gate processing."
    ],
    documents: [
      "Invoices of transport/freight bills and storage receipts",
      "FOB/FOR transaction proof and banking challans",
      "For value chain: DPR, CA certs, and bank sanction files",
      "Farmers procurement agreement copies"
    ],
    process: [
      "For short-term transport/storage: Submit claim invoices directly on the MoFPI portal within 60 days of the transaction.",
      "For long-term value chain projects: Submit detailed proposal during the application window.",
      "Ministry verifies the bills/realizations against crop arrival data.",
      "Subsidies are credited directly to the applicant's bank account."
    ],
    timeframe: "30-45 days for transport claims; 4-6 months for infrastructure projects",
    validity: "Scheme-period specific"
  },
  {
    id: "nabard-primary-processing",
    title: "NABARD - Primary Processing & Warehousing Subsidy",
    category: "Central Govt Schemes",
    subCategory: "Agri Infrastructure Subsidies",
    description: "Financial assistance and credit-linked subsidies provided by NABARD (National Bank for Agriculture and Rural Development) for establishing primary processing centers, cleaning, grading, sorting, and packaging facilities in rural areas.",
    keyPoints: [
      "Credit-linked back-ended capital subsidy ranging from 25% to 33.3% of project cost.",
      "Targets individual farmers, FPOs (Farmer Producer Organizations), cooperatives, and private firms.",
      "Improves value addition at the farm level and prevents farm wastage.",
      "Enables farmers to command better pricing in secondary markets."
    ],
    documents: [
      "FPO/Farmer Registration proof",
      "DPR detailing the processing machinery (cleaners, graders, sorters)",
      "Bank Loan Sanction letter",
      "Udyam/MSME Registration",
      "Land lease or ownership papers"
    ],
    process: [
      "Prepare a project plan and submit a loan application to a NABARD-partnered commercial bank.",
      "The bank sanctions the loan and applies to NABARD for subsidy pre-sanction.",
      "Construct the facility and install the grading/sorting machinery.",
      "Joint monitoring inspection by NABARD and bank representatives.",
      "NABARD releases the subsidy to the bank, which is kept in a Subsidy Reserve Fund Account of the borrower."
    ],
    timeframe: "2-3 months",
    validity: "Permanent setup"
  },
  {
    id: "nabard-silos",
    title: "NABARD - Steel Silos Bulk Storage Subsidy",
    category: "Central Govt Schemes",
    subCategory: "Agri Infrastructure Subsidies",
    description: "Subsidies under agricultural infrastructure funds facilitated by NABARD to construct steel silos for bulk handling, cleaning, and scientific storage of food grains, safeguarding food security.",
    keyPoints: [
      "Subsidy up to 33% of eligible project cost.",
      "Promotes bulk handling of wheat, rice, and maize in modern steel silos.",
      "Prevents rodent attack, moisture decay, and quality degradation of food grains.",
      "Substantially reduces manual labor in loading/unloading operations."
    ],
    documents: [
      "Industrial land zoning certificates",
      "DPR with architectural blueprints and engineering specifications of the silos",
      "Term loan documents",
      "CA and Chartered Engineer certificates",
      "State Warehousing License copy"
    ],
    process: [
      "Acquire suitable land with rail/road connectivity.",
      "Secure financing and request subsidy registration via local NABARD coordinator.",
      "Execute silo fabrication matching scientific warehouse standards.",
      "Submit completion certificates and inspection records.",
      "Disbursement of back-ended subsidy."
    ],
    timeframe: "3-4 months",
    validity: "Permanent storage setups"
  },
  {
    id: "rural-godowns",
    title: "NABARD - Rural Godowns / Agricultural Marketing Infrastructure (AMI)",
    category: "Central Govt Schemes",
    subCategory: "Agri Infrastructure Subsidies",
    description: "A sub-scheme of the Integrated Scheme for Agricultural Marketing (ISAM) facilitated by NABARD. It provides capital investment subsidies for the construction, renovation, or expansion of scientific warehouses, godowns, and cold storage units.",
    keyPoints: [
      "25% capital subsidy for general category promoters (max INR 50 Lakhs).",
      "33.3% capital subsidy for SC/ST, women, and FPO promoters (max INR 75 Lakhs).",
      "Godown must be constructed according to scientific standards (WDRA compliant).",
      "Enables farmers to store crop surplus and obtain warehouse receipt loans."
    ],
    documents: [
      "Structural drawing and layout plan signed by a registered engineer",
      "Land registry or mutation records",
      "Bank loan sanction letter",
      "CA certified project cost breakup",
      "WDRA feasibility certificate copy"
    ],
    process: [
      "Obtain sanction for a term loan from an eligible cooperative or commercial bank.",
      "Submit the AMI subsidy application to the bank within 60 days of the first loan disbursement.",
      "Construct the godown as per the approved structural guidelines.",
      "NABARD/Bank team carries out joint inspection.",
      "Subsidy is disbursed to the bank and adjusted against the outstanding loan principal."
    ],
    timeframe: "3 months",
    validity: "Permanent structures"
  },
  {
    id: "rural-poultry-project",
    title: "NLM - Rural Poultry Project Subsidy",
    category: "Central Govt Schemes",
    subCategory: "National Livestock Mission (NLM)",
    description: "Financial assistance provided under the National Livestock Mission (NLM) of the Ministry of Fisheries, Animal Husbandry, and Dairying. It provides capital subsidies to entrepreneurs for setting up parent poultry farms, hatcheries, and rearing units.",
    keyPoints: [
      "50% capital subsidy of up to INR 25 Lakhs for setting up breeding farms and hatcheries.",
      "Eligible for individual entrepreneurs, self-help groups (SHGs), cooperatives, and private firms.",
      "Promotes rural employment and improves production of eggs and poultry meat.",
      "Applies to low-input technology and specific hybrid parent stocks."
    ],
    documents: [
      "NLM Application Form",
      "Detailed project report including layout plans and training credentials",
      "Bank Loan Sanction letter or proof of own funding (self-finance is allowed under NLM)",
      "Net worth certificate of the promoter",
      "Land papers showing possession of suitable agricultural land (min 1-2 acres)"
    ],
    process: [
      "Register on the NLM portal (nlm.udyamimitra.in).",
      "Fill out the application form and upload the detailed project report (DPR).",
      "State Animal Husbandry Department reviews the proposal and conducts spot verification.",
      "Approved applications are sent to the state committee and then to the central ministry.",
      "The subsidy is released to the escrow bank account of the beneficiary."
    ],
    timeframe: "4-6 months",
    validity: "Permanent breeding setup"
  },
  {
    id: "sheep-goat-breeding-farm",
    title: "NLM - Sheep & Goat Breeding Farm Subsidy",
    category: "Central Govt Schemes",
    subCategory: "National Livestock Mission (NLM)",
    description: "A capital subsidy under the National Livestock Mission (NLM) to establish goat and sheep breeding units. It is aimed at upgrading local breeds and multiplying livestock counts for mutton and wool production.",
    keyPoints: [
      "50% capital subsidy of up to INR 50 Lakhs for a unit of 500 females and 25 males.",
      "Applies to infrastructure, purchase of animals, machinery, and fodder development.",
      "Promotes breeding of high-yielding indigenous breeds.",
      "Promoters must show land possession for animal housing and pasture."
    ],
    documents: [
      "NLM online registration profile details",
      "Project report showing feed/fodder plans and veterinary access details",
      "Promoter ID, photos, and training certificates (husbandry training)",
      "Bank account details and proof of loan/capital availability",
      "Land title deed or long-term lease papers (min 3-5 acres)"
    ],
    process: [
      "Prepare a DPR for a 500+25 breeding unit and upload it to the NLM portal.",
      "Get clearance from the District Animal Husbandry Officer.",
      "State Level Committee recommends the file to the Union Ministry.",
      "Central approval is granted; project execution begins.",
      "Subsidy is released directly to the bank/escrow account."
    ],
    timeframe: "4-6 months",
    validity: "Permanent breeding unit"
  },
  {
    id: "fodder-value-addition-units",
    title: "NLM - Fodder Value Addition & Processing Units",
    category: "Central Govt Schemes",
    subCategory: "National Livestock Mission (NLM)",
    description: "A subsidy designed to establish fodder blocks, hay bailing, silage making units, or feed pelleting units, ensuring continuous quality feed supply to the dairy and livestock sectors.",
    keyPoints: [
      "50% capital subsidy of up to INR 50 Lakhs for setting up fodder processing plants.",
      "Applies to silage bunkers, pelleting machinery, and shredders.",
      "Aims to convert crop residues into nutritious animal feed.",
      "Saves waste and generates rural agribusiness opportunities."
    ],
    documents: [
      "DPR detailing machinery layout and crop residue tie-ups",
      "PAN, Aadhaar, and CA Net Worth certifications",
      "Land lease/mutation papers",
      "Electricity load approvals"
    ],
    process: [
      "Register online at nlm.udyamimitra.in portal.",
      "Upload the DPR and structural blueprints of processing sheds.",
      "State committee inspects and approves the proposal.",
      "Ministry issues central sanction.",
      "Grant is released directly in milestones."
    ],
    timeframe: "3-4 months",
    validity: "Unit-specific"
  },
  {
    id: "pig-breeding-farm",
    title: "NLM - Pig Breeding Farm Subsidy",
    category: "Central Govt Schemes",
    subCategory: "National Livestock Mission (NLM)",
    description: "Financial assistance under the NLM to establish commercial pig breeding units (100 sows + 10 boars) to increase pork production and upgrade breed stock.",
    keyPoints: [
      "50% capital subsidy of up to INR 30 Lakhs for a 100+10 pig breeding unit.",
      "Covers modern pig styes, breeding stock procurement, and waste treatment setup.",
      "Targets farmers, entrepreneurs, and cooperative societies.",
      "Helps implement scientific housing and biometric tracking."
    ],
    documents: [
      "DPR and site maps",
      "Husbandry training certificate (optional but preferred)",
      "Bank sanction or proof of funds",
      "Land registration documents (min 2 acres)"
    ],
    process: [
      "Apply online on the NLM portal.",
      "Upload the pig breeding project proposal.",
      "District and State committees approve and forward the application to Delhi.",
      "Central sanction is granted; construction begins.",
      "Disbursement of subsidy."
    ],
    timeframe: "4-6 months",
    validity: "Permanent breeding setup"
  },
  {
    id: "apeda-infra",
    title: "APEDA - Export Infrastructure Development Subsidy",
    category: "Central Govt Schemes",
    subCategory: "Export Promotion Subsidies",
    description: "Financial assistance schemes provided by APEDA (Agricultural and Processed Food Products Export Development Authority) to registered exporters for creating infrastructure required for exporting scheduled agri products.",
    keyPoints: [
      "Subsidies of 40% to 50% of the project cost for export infrastructure (max INR 2 Crores).",
      "Covers pre-cooling units, sorting-grading lines, specialized transport, cold storage, and testing equipment.",
      "Exporter must hold a valid APEDA RCMC.",
      "Enhances packaging quality and export safety parameters."
    ],
    documents: [
      "APEDA RCMC Certificate",
      "Detailed project report and audited balance sheets",
      "Term loan approval letters from commercial banks",
      "Quotations of specialized processing machinery",
      "Detailed export plan and past export records"
    ],
    process: [
      "Apply online on the APEDA website under 'Financial Assistance Scheme (FAS)' during active periods.",
      "Specify the details of the infrastructure to be established (e.g. cold room or testing lab).",
      "Upload the DPR and bank appraisal files.",
      "APEDA reviews the proposal and issues an in-principle approval.",
      "Complete the project and request a physical inspection to release the subsidy."
    ],
    timeframe: "3-4 months",
    validity: "Project-specific"
  },
  {
    id: "apeda-pack-house",
    title: "APEDA - Modern Pack House Subsidy",
    category: "Central Govt Schemes",
    subCategory: "Export Promotion Subsidies",
    description: "A specialized financial subsidy under APEDA for establishing modern pack houses equipped with grading, washing, sanitizing, and sorting lines required to export fresh fruits and vegetables.",
    keyPoints: [
      "Reimbursement of 40% of setup cost (max INR 1 Crore) for registered modern pack houses.",
      "Must comply with APEDA standards (e.g. food-grade materials, water filtering, temperature controls).",
      "Required to clear phyto-sanitary audits in importing countries (EU, USA, Middle East).",
      "Assures zero contaminants and mechanical damage on fresh produce."
    ],
    documents: [
      "APEDA Registration details",
      "Chartered Engineer completion report of packing line",
      "Invoices of washing/sorting/grading machinery purchased",
      "Phyto-sanitary NOC and local food safety license"
    ],
    process: [
      "Obtain APEDA guidelines for establishing a certified pack house.",
      "Setup the facility and install the approved grading/sorting lines.",
      "Apply online for pack house recognition and financial subsidy.",
      "APEDA committee inspection visits the site to verify standards.",
      "Post-audit approval leads to registration of pack house and release of subsidy."
    ],
    timeframe: "2-3 months",
    validity: "Requires renewal of APEDA pack house certification every 2 years"
  },
  {
    id: "ahidf-subsidy-consultants",
    title: "AHIDF (Animal Husbandry Infrastructure Development Fund)",
    category: "Central Govt Schemes",
    subCategory: "Dairy & Meat Infrastructure",
    description: "A central government scheme providing financial support and credit incentives to dairy processors, meat processors, and animal feed manufacturers. It offers interest subventions on loans for establishing infrastructure.",
    keyPoints: [
      "3% interest subvention on term loans from commercial banks.",
      "Credit guarantee cover of up to 25% of the loan amount under the Credit Guarantee Fund.",
      "Applies to dairy processing, meat processing, feed manufacturing, and breed multiplication.",
      "Promotes private investments to augment domestic milk and meat processing capacities."
    ],
    documents: [
      "DPR detailing the processing capacity and technical feasibility",
      "CA Certified project cost and promoter equity statement",
      "Detailed bank appraisal and loan sanction document",
      "Land possession papers and environmental NOC",
      "GSTIN and PAN of the applicant entity"
    ],
    process: [
      "Apply online on the AHIDF portal (ahidf.udyamimitra.in).",
      "Upload the detailed project report and company details.",
      "The Department of Animal Husbandry & Dairying (DAHD) reviews the project online.",
      "Upon approval, DAHD issues the interest subvention letter.",
      "Bank disburses the loan and applies the 3% interest discount, which is reimbursed by the government."
    ],
    timeframe: "2-3 months",
    validity: "Subvention is active for a loan repayment tenure of up to 8 years"
  },
  {
    id: "NABARD-Agriculture-Infrastructure-Fund",
    title: "Agri Infrastructure Fund (AIF)",
    category: "Central Govt Schemes",
    subCategory: "Agri Infrastructure Subsidies",
    description: "A medium-long term debt financing facility facilitated by NABARD and commercial banks under the Ministry of Agriculture. It provides interest subventions and credit guarantee support for post-harvest management infrastructure.",
    keyPoints: [
      "3% interest subvention per annum on loans up to INR 2 Crores.",
      "Credit guarantee coverage under CGTMSE for loans up to INR 2 Crores.",
      "Tenure of subvention is up to 7 years.",
      "Covers cold chains, warehouses, primary processing centers, pack houses, and assaying labs."
    ],
    documents: [
      "DPR detailing the post-harvest infrastructure",
      "Term loan application form and bank sanction letter",
      "Land papers showing ownership/lease",
      "MSME/Udyam Registration",
      "PAN and Aadhaar copies of promoters"
    ],
    process: [
      "Upload the project details on the AIF portal (agriinfra.dac.gov.in).",
      "Select the preferred bank from the portal.",
      "The AIF team verifies the project eligibility and approves the interest subvention.",
      "The chosen bank appraisals the project and disburses the term loan.",
      "Interest subvention is credited quarterly to the loan account."
    ],
    timeframe: "1-2 months",
    validity: "7 years maximum subvention period"
  },
  {
    id: "ministry-of-new-and-renewable-energy",
    title: "MNRE - Solar Energy Subsidies",
    category: "Central Govt Schemes",
    subCategory: "Renewable Energy Subsidies",
    description: "Financial incentives and capital subsidies provided by the Ministry of New and Renewable Energy (MNRE) for installing solar rooftop systems, solar water pumps (under PM-KUSUM), and off-grid solar systems for industries and agriculture.",
    keyPoints: [
      "Capital subsidy ranging from 30% to 50% for agricultural solar pump installations.",
      "Subsidies on grid-connected solar rooftops for commercial and industrial users (varies by state and DISCOM).",
      "Substantially lowers power tariffs and decreases carbon footprint for factories.",
      "Helps meet Green Energy compliance requirements."
    ],
    documents: [
      "DISCOM electricity bill copy",
      "Aadhaar Card and PAN Card",
      "Rooftop/Land shadow-free area feasibility report",
      "Technical specifications of solar panels, inverter, and structure",
      "Net-metering feasibility approval from local DISCOM"
    ],
    process: [
      "Select an MNRE-approved empanelled solar vendor.",
      "Apply online on the National Portal for Rooftop Solar or PM-KUSUM state portal.",
      "Vendor submits technical feasibility and secures net-metering NOC from DISCOM.",
      "Install the solar power system.",
      "DISCOM inspects the setup, installs the net meter, and MNRE releases the subsidy directly to the applicant's bank account."
    ],
    timeframe: "3-4 months (subject to net-metering approvals)",
    validity: "Solar panels typically have a performance warranty of 25 years"
  },

  // SECTION 2: STATE GOVERNMENT SCHEMES
  {
    id: "Andhra-Pradesh-State-Schemes",
    title: "APFPS / Andhra Pradesh Industrial Subsidies",
    category: "State Govt Schemes",
    subCategory: "State Incentives",
    description: "Industrial incentives and food processing subsidies provided by the Andhra Pradesh Food Processing Society (APFPS) and the Industries Department, Government of Andhra Pradesh, to encourage investments in the state.",
    keyPoints: [
      "Capital subsidy of up to 35% on fixed capital investment for food processing units (max INR 2.5 Crores).",
      "Power tariff rebate of INR 1 to INR 2 per unit for a period of 5 years.",
      "100% reimbursement of stamp duty and transfer duty paid on land purchase/lease.",
      "Reimbursement of SGST (varies from 50% to 100%) for 5 to 7 years."
    ],
    documents: [
      "AP Single Desk portal registration ID",
      "Detailed Project Report (DPR)",
      "Bank Loan Sanction and disbursement proof",
      "Land allocation copy / Sale deed",
      "GST registration certificate and paid challans statement",
      "Power connection bills and factory license"
    ],
    process: [
      "Apply for approvals through the AP Single Desk Portal (apindg2b.ap.gov.in).",
      "Incorporate the company and establish the factory in Andhra Pradesh.",
      "File claim applications for Stamp Duty, Power Rebate, or Capital Subsidy online with the District Industries Centre (DIC) / APFPS.",
      "Physical verification by DIC/APFPS officers to inspect machinery installation.",
      "Incentive is sanctioned by the State Level Committee (SLC) and disbursed."
    ],
    timeframe: "6-8 months",
    validity: "Permanent setup (claims within 1 year of starting production)"
  },
  {
    id: "telangana-state-schemes",
    title: "Telangana State (TG-iPASS / TG-DIC) Subsidies",
    category: "State Govt Schemes",
    subCategory: "State Incentives",
    description: "State industrial incentives and subsidies offered under the Telangana State Industrial Project Approval and Self-Certification System (TG-iPASS) and the T-IDEA scheme for MSMEs and food processing industries.",
    keyPoints: [
      "Capital investment subsidy of 15% (max INR 20 Lakhs) for MSMEs, and higher for SC/ST entrepreneurs (up to 35%, max INR 75 Lakhs).",
      "100% stamp duty reimbursement on purchase/lease of land.",
      "Power cost reimbursement at INR 1 per unit for 5 years.",
      "Interest subsidy (pavala vaddi) of 3% on term loans for MSMEs."
    ],
    documents: [
      "TG-iPASS approval certificate",
      "Detailed project financial records and bank term loan proof",
      "Land purchase deed or APIIC allotment papers",
      "Electricity supply connection proof and bills paid",
      "CA certificate for investment in plant & machinery"
    ],
    process: [
      "Secure clearances online using the TG-iPASS portal.",
      "Establish the manufacturing unit and start commercial production.",
      "Apply online on the TG-DIC portal under the T-IDEA scheme for specific incentives.",
      "Inspection by the General Manager of the District Industries Centre.",
      "Sanction of incentives by the State Level Committee (SLC) followed by release of funds."
    ],
    timeframe: "6-9 months",
    validity: "Claim must be filed within 1 year of starting commercial operations"
  },
  {
    id: "karnataka-state-schemes",
    title: "Karnataka State (KS-DIC / Suvarna Industrial Policy) Incentives",
    category: "State Govt Schemes",
    subCategory: "State Incentives",
    description: "Incentives and subsidies offered by the Department of Industries and Commerce, Government of Karnataka, under the Industrial Policy to promote manufacturing and food processing industries across different zones in the state.",
    keyPoints: [
      "Investment promotion subsidy of up to 45% of fixed assets (varies by zone - Zone 1 & 2 get higher subsidies).",
      "100% exemption from stamp duty on land acquisition.",
      "Concessional registration charges at the rate of 1%.",
      "Exemption from electricity tax for new industries for a period of 5 years."
    ],
    documents: [
      "Karnataka Udyog Mitra approval copy",
      "Detailed Project Cost and CA Audit Certificate",
      "Bank term loan appraisal and sanction details",
      "Land registry / KIADB allotment details",
      "Factory License and Pollution Control Board consent copy"
    ],
    process: [
      "Apply for project registration with Karnataka Udyog Mitra (KUM) / DIC.",
      "Acquire land and establish the manufacturing plant.",
      "Submit the incentive claim application on the DIC Karnataka online system.",
      "DIC joint inspection verifies the investments and operational status.",
      "Disbursement of the investment subsidy and tax exemptions."
    ],
    timeframe: "6-8 months",
    validity: "Claim within 12 months from starting commercial production"
  }
];
