export interface DGFTService {
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

export const dgftServicesData: DGFTService[] = [
  // SECTION 1: CERTIFICATIONS - Primary Certification
  {
    id: "rcmc-registration-certificate",
    title: "RCMC (Registration Cum Membership Certificate)",
    category: "Certifications",
    subCategory: "Primary Certification",
    description: "An official certificate issued by Export Promotion Councils (EPCs), Commodity Boards, or other export development authorities in India. Under the Foreign Trade Policy, an RCMC is mandatory for exporters seeking to claim benefits, duty drawbacks, duty exemptions, or tax concessions.",
    keyPoints: [
      "Mandatory for availing benefits under the Foreign Trade Policy (FTP).",
      "Confirms the exporter's legitimacy and aligns them with a specific Export Promotion Council (EPC).",
      "Enables participation in international trade fairs, buyer-seller meets, and market development programs.",
      "Required by customs and licensing authorities when processing export duty benefits."
    ],
    documents: [
      "Importer Exporter Code (IEC) certificate",
      "PAN Card of the company and directors/partners",
      "Certificate of Incorporation / Partnership Deed / MSME Registration",
      "Digital Signature Certificate (DSC)",
      "Bank Certificate or Cancelled Cheque from the exporter's bank account",
      "Product description, brochures, or raw material details"
    ],
    process: [
      "Identify the correct Export Promotion Council (EPC) based on the primary export product range (e.g., APEDA for agri products, Texprocil for textiles, etc.).",
      "Register on the common DGFT portal and login with the user credentials.",
      "Fill out the online application form with details of the firm, promoters, and product categories.",
      "Upload the required documents and pay the corresponding council membership fees.",
      "The council reviews the application and issues the digitally signed RCMC upon successful validation."
    ],
    timeframe: "7-10 working days",
    validity: "5 years (requires annual membership renewal)"
  },
  {
    id: "iec-importer-exporter-code",
    title: "IEC (Importer Exporter Code)",
    category: "Certifications",
    subCategory: "Primary Certification",
    description: "A primary registration code consisting of a 10-digit number (currently linked to the PAN of the entity) issued by the Directorate General of Foreign Trade (DGFT). An IEC is a pre-requisite for importing goods into or exporting goods out of India.",
    keyPoints: [
      "Prerequisite for anyone planning to start an import-export business in India.",
      "Customs authorities require the IEC for clearing import or export shipments.",
      "Authorized dealer banks demand the IEC to process outward or inward foreign currency remittances.",
      "No compliance returns are required, but annual updating of the profile on the DGFT portal is mandatory."
    ],
    documents: [
      "PAN Card of the individual, firm, or company",
      "Aadhaar Card, Passport, or Voter ID of the applicant/promoter",
      "Cancelled cheque or Bank Certificate showing account number and account holder name",
      "Proof of address of the business (Rent Agreement, electricity bill, or property tax receipt)"
    ],
    process: [
      "Navigate to the DGFT website and click on 'Apply for IEC'.",
      "Register an account with email and mobile number using Aadhaar OTP verification.",
      "Complete the online application form (ANF 2A) and link it with the company PAN.",
      "Upload digital copies of bank proof and address proof.",
      "Pay the government application fee online.",
      "Submit the application; the system automatically processes and issues the e-IEC instantly in most cases."
    ],
    timeframe: "1-2 working days (instant approval in modern system)",
    validity: "Lifetime (subject to annual profile update between April and June)"
  },
  {
    id: "digital-signature",
    title: "DSC (Digital Signature Certificate) for DGFT",
    category: "Certifications",
    subCategory: "Primary Certification",
    description: "A digital equivalent of a physical signature, used to authenticate electronic documents filed on the DGFT portal. For DGFT transactions, a Class 3 Digital Signature Certificate (often linked to the IEC) is required to ensure secure online filings.",
    keyPoints: [
      "Class 3 Digital Signature (DSC) is mandatory for signing all applications on the DGFT portal.",
      "A special 'IEC-linked' DSC is recommended for companies to map their specific IEC with authorized signatories.",
      "Ensures the authenticity, integrity, and non-repudiation of transactions done on the government website.",
      "Protects against unauthorized modifications of license applications."
    ],
    documents: [
      "Aadhaar Card / Voter ID of the applicant",
      "PAN Card of the applicant",
      "GST registration certificate of the firm",
      "Authorization letter from the company/firm in favor of the signatory",
      "Passport size photo of the applicant"
    ],
    process: [
      "Select a licensed Certifying Authority (CA) in India to issue the Class 3 DSC.",
      "Submit the online application form along with identity and address documents.",
      "Complete video verification and mobile OTP validation as mandated by the CA.",
      "Download the certificate onto a secure FIPS-compliant cryptographic USB token.",
      "Configure the token on the user's PC and register the DSC on the DGFT profile."
    ],
    timeframe: "1 working day",
    validity: "1, 2, or 3 years (needs renewal before expiration)"
  },
  {
    id: "certificate-of-origin",
    title: "Certificate of Origin (CoO)",
    category: "Certifications",
    subCategory: "Primary Certification",
    description: "An important international trade document certifying that the goods in a particular export shipment are wholly obtained, produced, manufactured, or processed in a particular country. CoO can be Non-Preferential or Preferential (for availing lower import tariffs under Trade Agreements).",
    keyPoints: [
      "Required by the buyer's country customs to determine tariff concessions under Free Trade Agreements (FTAs).",
      "Preferential CoO allows the importer to pay lower or zero customs duty.",
      "Non-Preferential CoO confirms the origin country without offering tariff concessions.",
      "Issued through the DGFT's Common Digital Platform for Certificate of Origin."
    ],
    documents: [
      "Commercial Invoice and Packing List",
      "Shipping Bill / Bill of Lading / Airway Bill",
      "Manufacturer's invoice or declaration showing origin of raw materials",
      "RCMC certificate of the exporter",
      "Purchase Order copy"
    ],
    process: [
      "Log in to the DGFT Common Digital Platform for CoO using the credentials.",
      "Select the type of CoO requested (Preferential under a specific FTA/PTA, or Non-Preferential).",
      "Fill out the application with shipment details, invoice value, HS code, and origin criteria.",
      "Upload the commercial invoice, packing list, and shipping documents.",
      "Pay the prescribed certification fee online.",
      "The designated agency (e.g., EIA, FIEO, Spices Board) verifies the data and issues the CoO online."
    ],
    timeframe: "1-2 working days",
    validity: "Specific to each export shipment"
  },

  // SECTION 2: CERTIFICATIONS - Other Certificates
  {
    id: "status-export-house-certificate",
    title: "Status Holder Certificate (Export House)",
    category: "Certifications",
    subCategory: "Other Certificates",
    description: "A recognition certificate granted by the DGFT to business entities that have achieved a specified level of export performance in the current and previous three financial years. Recognized firms are categorized as One Star to Five Star Export Houses.",
    keyPoints: [
      "Status categorized from 1-Star (USD 3M export) to 5-Star (USD 800M export) based on FOB value.",
      "Provides privileges like self-declaration of input-output norms and priority customs clearance.",
      "Entitles the holder to exemption from submitting bank guarantees for several DGFT schemes.",
      "Allows the firm to establish export warehouses in overseas markets."
    ],
    documents: [
      "IEC Certificate",
      "RCMC copy",
      "Chartered Accountant (CA) certified statement of export performance (FOB/FOR value) for the relevant years",
      "Copy of Shipping Bills and Bank Realization Certificates (eBRC / IRM)",
      "PAN Card and constitutional documents"
    ],
    process: [
      "Prepare a detailed year-wise export performance statement based on realized export earnings.",
      "Get the statement certified by an independent Chartered Accountant (CA).",
      "Apply online on the DGFT portal using ANF 3A format.",
      "Submit the application with details of export performance and the CA certificate.",
      "DGFT regional offices verify the shipping data and issue the Status Holder Certificate online."
    ],
    timeframe: "15-20 working days",
    validity: "5 years or till the current Foreign Trade Policy is active"
  },
  {
    id: "free-sale-certificate",
    title: "Free Sale Certificate",
    category: "Certifications",
    subCategory: "Other Certificates",
    description: "A certificate issued by the DGFT to manufacturers or exporters of medical devices, cosmetics, food items, or other consumer goods. It certifies that the goods are freely sold in the domestic market of India and are safe for use, facilitating imports in foreign countries.",
    keyPoints: [
      "Required by importing country authorities to verify the safety and compliance of the product in its home country.",
      "Issued for products that do not fall under the purview of other specialized regulators (like CDSCO or FSSAI).",
      "Enhances export acceptability in developing and developed nations.",
      "Saves time during product registration procedures in overseas markets."
    ],
    documents: [
      "IEC certificate",
      "Manufacturing License issued by State/Central authority",
      "Product brochure, technical specifications, and labels",
      "Purchase invoices showing domestic sale of the products",
      "Declaration by the manufacturer regarding quality standards (ISO/GMP)"
    ],
    process: [
      "Prepare a list of products for which the Free Sale Certificate is required along with their HS codes.",
      "Apply online on the DGFT portal under the 'Services' menu.",
      "Provide details of manufacturing licenses and domestic sales figures.",
      "Upload copy of manufacturing license and proof of domestic sales.",
      "Pay the processing fee and submit the application for review by the Regional Authority (RA) of DGFT."
    ],
    timeframe: "10-15 working days",
    validity: "2 years or co-terminus with the manufacturing license"
  },
  {
    id: "rex",
    title: "REX (Registered Exporter System) Registration",
    category: "Certifications",
    subCategory: "Other Certificates",
    description: "A system of certification of origin of goods introduced by the European Union for GSP (Generalised System of Preferences) countries. Under the REX system, registered exporters can self-certify the origin of their goods by making a 'statement on origin' on commercial documents.",
    keyPoints: [
      "Replaces the traditional Form-A Certificate of Origin for exports to the EU, Switzerland, and Norway.",
      "Exporters can self-certify origin, reducing administrative steps for every shipment.",
      "Mandatory for export shipments exceeding EUR 6,000 to GSP countries.",
      "Ensures smooth customs clearance in the destination European countries."
    ],
    documents: [
      "IEC Certificate and PAN Card",
      "RCMC Certificate copy",
      "Manufacturing details and cost breakdown of the export product",
      "Technical details showing raw material origin (for GSP compliance)",
      "Authority letter for the authorized signatory"
    ],
    process: [
      "Pre-register on the European Commission's REX portal and print the application.",
      "Log in to the DGFT portal (or apply through local competent authorities like EPC/EIA).",
      "Submit the printed pre-registration form and required documentation to the nominated local agency in India.",
      "The agency reviews the origin compliance of the goods.",
      "Upon approval, a unique REX registration number is issued to the exporter, which must be quoted on invoices."
    ],
    timeframe: "5-7 working days",
    validity: "Lifetime (provided the exporter continues to export and complies with GSP rules)"
  },

  // SECTION 3: CERTIFICATIONS - Monitoring System
  {
    id: "chip-import-monitoring-system",
    title: "CHIMS (Chip Import Monitoring System)",
    category: "Certifications",
    subCategory: "Monitoring System",
    description: "A mandatory online registration mechanism established by the Ministry of Electronics and Information Technology (MeitY) and DGFT. Importers of specific integrated circuits (ICs) must register on this portal and obtain an import registration number before importing.",
    keyPoints: [
      "Mandatory for specific electronic items falling under Chapter 85 of ITC (HS).",
      "Helps the government monitor chip imports and design policy interventions.",
      "Registration must be done not earlier than 60 days and not later than 15 days before the expected arrival of import shipment.",
      "The registration number must be entered in the Bill of Entry at Customs."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Proforma Invoice or Commercial Invoice",
      "Product description, technical specifications, and part numbers",
      "Country of origin certificate details",
      "Port of entry and expected shipment arrival date"
    ],
    process: [
      "Access the CHIMS online portal through the DGFT website.",
      "Enter the invoice details, item description, unit price, quantity, and country of origin.",
      "Pay the registration fee based on the CIF value of the import shipment.",
      "A unique Registration Number is generated immediately upon payment.",
      "Provide this CHIMS registration number to the customs broker to include in the Bill of Entry."
    ],
    timeframe: "Instant generation (Online process)",
    validity: "75 days from the date of registration"
  },
  {
    id: "steel-import-monitoring-system",
    title: "SIMS (Steel Import Monitoring System)",
    category: "Certifications",
    subCategory: "Monitoring System",
    description: "A mandatory import registration system introduced by the Ministry of Steel and DGFT. Importers of specific steel products (under Chapters 72 and 73 of ITC HS) must provide advance information on imports to generate a unique registration number.",
    keyPoints: [
      "Applies to major steel product imports like sheets, pipes, wire rods, and structural steel.",
      "Ensures the government collects detailed statistics on the grade and quantity of steel entering the country.",
      "Helps prevent dumping and check trade compliance.",
      "Registration number needs to be generated in advance before filing the Bill of Entry."
    ],
    documents: [
      "IEC and PAN Card",
      "Purchase Contract, Commercial Invoice, or Proforma Invoice",
      "Details of Steel Grade, Specification, Width, Thickness, and Manufacturer name",
      "Expected port of arrival and expected arrival date"
    ],
    process: [
      "Log in to the SIMS portal on the DGFT website.",
      "Submit the application form with invoice value, steel grade, chemistry, and weight specifications.",
      "Pay the registration fee (calculated on the CIF value, subject to minimum and maximum caps).",
      "The system instantly generates a SIMS Registration Number.",
      "Cite this number during the customs clearance process."
    ],
    timeframe: "Instant generation (Online process)",
    validity: "75 days from the date of registration"
  },
  {
    id: "pims",
    title: "PIMS (Paper Import Monitoring System)",
    category: "Certifications",
    subCategory: "Monitoring System",
    description: "A mandatory online registration system introduced by the Ministry of Commerce and Industry for paper and paperboard imports. Importers of specific paper products must obtain a registration number prior to the shipment arrival.",
    keyPoints: [
      "Applies to newsprint, handmade paper, wallpaper, writing paper, and packaging paperboard (Chapter 48).",
      "Aims to curb under-invoicing, dumping of cheap paper, and misdeclaration of origin.",
      "Online registration is simple and requires basic shipment invoice details.",
      "Requires fee payment of a small fixed government fee."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Commercial Invoice or Proforma Invoice from overseas exporter",
      "Paper Grade name, GSM (grams per square meter), and raw material type",
      "Arrival date and port of discharge details"
    ],
    process: [
      "Log in to the PIMS online module on the DGFT portal.",
      "Enter item details, GSM, quantity, and unit rate as per invoice.",
      "Pay the online registration fee.",
      "The system immediately generates a PIMS registration code.",
      "Enter this registration number in the Bill of Entry before custom clearance."
    ],
    timeframe: "Instant generation (Online process)",
    validity: "75 days from the date of registration"
  },
  {
    id: "non-ferrous-metals-import-monitoring-system",
    title: "NFMIMS (Non-Ferrous Metals Import Monitoring System)",
    category: "Certifications",
    subCategory: "Monitoring System",
    description: "A monitoring platform established by the Ministry of Mines and DGFT. It requires importers of major non-ferrous metals like Copper and Aluminium (under Chapters 74 and 76 of ITC HS) to register details of imports in advance.",
    keyPoints: [
      "Mandatory for imports of refined copper, alloy copper, copper scrap, and aluminium products.",
      "Gives government agencies insights into raw material import patterns.",
      "Helps detect unauthorized routing of non-ferrous metal scraps.",
      "Required to be quoted on the customs documentation."
    ],
    documents: [
      "IEC and PAN Card",
      "Commercial Invoice/Proforma Invoice",
      "Alloy composition, chemical report of the metal, and scrap certificate (if scrap)",
      "Import country, origin facility, and port of arrival"
    ],
    process: [
      "Open the NFMIMS module online via DGFT portal.",
      "Enter technical parameters of the metal, invoice numbers, values, and weight.",
      "Pay the registration processing fee.",
      "Receive the NFMIMS registration number online.",
      "Quote the registration code in the customs Bill of Entry."
    ],
    timeframe: "Instant generation (Online process)",
    validity: "75 days from the date of registration"
  },
  {
    id: "coal-import-monitoring-system",
    title: "CIMS (Coal Import Monitoring System)",
    category: "Certifications",
    subCategory: "Monitoring System",
    description: "A mandatory import registration scheme implemented by the Ministry of Coal and DGFT. Importers of Anthracite, Bituminous, Coking Coal, and Steam Coal must submit advance details of coal shipments to get a unique registration code.",
    keyPoints: [
      "Applies to all varieties of coal imports (under Chapter 27 of ITC HS).",
      "Collects data on coal grade, ash content, sulphur content, and calorific value.",
      "Helps monitor domestic coal demand and substitute imports.",
      "Registration number must be generated and presented during customs clearance."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Proforma Invoice or Commercial Invoice",
      "Technical analysis report of the coal showing Ash %, Sulphur %, and GCV (Gross Calorific Value)",
      "Origin mine name and country of origin",
      "Vessel name and expected arrival date"
    ],
    process: [
      "Access the CIMS portal on the DGFT system.",
      "Complete the form stating coal technical specifications, quantities, and prices.",
      "Pay the fixed registration fee.",
      "Download the generated CIMS registration slip containing the unique number.",
      "Mention this code on the Bill of Entry for custom clearance."
    ],
    timeframe: "Instant generation (Online process)",
    validity: "75 days from the date of registration"
  },

  // SECTION 4: DUTY EXEMPTION - Advance Authorisation Scheme & Sub-items
  {
    id: "advance-authorisation-scheme",
    title: "Advance Authorisation Scheme (AAS)",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "A scheme under the Foreign Trade Policy that allows the duty-free import of inputs (raw materials, components, catalysts, packing materials) physically incorporated in the export product. A minimum of 15% value addition is required to qualify for this duty-free import.",
    keyPoints: [
      "Saves working capital by exempting basic customs duty, IGST, and compensation cess on imports.",
      "Subject to export obligation (EO) – exporters must export the finished product within a specific timeframe.",
      "Exemption is available based on pre-defined Standard Input-Output Norms (SION) or ad-hoc norms.",
      "Highly beneficial for manufacturing exporters and merchant exporters associated with supporting manufacturers."
    ],
    documents: [
      "IEC Certificate and RCMC copy",
      "PAN Card and GSTIN",
      "Technical specifications of inputs and output products",
      "Chartered Engineer certificate showing raw material consumption (if SION is not fixed)",
      "Export Orders or Proforma Invoice from buyers"
    ],
    process: [
      "Determine if the product falls under SION; if not, prepare an ad-hoc norms application.",
      "File an application online on the DGFT portal in the AAS module using form ANF 4A.",
      "Provide details of input materials to be imported and export products to be exported.",
      "Pay the application processing fee.",
      "DGFT Regional Authority reviews the application and issues the Advance Licence.",
      "Register the license at the customs port of import to clear raw materials duty-free."
    ],
    timeframe: "15-20 working days",
    validity: "12 months for importing inputs; 18 months for fulfilling export obligations"
  },
  {
    id: "advance-authorisation-sion",
    title: "Standard Input Output Norms (SION)",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "Standard norms established by the DGFT Norms Committee that prescribe the standard quantities of inputs required for manufacturing a unit of export product. When an exporter applies under SION, they do not need to prove the exact consumption ratio of raw materials.",
    keyPoints: [
      "SION simplifies the license application process under the Advance Authorisation scheme.",
      "Pre-established norm packages exist for thousands of products across chemical, textile, food, plastic, and engineering sectors.",
      "No technical evaluation or consumption audits by the government are required for SION cases.",
      "Eliminates the requirement of obtaining individual Chartered Engineer certificates."
    ],
    documents: [
      "IEC Certificate",
      "SION reference number corresponding to the specific export product",
      "Technical sheets showing matching description of export and import items",
      "Export contract details"
    ],
    process: [
      "Search the SION directory on the DGFT database using the export product name or HS code.",
      "Select the appropriate SION code that matches your manufacturing process.",
      "Apply for Advance Authorisation online, selecting the 'SION-based application' option.",
      "Enter the quantities based on the pre-set SION ratio.",
      "The system automatically validates and flags the application for quick approval."
    ],
    timeframe: "5-7 working days",
    validity: "Subject to the validity of the parent Advance Licence"
  },
  {
    id: "advance-authorisation-self-declaration",
    title: "Advance Authorisation under Self Declaration",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "An application route under the Advance Authorisation Scheme used when there are no pre-established SION norms for the export product. Exporters declare the input consumption norms themselves on a self-declaration basis, subject to ratification by the Norms Committee.",
    keyPoints: [
      "Allows duty-free imports even for unique, new, or customized export products.",
      "Exporters must declare realistic input requirements based on manufacturing reality.",
      "The declared norms are reviewed and ratified/modified later by the DGFT Norms Committee.",
      "Required to submit technical justifications and flowcharts."
    ],
    documents: [
      "IEC Certificate",
      "Chartered Engineer certificate certifying the input-output ratio",
      "Manufacturing flowchart and detailed description of the production process",
      "Technical datasheets of raw materials and final product",
      "Test reports or laboratory analysis copy (if applicable)"
    ],
    process: [
      "Select the 'Self Declaration' route during the online Advance Authorisation application.",
      "Fill out the input requirements along with chemical/technical descriptions.",
      "Upload the Chartered Engineer's certificate confirming the input requirements.",
      "The license is issued, allowing duty-free imports. Simultaneously, the application is forwarded to the Norms Committee.",
      "Provide clarifications to the Norms Committee if they ask for details during ratification."
    ],
    timeframe: "10-15 working days for license; 3-6 months for Norms Committee ratification",
    validity: "Imports are allowed for 12 months; output is subject to committee's final ratified quantity"
  },
  {
    id: "advance-authorisation-self-ratification",
    title: "Advance Authorisation under Self Ratification Scheme",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "A fast-track facility under the Advance Authorisation Scheme for Authorized Economic Operators (AEO) or specific Status Holders. It allows them to get input-output norms ratified automatically without sending the application to the Norms Committee.",
    keyPoints: [
      "Exempts the exporter from the long waiting period of Norms Committee reviews.",
      "Available only to manufacturers who hold status holder certificates (2-Star or higher) and AEO status.",
      "Builds on high levels of trust and past audit compliance.",
      "Subject to subsequent audit and post-verification checks by the customs and DGFT."
    ],
    documents: [
      "AEO Certificate / Status Holder Certificate",
      "Self-ratification scheme declaration form",
      "Chartered Engineer Certificate verifying input consumption",
      "Audit trail declaration and detailed material accounting ledger format"
    ],
    process: [
      "Verify eligibility criteria (AEO Status and export performance).",
      "Select 'Self Ratification Scheme' on the online DGFT application portal.",
      "Declare the input-output norms and submit the Chartered Engineer certificate.",
      "The license is generated automatically without being routed to the Norms Committee.",
      "Maintain detailed stock ledgers for post-import audits."
    ],
    timeframe: "3-5 working days",
    validity: "12 months for imports; 18 months for export obligation"
  },
  {
    id: "advance-authorisation-net-to-net",
    title: "Advance Authorisation on Net-to-Net Basis",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "A specific sub-scheme under the Advance Authorisation scheme applicable to inputs where there is no wastage allowed in the manufacturing process. The quantity of input imported must exactly match the quantity of input embedded in the export product.",
    keyPoints: [
      "Applies typically to high-value items, precious metals, or specific industrial films/resins.",
      "Zero wastage allowance is calculated into the input-output norms.",
      "Requires strict accountability of materials during manufacturing audits.",
      "Often used in jewellery exports or highly specialized electronics."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Detailed specifications of wastage parameters",
      "Manufacturing flowchart showing why no wastage occurs or how scrap is recycled",
      "Chartered Engineer endorsement"
    ],
    process: [
      "File an online application under the Advance Authorisation scheme.",
      "Specify in the norm description that the application is on a 'Net-to-Net' basis.",
      "Upload the technical details justifying zero wastage.",
      "DGFT RA issues the license with zero wastage condition.",
      "Ensure that no wastage claims are entered in the EODC application."
    ],
    timeframe: "10-15 working days",
    validity: "Imports: 12 months; Export obligation: 18 months"
  },
  {
    id: "advance-authorisation-repeat-basis",
    title: "Advance Authorisation on Repeat Basis",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "A simplified licensing path where an exporter applies for an Advance Authorisation license based on the input-output norms that were already ratified by the DGFT Norms Committee for their own previous license.",
    keyPoints: [
      "Saves time by utilizing pre-approved custom norms instead of starting a new ratification.",
      "Only applicable if the previous license was ratified within the last few years and the products are identical.",
      "Prevents repeated technical reviews of the same manufacturing process.",
      "Helps companies with continuous manufacturing of customized orders."
    ],
    documents: [
      "Reference number and copy of the previously ratified Advance Licence",
      "Norms Committee ratification letter copy",
      "Declaration confirming that raw materials and manufacturing process remain unchanged",
      "Invoice and export order details"
    ],
    process: [
      "Log in to the DGFT portal and choose 'Repeat Basis' for Advance Authorisation.",
      "Input the previous license number and the Norms Committee case file reference.",
      "The system automatically retrieves the approved norms.",
      "Submit the application and pay the fee.",
      "The RA reviews and issues the license based on the duplicate norms without committee referral."
    ],
    timeframe: "5-7 working days",
    validity: "Imports: 12 months; Export obligation: 18 months"
  },
  {
    id: "advance-authorisation-packing-material",
    title: "Advance Authorisation for Packing Materials",
    category: "Duty Exemption",
    subCategory: "Advance Authorisation",
    description: "A specific allowance under the Advance Authorisation scheme that permits exporters to import duty-free packing materials (like cartons, drums, bottles, customized boxes, and labels) required for exporting the final product.",
    keyPoints: [
      "Covers specialized import packaging required by international clients.",
      "Exempts basic customs duty and IGST on imported packing material.",
      "Export product must be packaged in these imported materials during export.",
      "Subject to actual user condition."
    ],
    documents: [
      "IEC Certificate and RCMC",
      "Details of packaging requirements specified in the export order",
      "Chartered Engineer certificate validating packing material quantity",
      "Sample artwork/layout or packing specifications"
    ],
    process: [
      "Submit the online Advance Authorisation application specifically requesting duty-free import of packing materials.",
      "Define the link between the export item and the required packaging.",
      "Upload details showing quantity and material type.",
      "Obtain the license and clear the packing items at customs without duty payment.",
      "Fulfill the export obligation by exporting the items packed in the imported materials."
    ],
    timeframe: "10-12 working days",
    validity: "Imports: 12 months; Export obligation: 18 months"
  },

  // SECTION 5: DUTY EXEMPTION - Compliance
  {
    id: "advance-authorisation-eo-extension",
    title: "Export Obligation (EO) Extension under AAS",
    category: "Duty Exemption",
    subCategory: "Compliance",
    description: "An administrative procedure to extend the timeframe allowed for fulfilling the Export Obligation under an Advance Authorisation. Exporters who cannot complete the export requirements within the standard 18 months can request an extension subject to payment of composition fees.",
    keyPoints: [
      "Prevents the exporter from being declared a defaulter when exports are delayed.",
      "Extensions are granted under genuine business difficulties (e.g., shipping delays, order cancellations).",
      "Requires payment of a composition fee calculated on the unfulfilled duty-saved amount.",
      "Typically granted for 6 months to 1 year, subject to policy guidelines."
    ],
    documents: [
      "Copy of the original Advance Licence and amendment sheets",
      "Statement of unfulfilled export obligation verified by a CA",
      "Justification letter explaining the reasons for the export delays",
      "Challan of composition fee payment"
    ],
    process: [
      "File an online application for EO Extension on the DGFT portal prior to the expiration of the standard EO period.",
      "Specify the unfulfilled duty amount and calculation of the composition fee.",
      "Upload unfulfilled statement and the justification letter.",
      "Pay the composition fee online.",
      "DGFT RA reviews the case and issues an online amendment extending the EO period."
    ],
    timeframe: "10-15 working days",
    validity: "Extensions are typically granted for 6 months (first extension) or as per policy amendments"
  },
  {
    id: "advance-authorisation-eodc",
    title: "AAS EODC / Closure / Surrender",
    category: "Duty Exemption",
    subCategory: "Compliance",
    description: "The final compliance step for an Advance Authorisation. Exporters must submit proof of fulfillment of their Export Obligation (EO) to obtain an Export Obligation Discharge Certificate (EODC). If they failed to fulfill the EO, they must surrender the license and pay the saved duty along with interest.",
    keyPoints: [
      "EODC is essential to release bank guarantees and close customs bonds.",
      "Validates that the duty-free raw materials were fully utilized for export manufacturing.",
      "Failure to obtain EODC leads to penal action, listing in the Denied Entity List (DEL), and heavy penalties.",
      "Surrender process allows voluntary disclosure and payment of duty with interest to avoid prosecution."
    ],
    documents: [
      "Original Advance Licence with endorsement pages",
      "Shipping Bills containing details of export items and the Licence number",
      "eBRC (Electronic Bank Realisation Certificate) or IRM showing payments received",
      "ANF 4F form showing the input-output consumption details verified by a CA",
      "Customs bill of entry for the imported materials"
    ],
    process: [
      "Compile all Shipping Bills and link them to the Advance Licence on the DGFT portal.",
      "Ensure eBRCs are updated by the bank for all shipping bills.",
      "Prepare the ANF 4F statement and get it audited and signed by a Chartered Accountant.",
      "Apply online for redemption/EODC on the DGFT website.",
      "Upload all export proof and submit. The RA verifies the details and issues the EODC online."
    ],
    timeframe: "25-30 working days",
    validity: "Permanent closure of the specific license case"
  },

  // SECTION 6: EPCG & INCENTIVES - Fresh EPCG & Compliance
  {
    id: "epcg-scheme",
    title: "EPCG (Export Promotion Capital Goods) Scheme",
    category: "EPCG & Incentives",
    subCategory: "Fresh EPCG",
    description: "A scheme designed to facilitate import of capital goods (machinery, equipment, tools, spares) for pre-production, production, and post-production at zero customs duty. This is subject to an export obligation equivalent to 6 times of duty saved on capital goods, to be fulfilled in 6 years.",
    keyPoints: [
      "Enables manufacturers to import modern, high-value machinery without paying customs duty.",
      "Helps improve product quality and competitiveness in global markets.",
      "The Export Obligation (EO) is in addition to the average export level achieved by the firm in preceding years.",
      "Available to manufacturers, service providers, and merchant exporters with supporting manufacturers."
    ],
    documents: [
      "IEC Certificate and RCMC Certificate",
      "PAN Card and GST Registration",
      "Chartered Engineer certificate validating the machinery requirements and capacity",
      "Proforma Invoice or purchase contract of the machinery",
      "Details of average export performance for the last 3 years"
    ],
    process: [
      "Select the machinery and obtain technical proforma invoice showing duty structure.",
      "Get a Chartered Engineer certificate certifying the requirement of capital goods in the production process.",
      "Calculate the average export obligation based on the past 3 years' export records.",
      "Apply online on the DGFT website in form ANF 5A and pay the application fee.",
      "The RA reviews and issues the EPCG Authorisation.",
      "Register the license at the port of import to clear machinery at zero duty."
    ],
    timeframe: "15-20 working days",
    validity: "Capital goods must be imported within 12 months; Export Obligation must be met in 6 years"
  },
  {
    id: "epcg-direct-import",
    title: "EPCG Direct Import of Capital Goods",
    category: "EPCG & Incentives",
    subCategory: "Fresh EPCG",
    description: "The standard process of importing machinery directly from an overseas supplier using the EPCG license, allowing the importer to clear the capital goods from Indian customs with zero duty payment.",
    keyPoints: [
      "Covers direct shipment from foreign manufacturers/suppliers to Indian ports.",
      "Exempts basic customs duty, IGST, and cess at the time of import.",
      "Customs bond is registered against the EPCG license at the port of discharge.",
      "Actual user condition applies – machinery must be installed in the factory premises listed on the license."
    ],
    documents: [
      "Copy of EPCG Licence",
      "Bill of Lading / Airway Bill",
      "Commercial Invoice and Packing List from the foreign vendor",
      "Customs port registration letter copy",
      "Factory registration proof for installation verification"
    ],
    process: [
      "Register the EPCG license at the designated port of customs registration.",
      "Ensure the foreign supplier ships the machinery matching the description in the license.",
      "File the Bill of Entry quoting the EPCG license number.",
      "Customs verifies and allows zero duty clearance.",
      "Install the machine and submit the Installation Certificate within 6 months of import to the DGFT RA."
    ],
    timeframe: "5-7 working days for port registration; import clearance depends on shipping",
    validity: "Imports must occur within 12 months from the license issue date"
  },
  {
    id: "epcg-indian-purchase",
    title: "Domestic Sourcing of Capital Goods under EPCG",
    category: "EPCG & Incentives",
    subCategory: "Fresh EPCG",
    description: "An alternative option under the EPCG scheme where instead of importing machinery from abroad, the license holder sources the capital goods from an Indian manufacturer. The domestic manufacturer receives benefits like Deemed Exports.",
    keyPoints: [
      "Promotes local manufacturing under 'Make in India' initiative.",
      "The export obligation under domestic purchase is reduced by 25% (i.e., 4.5 times the duty saved instead of 6 times).",
      "Eliminates foreign exchange risk and reduces international logistics cost.",
      "Requires invalidation of the import license and generation of an Inland LC / ARO."
    ],
    documents: [
      "EPCG Authorisation copy",
      "Invalidation application form",
      "Purchase contract with the domestic machinery manufacturer",
      "CA/Chartered Engineer certificate matching local specifications"
    ],
    process: [
      "Apply for the invalidation of the import option of the EPCG license on the DGFT portal.",
      "Obtain the Invalidation Letter and Advance Release Order (ARO) / Inland Letter of Credit.",
      "Supply the invalidation letter to the domestic manufacturer.",
      "The domestic manufacturer supplies the capital goods without charging GST / excise duties.",
      "Obtain the domestic installation certificate and submit it to the DGFT."
    ],
    timeframe: "10-15 working days",
    validity: "Must be sourced within the validity period of the EPCG license (12 months)"
  },
  {
    id: "epcg-spares-import",
    title: "Import of Spares and Accessories under EPCG",
    category: "EPCG & Incentives",
    subCategory: "Fresh EPCG",
    description: "An allowance under the EPCG scheme that permits the duty-free import of spare parts, accessories, components, and refractory materials required for the maintenance and operation of existing machinery.",
    keyPoints: [
      "Helps factories maintain imported capital goods without high operational costs.",
      "Spares can be imported for machinery that was imported under EPCG or even standard route.",
      "The export obligation is calculated based on the duty saved on the spare parts.",
      "Subject to actual user condition at the specified factory."
    ],
    documents: [
      "EPCG Licence copy with spares description",
      "Chartered Engineer certificate confirming the need for the spares",
      "Proforma invoice of the spares",
      "Details of the main machine (serial number, make, model)"
    ],
    process: [
      "File an online application for EPCG spares detailing the specific parts and the parent machinery.",
      "Upload the Chartered Engineer's recommendation.",
      "Pay the processing fee and obtain the spares licence.",
      "Clear the spares at customs duty-free.",
      "Provide installation certificates within 6 months."
    ],
    timeframe: "10-12 working days",
    validity: "Imports allowed within 12 months; EO tenure matches the parent scheme"
  },
  {
    id: "epcg-extension",
    title: "EPCG Export Obligation (EO) Extension",
    category: "EPCG & Incentives",
    subCategory: "EPCG Compliance",
    description: "An administrative process to extend the 6-year period for fulfilling the Export Obligation under the EPCG scheme. If an exporter cannot meet the EO due to market downturns, they can apply for an extension upon paying a composition fee.",
    keyPoints: [
      "Avoids legal actions, customs penalties, and blacklisting.",
      "Extension is usually granted for a maximum of 2 years (either block-wise or total).",
      "Composition fee is calculated as a percentage of the unfulfilled duty-saved amount.",
      "Must be applied before the expiry of the original 6-year EO period."
    ],
    documents: [
      "Original EPCG license and amendment sheets",
      "Year-wise export performance statement showing unfulfilled EO certified by a CA",
      "Detailed justification letter for delay in EO fulfillment",
      "Proof of payment of composition fees"
    ],
    process: [
      "Prepare a CA-verified statement showing progress of EO fulfillment.",
      "File the online application for EPCG EO Extension on the DGFT portal.",
      "Submit the justification and upload the CA certificate.",
      "Pay the composition fee online.",
      "DGFT RA verifies the application and issues the EO Extension letter."
    ],
    timeframe: "15-20 working days",
    validity: "Usually extends the EO period by 1 or 2 years"
  },
  {
    id: "epcg-closure",
    title: "EPCG License Closure / Redemption",
    category: "EPCG & Incentives",
    subCategory: "EPCG Compliance",
    description: "The final step in the life cycle of an EPCG license. Once the exporter has successfully fulfilled the Export Obligation (both specific and average), they must submit detailed records to the DGFT RA to obtain a Redemption Letter, which releases their customs liability.",
    keyPoints: [
      "Closes the customs bond and bank guarantee registered at the port.",
      "Requires verification of both Specific Export Obligation (6x duty saved) and Average Export Obligation.",
      "Strict monitoring: if average export levels drop, the closure is rejected.",
      "Provides relief from any future audit liabilities regarding the imported machinery."
    ],
    documents: [
      "Original EPCG Licence copy",
      "Installation Certificate of the machinery",
      "Shipping bills and eBRCs for all exports linked to the license",
      "ANF 5B form showing the export performance and calculations certified by a CA",
      "Bill of entry copy showing details of imports"
    ],
    process: [
      "Compile all shipping bills and verify that eBRCs are updated.",
      "Calculate the average exports of the last 3 years and compare them to the actual exports during the 6-year block.",
      "Complete the ANF 5B and get it certified by a Chartered Accountant.",
      "Apply online for redemption on the DGFT portal.",
      "RA scrutinizes the records, validates the average maintenance, and issues the Redemption Letter."
    ],
    timeframe: "30-45 working days",
    validity: "Permanent closure of the EPCG license"
  },

  // SECTION 7: EPCG & INCENTIVES - Duty Remission
  {
    id: "RoDTEP-scheme",
    title: "RoDTEP (Remission of Duties and Taxes on Exported Products)",
    category: "EPCG & Incentives",
    subCategory: "Duty Remission",
    description: "A flagship incentive scheme that replaces the MEIS scheme. RoDTEP refunds exporters the embedded central, state, and local duties/taxes paid on inputs (such as electricity duty, VAT on fuel, mandi tax, stamp duty) that are not refunded under other existing schemes.",
    keyPoints: [
      "Refund is issued as a transferable duty credit scrip (e-scrip).",
      "Scrips can be used to pay basic customs duties on imports or sold in the open market.",
      "Rate of rebate ranges from 0.5% to 4.3% of the FOB value of exports, depending on the product HS code.",
      "Completely aligned with WTO guidelines to make Indian exports zero-rated."
    ],
    documents: [
      "IEC Certificate and RCMC",
      "Shipping bills with RoDTEP declaration ('Y' flag on the ICEGATE portal)",
      "Commercial invoices and bank realization details",
      "ICEGATE registration login details"
    ],
    process: [
      "Exporters must declare their intent to claim RoDTEP for each item on the shipping bill at the time of export.",
      "After the shipping bill is processed, a RoDTEP scroll is generated on the ICEGATE portal.",
      "Log in to ICEGATE and create an e-scrip ledger.",
      "Generate the RoDTEP scrips from the scrolls.",
      "Use these scrips for your own imports or transfer them to another importer online."
    ],
    timeframe: "1-2 working days to generate scrips after scroll creation",
    validity: "e-Scrip is valid for 2 years from the date of generation"
  },
  {
    id: "Duty-Drawback",
    title: "Duty Drawback (DBK) Scheme",
    category: "EPCG & Incentives",
    subCategory: "Duty Remission",
    description: "A scheme administered by the Department of Revenue (Customs) under which customs duties paid on imported raw materials or excise duties paid on domestic inputs used in the manufacture of export products are refunded back to the exporter.",
    keyPoints: [
      "Two types: All Industry Rates (AIR) and Brand Rate.",
      "All Industry Rates are fixed percentages of FOB value defined in a national schedule.",
      "Brand Rate is calculated specifically for an exporter when there is no AIR, or when the actual duty paid is much higher than the AIR.",
      "Funds are credited directly to the exporter's registered bank account."
    ],
    documents: [
      "Shipping Bill copy",
      "Commercial Invoice and Packing List",
      "eBRC or bank certificate copy",
      "For Brand Rate: Detailed records of imported inputs, customs duty invoices, consumption records, and CA audit reports"
    ],
    process: [
      "Ensure the Duty Drawback claim option is checked on the shipping bill during export filing.",
      "Customs processes the shipping bill and calculates the drawback amount based on the AIR schedule.",
      "Upon realization of export proceeds, customs credits the amount to the exporter's bank account linked with ICEGATE.",
      "For Brand Rate: File a detailed cost-data application with the Jurisdictional Commissioner of Customs within 3 months of export."
    ],
    timeframe: "15-30 days from shipment date / realization of proceeds (AIR)",
    validity: "Governed by the shipment date and compliance rules"
  },
  {
    id: "interest-equalization-scheme-ies",
    title: "Interest Equalization Scheme (IES) on Export Credit",
    category: "EPCG & Incentives",
    subCategory: "Duty Remission",
    description: "An interest subvention scheme implemented by the RBI and DGFT that provides interest rebates on pre-shipment and post-shipment export credit (rupee loans) taken by eligible exporters.",
    keyPoints: [
      "Provides a rebate (currently 2% or 3%) on the interest rates charged by commercial banks.",
      "Highly beneficial for MSME manufacturers (entitled to 3% subvention) and specific sectors.",
      "Helps lower the cost of capital for processing export orders.",
      "Administered online: exporters must generate a unique IES UIN (Unique Identification Number) for banking use."
    ],
    documents: [
      "IEC Certificate",
      "MSME/Udyam Registration Certificate (for MSME exporters)",
      "Bank sanction letter for export credit limit (Packing credit / Post-shipment bill discounting)",
      "Detail statement of loans availed"
    ],
    process: [
      "Register on the DGFT portal and apply for the Interest Equalization Scheme UIN.",
      "Fill out the application online with company and MSME status details.",
      "Generate the IES UIN certificate.",
      "Submit this UIN to your lending bank.",
      "The bank applies the interest subvention directly to the loan account and claims refund from the RBI."
    ],
    timeframe: "1-2 working days (Online generation)",
    validity: "Valid for the financial year or tenure of the scheme as announced by RBI"
  },

  // SECTION 8: LICENCES - DGFT Licences & IEM
  {
    id: "restricted-authorisations-for-import-and-export-india",
    title: "Restricted Licences (Import & Export)",
    category: "Licences",
    subCategory: "DGFT Licences",
    description: "Special licences issued by the DGFT for items classified under the 'Restricted' category in the ITC (HS) Classification of Import-Export Items. No person can import or export restricted items without obtaining an authorisation.",
    keyPoints: [
      "Applies to sensitive goods, defense equipment, wildlife products, hazardous chemicals, and plastic scrap.",
      "Aimed at safeguarding national security, environment, health, and domestic industries.",
      "Applications are scrutinized by the EXIM Committee of DGFT.",
      "Licence conditions usually specify strict quality checks and quantity limits."
    ],
    documents: [
      "IEC and PAN copy",
      "Justification letter explaining the need to import/export restricted items",
      "Purchase Order/Proforma Invoice",
      "Technical specifications/composition report of the goods",
      "Consent/NOC from line ministries (e.g., MoEF, Ministry of Defence, etc., as applicable)"
    ],
    process: [
      "Identify the ITC (HS) code and confirm the Restricted status of the product.",
      "Apply online on the DGFT portal under 'Restricted Import/Export Authorisation' menu.",
      "Submit the detailed technical rationale and upload the mandatory NOCs from relevant ministries.",
      "The application is presented before the DGFT EXIM Committee during monthly meetings.",
      "Upon approval, the RA issues the Restricted Licence specifying import/export limits."
    ],
    timeframe: "30-60 working days (requires committee reviews)",
    validity: "Generally 18 months for imports; 12 months for exports"
  },
  {
    id: "restricted-import",
    title: "Restricted Import Licences",
    category: "Licences",
    subCategory: "DGFT Licences",
    description: "A subset of Restricted Licences specifically dealing with the import of goods that are not free to enter India. This includes items like second-hand machinery, specific electronic components, chemical waste, and biological materials.",
    keyPoints: [
      "Requires proof that the items cannot be sourced domestically or are critical for production.",
      "Restricted imports are monitored to avoid environmental pollution (e.g., plastic waste import rules).",
      "Subject to actual user condition – imported goods cannot be resold in the open market.",
      "Strict customs verification at the port of entry."
    ],
    documents: [
      "IEC Certificate and PAN Card",
      "Chartered Engineer certificate showing shelf-life/machinery status (if second hand)",
      "Pollution Control Board NOC (if recycling or waste material)",
      "Proforma invoice and catalog details"
    ],
    process: [
      "Apply in form ANF 2M on the online DGFT portal.",
      "Provide complete details of the goods, value, quantity, and reason for import.",
      "Upload line-ministry approvals or environmental consents.",
      "The EXIM committee evaluates the case. If approved, the licence is generated on the portal."
    ],
    timeframe: "30-45 working days",
    validity: "18 months"
  },
  {
    id: "restricted-export",
    title: "Restricted Export Licences",
    category: "Licences",
    subCategory: "DGFT Licences",
    description: "A subset of Restricted Licences specifically dealing with the export of items where foreign shipments are controlled. This covers agricultural goods during domestic shortages (e.g., wheat, rice, onions at times), specific wild animals, and rare minerals.",
    keyPoints: [
      "Ensures domestic food security and price stabilization.",
      "Protects natural resources and indigenous species.",
      "Requires coordinate approval from ministries like Ministry of Agriculture or Ministry of Mines.",
      "Quantity caps are strictly monitored."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Export order copy from the foreign buyer",
      "Origin certificates of the agricultural or mineral products",
      "NOC from relevant boards (e.g., APEDA, State Forest Departments)"
    ],
    process: [
      "Prepare the application on the DGFT system under Restricted Export Authorisation.",
      "Attach the export contract and proof of purchase.",
      "State the social/economic justification for export.",
      "EXIM committee reviews the request. Upon approval, the license is issued to the exporter."
    ],
    timeframe: "30-45 working days",
    validity: "12 months"
  },
  {
    id: "scomet-authorisation",
    title: "SCOMET (Dual-Use Items) Authorisation",
    category: "Licences",
    subCategory: "DGFT Licences",
    description: "SCOMET is an acronym for Special Chemicals, Organisms, Materials, Equipment, and Technologies. These are dual-use items that can be used for both civilian and military/weapons of mass destruction (WMD) applications. Export of these items is highly regulated and requires a SCOMET licence from the DGFT.",
    keyPoints: [
      "Mandatory for exporting special chemicals, toxic substances, biological agents, electronics, and aerospace components.",
      "Subject to strict international non-proliferation treaties (like Wassenaar Arrangement, MTCR).",
      "Violations attract severe criminal penalties under the Foreign Trade Act and WMD Act.",
      "Applications are audited by an inter-ministerial working group (IMWG)."
    ],
    documents: [
      "Detailed technical description and chemical formula of the product",
      "End-User Certificate (EUC) from the foreign buyer (strictly verified)",
      "End-use declaration stating the items will only be used for civilian purposes",
      "Company profile and profile of the foreign buyer/importer",
      "Purchase Order and contract copy"
    ],
    process: [
      "Determine if the product falls under any of the 8 SCOMET categories.",
      "File a SCOMET application online on the DGFT SCOMET portal.",
      "Upload the original End-User Certificate (signed by the buyer and their national authority if required).",
      "The application undergoes scrutiny by the Inter-Ministerial Working Group (IMWG) comprising members from ISRO, DRDO, Ministry of External Affairs, etc.",
      "Upon IMWG clearance, the SCOMET license is issued by the DGFT."
    ],
    timeframe: "60-90 working days (requires detailed security verification)",
    validity: "24 months (can be extended under specific conditions)"
  },
  {
    id: "iem-industrial-entrepreneur-memorandum",
    title: "IEM (Industrial Entrepreneur Memorandum)",
    category: "Licences",
    subCategory: "IEM",
    description: "An official filing system with the Department for Promotion of Industry and Internal Trade (DPIIT) for setting up an industrial undertaking. It applies to industries that are exempt from industrial licensing under the Industries (Development and Regulation) Act.",
    keyPoints: [
      "Applicable to large-scale projects exceeding MSME thresholds.",
      "Filed for new factory setups, expansion, or manufacturing of new articles.",
      "Acts as a registration showing industrial capacity, investment details, and location.",
      "Required for obtaining bank financing, industrial plots, and power connections."
    ],
    documents: [
      "PAN Card of the company and directors",
      "Aadhaar card of the authorized applicant",
      "Detailed project report showing investment in plant & machinery and land",
      "Corporate details (CIN, Memorandum of Association)",
      "Detailed location coordinates of the proposed plant"
    ],
    process: [
      "Determine the nature of the industry and ensure it does not require a compulsory license.",
      "Access the G2B portal of DPIIT.",
      "Fill out the application online with project details (IEM Part-A).",
      "Pay the registration fee based on the investment brackets.",
      "DPIIT issues the IEM Acknowledgement containing a unique registration number."
    ],
    timeframe: "3-5 working days",
    validity: "Permanent registration for the specified unit"
  },
  {
    id: "iem-part-a",
    title: "IEM Part-A (Establishment of Unit)",
    category: "Licences",
    subCategory: "IEM",
    description: "The initial filing of the Industrial Entrepreneur Memorandum. It is submitted by an entrepreneur before starting the construction of the factory or setting up the plant, declaring the intent, location, proposed capacity, and investment size.",
    keyPoints: [
      "Submitted at the conceptual/pre-establishment stage.",
      "Declares the proposed items of manufacture, quantities, and raw materials.",
      "Required for getting environmental clearances and state government approvals.",
      "Establishes the initial record of the industrial undertaking in the national database."
    ],
    documents: [
      "Company registration profile",
      "Proposed list of machinery and expected cost breakdown",
      "Land acquisition details or lease agreement copy",
      "Proposed employment generation figures"
    ],
    process: [
      "Fill out the online IEM Part-A form on the DPIIT portal.",
      "Provide projected investment figures for Land, Building, and Plant & Machinery.",
      "State the proposed capacity for each product line.",
      "Submit and pay the fee. Obtain the Part-A Acknowledgement."
    ],
    timeframe: "3-5 working days",
    validity: "Valid till the commencement of commercial production (usually expected in 2-3 years)"
  },
  {
    id: "iem-part-b",
    title: "IEM Part-B (Commencement of Production)",
    category: "Licences",
    subCategory: "IEM",
    description: "The second and final filing of the Industrial Entrepreneur Memorandum. It must be submitted by the entrepreneur within 30 days of the commencement of commercial production of the industrial unit, reporting the actual figures of investment, capacity, and employment.",
    keyPoints: [
      "Submitted post-commencement of commercial manufacturing.",
      "Reports the final actual expenditure incurred on land, building, and machinery.",
      "Registers the fact that the unit is now active and producing goods.",
      "Required to transition from 'proposed' to 'active' status in government records."
    ],
    documents: [
      "IEM Part-A Acknowledgement number and date",
      "Commencement of production certificate or first commercial sale invoice",
      "Audited balance sheet/expenditure statement showing actual machinery investments",
      "Details of actual direct and indirect employment created"
    ],
    process: [
      "Access the DPIIT portal and open the IEM Part-B filing section.",
      "Link the application with the previous Part-A registration.",
      "Update all fields with actual figures of capital expenditure, production capacity, and labor force.",
      "Upload the production certificate or invoice.",
      "Submit the application online to obtain the Part-B Acknowledgement."
    ],
    timeframe: "3-5 working days",
    validity: "Permanent registration"
  },

  // SECTION 9: LICENCES - FSSAI & Sub-items
  {
    id: "FSSAI",
    title: "FSSAI (Food Safety and Standards Authority of India) License",
    category: "Licences",
    subCategory: "FSSAI",
    description: "A mandatory food safety registration and license issued by the Food Safety and Standards Authority of India (FSSAI). It is required for any food business operator (FBO) involved in the manufacture, processing, storage, distribution, sale, or import/export of food products.",
    keyPoints: [
      "Ensures the food products meet safety standards, hygiene conditions, and nutritional guidelines.",
      "Required for custom clearance of all food imports and exports.",
      "Divided into Registration, State License, and Central License based on business turnover.",
      "Critical for consumer trust and legal compliance in the food sector."
    ],
    documents: [
      "PAN Card and Aadhaar Card of the promoters",
      "Proof of possession of premises (rent agreement/electricity bill)",
      "Detailed layout plan of the manufacturing unit showing machinery installation",
      "Water analysis report from an accredited lab",
      "List of food categories and specific products to be handled"
    ],
    process: [
      "Determine the category of license required based on business turnover and nature (e.g., Central License is mandatory for importers/exporters).",
      "Log in to the FSSAI FoSCoS (Food Safety Compliance System) portal.",
      "Fill out Form B with product selections and business details.",
      "Upload documents and pay the licensing fee.",
      "FSSAI food safety officers inspect the premises (if required) and issue the FSSAI license certificate containing a 14-digit number."
    ],
    timeframe: "30-45 working days",
    validity: "1 to 5 years (must be renewed at least 30 days before expiry)"
  },
  {
    id: "fssai-central-license",
    title: "FSSAI Central Licence",
    category: "Licences",
    subCategory: "FSSAI",
    description: "The highest category of FSSAI license. It is mandatory for food business operators with an annual turnover exceeding INR 20 Crores, large-scale manufacturers, importers, exporters, e-commerce food operators, and units operating under central government agencies.",
    keyPoints: [
      "Mandatory for all Importers and Exporters of food products in India (irrespective of turnover).",
      "Covers multi-state chains, airport/seaport catering, and large dairy units.",
      "Directly monitored by the Central FSSAI authorities.",
      "Allows import/export clearance at ports."
    ],
    documents: [
      "IEC Certificate (mandatory for importers/exporters)",
      "NOC and unit layout plan",
      "List of machinery with horsepower details",
      "Analysis report of water from a public health laboratory",
      "Source of raw material for meat/milk processing units (if applicable)"
    ],
    process: [
      "Access FoSCoS portal and choose 'Apply for Central License'.",
      "Upload the IEC certificate along with basic identity documents.",
      "Select the specific food products and codes.",
      "Submit technical data and pay the central license fee (typically INR 7,500/year).",
      "Address any queries raised by the Central Licensing Authority. Following verification/inspection, the Central FSSAI License is issued."
    ],
    timeframe: "30-45 working days",
    validity: "1 to 5 years"
  },
  {
    id: "fssai-state-license",
    title: "FSSAI State Licence",
    category: "Licences",
    subCategory: "FSSAI",
    description: "An FSSAI license issued by state food authorities. It is required for medium-sized food businesses (turnover between INR 12 Lakhs and INR 20 Crores per annum), including mid-sized restaurants, caterers, food distributors, and manufacturers.",
    keyPoints: [
      "Applies to medium food business operators working within a single state.",
      "Ensures state-level health and hygiene standards are followed.",
      "Monitored by the state food safety department and local health officers.",
      "Cannot be used for direct import or export operations."
    ],
    documents: [
      "Rent agreement or ownership proof of the shop/factory",
      "Partnership Deed / Incorporation certificate",
      "List of directors/partners with photos",
      "Detailed food safety management system (FSMS) plan",
      "Medical fitness certificate of food handlers"
    ],
    process: [
      "Register on the FoSCoS portal and select 'Apply for State License'.",
      "Enter the business turnover details to confirm eligibility.",
      "Upload business certificates, location proof, and FSMS plan.",
      "Pay the state licensing fee (INR 2,000 to INR 5,000/year depending on state/category).",
      "Food inspector conducts a factory inspection. The license is issued upon approval."
    ],
    timeframe: "20-30 working days",
    validity: "1 to 5 years"
  },
  {
    id: "fssai-returns",
    title: "FSSAI Annual Returns Filing",
    category: "Licences",
    subCategory: "FSSAI",
    description: "A mandatory annual compliance requirement for FSSAI Central and State license holders. Food business operators must submit reports detailing their food transactions, manufacturing quantities, and import/export details for the preceding financial year.",
    keyPoints: [
      "Filing must be completed before 31st May of every year for the previous financial year.",
      "Failure to file attracts a penalty of INR 100 per day after the deadline.",
      "Only Form D1 is currently active for food manufacturers, importers, and packagers.",
      "Keeps the license active and in good standing with the food authority."
    ],
    documents: [
      "FSSAI License number",
      "Detailed category-wise record of food products manufactured/imported/sold",
      "Quantity in metric tonnes and value of food products handled",
      "Import/Export details including country names, ports, and quantities"
    ],
    process: [
      "Log in to the FoSCoS portal using the licensee credentials.",
      "Go to the 'Annual Return' filing section.",
      "Select the relevant financial year and product categories.",
      "Enter the production/handling data (quantities, values, and nutritional analysis details where applicable).",
      "Submit the electronic Form D1. Save the confirmation receipt for compliance records."
    ],
    timeframe: "1-2 working days (Online filing)",
    validity: "Required annually"
  }
];
