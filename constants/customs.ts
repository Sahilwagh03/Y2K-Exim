export interface CustomsService {
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

export const customsData: CustomsService[] = [
  // SECTION 1: CUSTOMS SERVICES - Core Operations
  {
    id: "freight-forwarding-services",
    title: "Freight Forwarding Services",
    category: "Customs Services",
    subCategory: "Core Operations",
    description: "Comprehensive coordination and shipping logistics services for moving cargo internationally. Freight forwarders act as intermediaries between shippers and various transportation services (ocean freight, air freight, road transport, and rail).",
    keyPoints: [
      "End-to-end cargo logistics management (consolidation, shipping, and delivery).",
      "Partnerships with major shipping lines and airlines for competitive cargo pricing.",
      "Expertise in routing optimization and transit time reduction.",
      "Comprehensive tracking and updates for raw materials and finished goods."
    ],
    documents: [
      "Commercial Invoice and Packing List",
      "Shipper's Letter of Instruction (SLI)",
      "Material Safety Data Sheet (MSDS) (for hazardous cargo)",
      "Certificate of Origin and IEC Certificate",
      "Booking details and load specifications"
    ],
    process: [
      "Analyze the cargo profile, destination, and preferred timelines to choose Air or Ocean freight.",
      "Negotiate and book cargo space with carrier lines.",
      "Collect cargo from factory premises and consolidate at warehouses if required.",
      "Draft and issue the Bill of Lading (Oceans) or Airway Bill (Air) to finalize cargo custody.",
      "Track shipment in transit and hand over cargo to customs clearance at destination port."
    ],
    timeframe: "Continuous operation (shipment schedules vary)",
    validity: "Shipment-specific"
  },
  {
    id: "Customs-Clearance",
    title: "Customs Clearance (Import & Export)",
    category: "Customs Services",
    subCategory: "Core Operations",
    description: "The official process of declaring cargo to Customs authorities at seaport, airport, or ICD to clear import or export shipments. As a licensed Customs House Agent (CHA), we manage the classification, valuation, and duty assessment of cargo.",
    keyPoints: [
      "Filing declarations on ICEGATE (Bill of Entry for imports, Shipping Bill for exports).",
      "Accurate HS Code classification to determine correct duty and avoid misdeclaration penalties.",
      "Facilitating physical inspection and customs verification at ports.",
      "Ensuring compliance with Allied Acts (FSSAI, CDSCO, AQ, PQ, etc.)."
    ],
    documents: [
      "Commercial Invoice and Packing List",
      "Bill of Lading / Airway Bill",
      "Importer Exporter Code (IEC) and GST Registration",
      "Purchase Order / Sales Contract",
      "Product specification sheets, catalog, or laboratory certificates"
    ],
    process: [
      "Receive cargo shipment documents from the importer/exporter.",
      "Draft and file the Shipping Bill (exports) or Bill of Entry (imports) electronically on ICEGATE.",
      "Facilitate customs assessment and payment of duties (for imports).",
      "Present goods for physical examination by customs inspectors at the cargo yard.",
      "Obtain 'Let Export Order' (LEO) or 'Out of Charge' (OOC) to release the cargo."
    ],
    timeframe: "2-4 working days (subject to port scrutiny)",
    validity: "Per shipment filing"
  },
  {
    id: "Container-Transportation-Services",
    title: "Container Transportation Services",
    category: "Customs Services",
    subCategory: "Core Operations",
    description: "Domestic inland container hauling and truck shipping services. We coordinate the transport of empty containers to factories for stuffing, and carry stuffed containers securely to ports or ICDs, and vice versa.",
    keyPoints: [
      "GPS-enabled container trailers for real-time tracking.",
      "Provision of customized container sizes (20ft, 40ft, open tops, reefers).",
      "Experienced drivers adhering to port entry regulations and safety guidelines.",
      "Efficient empty-container pickup and drop-offs to save detention charges."
    ],
    documents: [
      "Lorry Receipt (LR) / Waybill",
      "Customs Container Gate Pass / E-way Bill",
      "Delivery Challan copy",
      "Container stuffing/de-stuffing checklist"
    ],
    process: [
      "Pick up empty containers from the shipping line yard.",
      "Move the container to the exporter's factory for loading/stuffing.",
      "Apply the high-security customs bottle seal.",
      "Haul the container to the port terminal or Inland Container Depot (ICD) before the cutoff date.",
      "Collect import containers from the port and deliver safely to the importer's warehouse."
    ],
    timeframe: "1-2 days (depending on travel distance)",
    validity: "Per trip basis"
  },

  // SECTION 2: CUSTOMS SERVICES - Customs Duty Schemes
  {
    id: "moowr-scheme",
    title: "MOOWR Scheme (Bonded Warehouse Manufacturing)",
    category: "Customs Services",
    subCategory: "Customs Duty Schemes",
    description: "The MOOWR (Manufacture and Other Operations in Warehouse Regulations) scheme allows importers to import raw materials and capital goods duty-free into a licensed private bonded warehouse. Duties are deferred until the finished goods are cleared into the domestic market, and completely waived if the goods are exported.",
    keyPoints: [
      "Deferral of basic customs duty and IGST on imported inputs and machinery.",
      "Zero interest liability on deferred duties.",
      "If finished goods are exported, the import duties on inputs are fully waived.",
      "Improves business cash flow by deferring duty payment until actual product sale."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Warehouse premises details (Lease Deed/Ownership papers)",
      "Site map and structural layout plan of the proposed bonded facility",
      "NOC from fire department and local zoning authorities",
      "Triple Duty Bond agreement copy"
    ],
    process: [
      "Identify the factory area to be licensed as a private bonded warehouse.",
      "Apply online on the customs ICEGATE portal under MOOWR guidelines.",
      "Submit structural layouts and execute the double/triple duty bond.",
      "Customs officers inspect the facility security, gates, and digital security measures.",
      "Obtain the MOOWR license. Clear imported materials directly to this warehouse under duty deferral."
    ],
    timeframe: "30-45 working days",
    validity: "Lifetime (subject to compliance audits)"
  },

  // SECTION 3: CUSTOMS SERVICES - Duty Refund
  {
    id: "customs-addl-sad-4-percent-refund",
    title: "ADDL SAD / 4% Duty Refund",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Refund of 4% Special Additional Duty (SAD) paid on imported goods under Notification No. 102/2007-Customs. Importers who resell the imported goods in the domestic market without modifying their identity, and pay appropriate VAT/Sales tax, are eligible to claim a refund of this duty.",
    keyPoints: [
      "SAD of 4% is levied on imports to provide a level playing field for domestic goods paying VAT/Sales tax.",
      "Importers can claim 100% refund of this 4% SAD upon reselling the goods in India.",
      "Claim must be filed within 1 year from the date of payment of the duty.",
      "Requires evidence of payment of VAT/CST/GST on the subsequent sale of the goods."
    ],
    documents: [
      "Original Triplicate copy of Bill of Entry",
      "Customs duty payment TR-6 challans",
      "Sales Invoices showing payment of VAT/CST/GST",
      "CA Certificate reconciling imports, stock, and sales, certifying that the SAD burden was not passed on",
      "Ledger copy showing VAT/GST payments"
    ],
    process: [
      "Incorporate a clause on sales invoices stating no SAD burden is passed on to buyers.",
      "Collect proof of sales and VAT/GST returns demonstrating subsequent local sales.",
      "Prepare the CA certificate certifying the correlation of imported goods with sold goods.",
      "File the refund claim in the prescribed format with the Customs Refund Cell at the port of import.",
      "Customs reviews the documents and issues the refund."
    ],
    timeframe: "30-45 working days",
    validity: "Claim must be filed within 1 year from the date of duty payment"
  },
  {
    id: "customs-svb-1-percent-rd",
    title: "1% RD / Special Valuation Branch (SVB)",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Special Valuation Branch (SVB) handles cases involving transactions between related parties (e.g. parent company and Indian subsidiary). Importers must obtain an SVB valuation order, during which a 1% Extra Duty Deposit (EDD) or Revenue Deposit (RD) is collected provisionally on imports.",
    keyPoints: [
      "Applicable to imports from foreign related parties (collaborators, holding companies, joint ventures).",
      "1% Revenue Deposit (RD) is charged provisionally until the SVB valuation is finalized.",
      "SVB investigates whether the relationship has influenced the invoice price of imported goods.",
      "Once the SVB issues a favorable order, the 1% provisionally paid RD can be refunded."
    ],
    documents: [
      "SVB questionnaire form (Annexure A / B)",
      "Transfer Pricing (TP) audit reports copy",
      "Invoices of related party transactions and pricing agreements",
      "Financial Statements and Annual Reports of the importer",
      "Proof of payment of 1% provisional Revenue Deposit (RD)"
    ],
    process: [
      "Declare the related-party status in the Bill of Entry to trigger SVB assessment.",
      "Pay the 1% provisional Revenue Deposit (RD) or Extra Duty Deposit (EDD) during custom clearance.",
      "Submit the completed SVB questionnaire and transfer pricing files to the SVB department.",
      "Represent the case before the SVB Deputy Commissioner to justify the valuation method.",
      "Secure the final SVB order and file a claim for the refund of the provisionally deposited 1% RD."
    ],
    timeframe: "4-6 months",
    validity: "Permanent order (subject to periodic reviews)"
  },
  {
    id: "customs-section-74-re-export",
    title: "Section 74 / Re-Export of Goods (Duty Drawback)",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Allows a drawback of up to 98% of the customs duty paid on imported goods if they are subsequently re-exported out of India. Under Section 74, the goods must be easily identified as the originally imported goods and re-exported within 2 years of the import date.",
    keyPoints: [
      "Up to 98% customs duty refund is allowed if goods are re-exported without being used.",
      "Reduced drawback percentage applies if the goods were used in India before re-export.",
      "The identity of the goods must be established to the satisfaction of the Customs Commissioner.",
      "Applies to defective imports, return-to-vendor shipments, or unsold transit stock."
    ],
    documents: [
      "Import Bill of Entry and customs duty payment challans",
      "Import Packing List and Commercial Invoice",
      "Export Shipping Bill referencing the original import details",
      "Export Invoice and packing list",
      "Phyto-sanitary or technical evaluation certificate (if returned due to defects)"
    ],
    process: [
      "File the shipping bill for export under Section 74 at the customs station.",
      "Present the goods for physical examination; customs checks the serial numbers/marks to verify they match the import Bill of Entry.",
      "Complete the export shipment.",
      "Submit the formal Section 74 Drawback claim along with import-export correlation sheets.",
      "The port drawback section processes the claim and refunds the customs duty directly to the bank."
    ],
    timeframe: "60-90 working days",
    validity: "Must be re-exported within 2 years of import date"
  },
  {
    id: "customs-excess-wrong-paid-refund",
    title: "Excess / Wrong Paid Duty Refund (Section 27)",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Claiming a refund of customs duties and interest paid in excess under Section 27 of the Customs Act, 1962. This includes overpayments due to clerical mistakes, wrong HS code classification, mathematical errors, or retrospective exemption benefits.",
    keyPoints: [
      "Allows rectification of overpaid duties at ports.",
      "Applicable for refund of Excess Duty, Double Payment, or refund of Special Additional Duty (SAD).",
      "Subject to the principle of 'unjust enrichment' – the claimant must prove they have not passed on the duty burden to the customer.",
      "Must be filed within the strict statutory limitation period."
    ],
    documents: [
      "Original Bill of Entry and Customs Challan",
      "Assessment Order copy from Customs",
      "CA certificate proving the duty burden was not passed to customers",
      "Clerical/Legal justification sheet explaining the excess payment",
      "Bank account details and cancelled cheque"
    ],
    process: [
      "Identify the excess duty payment and compile supporting documents.",
      "File the refund claim in the prescribed Form (Annexure-A) with the Assistant/Deputy Commissioner of Customs.",
      "Submit proof showing the duty is not passed on to buyers.",
      "Attend personal hearing to explain the claim rationale.",
      "Customs issues a refund sanction order, and the amount is credited to the bank account."
    ],
    timeframe: "30-60 working days",
    validity: "Claim must be filed within 1 year from the date of duty payment"
  },
  {
    id: "customs-dbk-brand-rate-fixation",
    title: "Customs Brand Rate Fixation (Duty Drawback)",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "A procedure to calculate and fix a custom Duty Drawback rate specifically for an exporter's product. This is used when the standard All Industry Rate (AIR) is not fixed, or when the actual duties paid on raw materials exceed 150% of the AIR.",
    keyPoints: [
      "Enables recovery of actual customs duties paid on imported materials used in exports.",
      "Crucial for customized products containing specialized imported components.",
      "Requires detailed tracking of input-output ratios and duty payment challans.",
      "Applicable for raw materials, components, and packaging consumables."
    ],
    documents: [
      "DBK-I, DBK-II, DBK-III statements detailing inputs and duties",
      "Customs Bills of Entry for raw materials imported",
      "Shipping Bills and eBRCs of the export products",
      "Manufacturing consumption ledger verified by a Chartered Engineer",
      "CA/ICWA certified cost statements"
    ],
    process: [
      "File an application for Brand Rate Fixation with the Commissioner of Customs within 3 months of the export shipment date.",
      "Provide complete input-output data showing raw material consumption.",
      "Attach copies of Bills of Entry proving payment of customs duty on inputs.",
      "The customs department verifies the data and audits the factory records.",
      "Customs issues a Brand Rate Fixation order, allowing the exporter to claim the custom drawback refunds."
    ],
    timeframe: "60-90 working days",
    validity: "Valid for the specified shipping bills or for a period of 1 year"
  },
  {
    id: "customs-appeal-matters",
    title: "Customs Appeal Matters",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Filing appeals before the Commissioner of Customs (Appeals) under Section 128 of the Customs Act, 1962, against orders passed by lower-level customs authorities regarding cargo valuation, classification, adjudication, or confiscation of goods.",
    keyPoints: [
      "Legal remedy against arbitrary valuation hikes or penalty orders.",
      "Involves drafting detailed statements of facts and grounds of appeal.",
      "Requires pre-deposit of a percentage of the disputed duty as per rules.",
      "Helps clear seized/blocked shipments through provisional release representations."
    ],
    documents: [
      "Certified copy of the Order-in-Original (adverse order)",
      "Appeal Form (Form CA-1 / CA-3 as applicable)",
      "Challan proof of the mandatory pre-deposit",
      "Written brief showing trade policy rules and precedents",
      "Vakalatnama / Authorisation Letter"
    ],
    process: [
      "Analyze the adverse order and prepare the appeal brief detailing grounds of challenge.",
      "Pay the mandatory pre-deposit of the disputed duty amount.",
      "File the appeal online on ICES/ICEGATE and submit physical copies to the appellate office.",
      "Represent the client during personal hearings and file rejoinders.",
      "Appellate Authority passes an order setting aside, modifying, or confirming the original order."
    ],
    timeframe: "6-12 months",
    validity: "Specific to the disputed case"
  },
  {
    id: "customs-tribunal-cestat-matters",
    title: "Customs Tribunal / CESTAT Matters",
    category: "Customs Services",
    subCategory: "Duty Refund",
    description: "Representation and filing of appeals before the Customs, Excise and Service Tax Appellate Tribunal (CESTAT). CESTAT is a specialized quasi-judicial body that hears appeals against orders passed by the Commissioner of Customs or Commissioner (Appeals).",
    keyPoints: [
      "Applies to high-value duty disputes, confiscation of cargo, and anti-dumping duties.",
      "Involves filing Forms CA-3 (for appeals), CA-4 (for cross-objections), and CA-5.",
      "Allows representation by authorized tax professionals (CAs, CS, Advocates, or Cost Accountants).",
      "Offers a critical mechanism to obtain stays on recovery of disputed tax demands."
    ],
    documents: [
      "Certified copy of the Order-in-Appeal or Commissioner's order",
      "Form CA-3 in quadruplicate along with grounds of appeal",
      "Pre-deposit payment challan (typically 7.5% or 10% of the disputed tax/penalty)",
      "Paper book containing port files, invoices, and legal precedents",
      "Power of Attorney / Vakalatnama"
    ],
    process: [
      "Draft the appeal documents, detailing statements of facts, grounds of challenge, and legal arguments.",
      "Pay the mandatory pre-deposit via ICEGATE and attach the challan.",
      "File the appeal dossier with the CESTAT Registry.",
      "Represent the company during the tribunal bench hearings.",
      "Upon hearing, the Tribunal passes a judicial order resolving the dispute."
    ],
    timeframe: "6-12 months",
    validity: "Specific to the disputed case"
  },

  // SECTION 4: REGISTRATIONS & COMPLIANCE - AEO & Facilitation
  {
    id: "Authorized-Economic-Operator",
    title: "AEO (Authorized Economic Operator) Certification",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "A program under the aegis of the World Customs Organization (WCO) SAFE Framework to secure and facilitate global trade. An AEO certification validates that an entity's internal processes, customs compliance, and supply chain security meet international standards.",
    keyPoints: [
      "Categorized into AEO-T1, AEO-T2, AEO-T3 (for importers/exporters) and AEO-LO (for logistics operators).",
      "Speeds up customs clearance and provides priority treatment at ports.",
      "Exempts or reduces the requirement of submitting bank guarantees for customs clearances.",
      "Enables fast-track clearance globally through Mutual Recognition Agreements (MRAs) between nations."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Safety and Security Plan of business premises",
      "Process flow charts for shipping, warehouse, and finance departments",
      "Internal audit policy and standard operating procedures (SOPs)",
      "Financial stability certificates (Audited balance sheets for 3 years)"
    ],
    process: [
      "Conduct an internal gap analysis to align security and customs practices with AEO guidelines.",
      "Compile the AEO application containing detailed annexures on security, compliance, and solvency.",
      "Submit the application online on the Indian AEO portal.",
      "Customs cell audits the physical security, IT controls, and accounting ledgers.",
      "Upon verification, the Customs AEO cell issues the AEO Certificate."
    ],
    timeframe: "30-90 working days depending on AEO tier",
    validity: "T1: 3 years; T2: 3 years; T3: 5 years; LO: 3 years (requires periodic review)"
  },
  {
    id: "authorized-economic-operator-aeo-t1",
    title: "AEO - T1 Certification",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "The first level of AEO accreditation for importers and exporters. It is purely document-based and does not require a physical site verification audit by customs authorities.",
    keyPoints: [
      "Basic AEO status offering simplified paper verification.",
      "Reduces shipping bill/bill of entry examination percentage by customs.",
      "Facilitates direct port delivery (DPD) for imports and direct port entry (DPE) for exports.",
      "Allows waiver of bank guarantee requirements up to 50% under major schemes."
    ],
    documents: [
      "Annexure-A and Annexure-B application formats",
      "Past 3 years' import-export statistics",
      "Solvency certificate from bank or CA",
      "Declaration of zero customs prosecutions in past 3 years"
    ],
    process: [
      "Register on the AEO India portal.",
      "Fill out the T1 application form (Annexure 3) providing details of customs compliance.",
      "Upload bank credentials and financial audit records.",
      "The AEO Programme Manager reviews the document dossier and issues the T1 certificate."
    ],
    timeframe: "30 working days",
    validity: "3 years"
  },
  {
    id: "authorized-economic-operator-aeo-t2",
    title: "AEO - T2 Certification",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "The second tier of AEO certification. It requires a high level of compliance and includes a physical security inspection of the applicant's offices, factories, and warehouses by customs officers.",
    keyPoints: [
      "Enhanced customs benefits compared to AEO-T1.",
      "Further reduction in customs examination rates.",
      "Waiver of bank guarantees up to 100% under customs/DGFT authorizations.",
      "Entitled to 24/7 customs clearance facility at selected ports."
    ],
    documents: [
      "Detailed safety audit report of the factory/premises",
      "CCTV layout plans and access control records",
      "Employee background check verification policy copy",
      "Solvency and financial records similar to T1"
    ],
    process: [
      "Exporters must first obtain or be eligible for T1 status.",
      "Submit the detailed T2 application detailing physical and cargo security measures.",
      "Customs AEO team schedules a physical site visit to inspect security walls, locks, access control, and IT infrastructure.",
      "Post-audit report approval leads to the issuance of the AEO-T2 status."
    ],
    timeframe: "60-90 working days",
    validity: "3 years"
  },
  {
    id: "authorized-economic-operator-aeo-t3",
    title: "AEO - T3 Certification",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "The highest tier of AEO certification. It is granted to entities that have continuously maintained AEO-T2 status for at least two years or meet specific stringent international supply chain security benchmarks.",
    keyPoints: [
      "Highest level of facilitation at Indian customs.",
      "Near-zero physical examination of cargo (unless specific intelligence exists).",
      "Direct Port Delivery (DPD) clearance without scanning, in most cases.",
      "Eligible for benefits under Mutual Recognition Agreements (MRAs) with partner countries globally."
    ],
    documents: [
      "T2 compliance audit history",
      "MRA compatibility certificate or partner logistics profiles",
      "Advanced logistics chain risk management dossier"
    ],
    process: [
      "Submit application for upgrade after completing required tenure as AEO-T2.",
      "Provide proof of secure supply chain links with other AEO operators.",
      "AEO committee reviews the global logistics risk profile.",
      "Accreditation of AEO-T3 status is issued."
    ],
    timeframe: "60-90 working days",
    validity: "5 years"
  },
  {
    id: "authorized-economic-operator-aeo-lo",
    title: "AEO - LO Certification",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "AEO certification specifically designed for Logistics Operators, Customs Brokers, Warehouse Keepers, Freight Forwarders, and Port Terminal Operators.",
    keyPoints: [
      "Validates secure custody of goods in transit or storage.",
      "Enhances business reputation as a secure logistics partner.",
      "Enables priority movement of client containers through terminal gates.",
      "Allows easy registration and low guarantee requirements for transit bonds."
    ],
    documents: [
      "Customs license copy (CHA license/Warehouse license)",
      "Premises security plan showing fire safety and theft proofing",
      "Vehicles tracking policy (GPS log specifications)"
    ],
    process: [
      "Complete the LO application outlining transport/warehousing safety standards.",
      "Submit audit documentation demonstrating client cargo accountability.",
      "Customs carries out a site inspection of transport yards or warehouses.",
      "Issue of the AEO-LO certificate."
    ],
    timeframe: "60-90 working days",
    validity: "3 years"
  },
  {
    id: "self-sealing-permission",
    title: "Self-Sealing Permission (RFID Factory Stuffing)",
    category: "Registrations & Compliance",
    subCategory: "AEO & Facilitation",
    description: "Permission granted by Customs enabling exporters to seal their export containers directly at their factory premises using high-security RFID electronic seals, instead of having customs officers examine and seal container at ports.",
    keyPoints: [
      "Saves container handling costs and prevents damage at port warehouses.",
      "RFID e-seals are read automatically at port gates, reducing custom processing delays.",
      "Highly efficient for volume exporters with tight shipping schedules.",
      "Actual user condition – stuffing must occur at the approved factory premises."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Factory ownership/lease papers and layout plans",
      "GST returns statement copy",
      "Self-sealing declaration and photos of container stuffing area",
      "Annexure-A format listing authorized signatories"
    ],
    process: [
      "Ensure factory stuffing area has proper access control and security.",
      "Apply online on the ICEGATE portal to the Jurisdictional Commissioner of Customs.",
      "Provide details of RFID seals to be procured from approved vendors.",
      "Customs reviews the factory location and checks past compliance records.",
      "Customs grants Self-Sealing Permission. Exporter uploads stuffing data on ICEGATE prior to shipping."
    ],
    timeframe: "15-20 working days",
    validity: "Lifetime (subject to maintaining customs compliance)"
  },

  // SECTION 5: REGISTRATIONS & COMPLIANCE - Registrations
  {
    id: "customs-redemption-of-old-licence",
    title: "Redemption of Old Licence (EPCG / Advance Authorisation)",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "Assistance in closing and obtaining Redemption Letters (EODC) for old, pending, or complicated EPCG and Advance Authorisation licenses. We help resolve issues regarding pending export obligations, average maintenance shortfall, missing shipping bills, or delay fees.",
    keyPoints: [
      "Resolves old pending licenses that show as defaults on the DGFT portal.",
      "Prevents placement of the company on the Denied Entity List (DEL) or receiving Show Cause Notices.",
      "Helps reconstruct old export realization data using customs logs.",
      "Facilitates settlement of interest and composition fees for unfulfilled obligations."
    ],
    documents: [
      "Original EPCG / Advance Licence copy",
      "All available Shipping Bills and eBRCs/bank credits",
      "Detailed spreadsheet correlating imports and exports",
      "CA and Chartered Engineer certificates for old installations",
      "DGFT online portal access credentials"
    ],
    process: [
      "Perform a complete audit of the pending license files and identify gaps in export obligations.",
      "Retrieve missing shipping details using ICEGATE or port records.",
      "Draft representation letters and file reconciliation statements on the DGFT portal.",
      "Liaise with the DGFT Regional Authority (RA) to address audit queries.",
      "Secure the formal Redemption Certificate/Letter to close the file."
    ],
    timeframe: "30-45 working days",
    validity: "Permanent closure of the specific license case"
  },
  {
    id: "customs-igst-refund-errors",
    title: "Export IGST Refund Errors (SB001-SB009)",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "Resolving IGST refund transmission issues between the GST portal and the Customs ICEGATE portal. We diagnose and resolve errors (SB000 to SB009) like mismatch in invoice number, port code, GSTR-1 vs. GSTR-3B tax values, or EGM errors to release blocked refund amounts.",
    keyPoints: [
      "SB001: Mismatch in shipping bill number (common filing error).",
      "SB005: Mismatch in invoice number or GSTIN between GSTR-1 and Shipping Bill.",
      "SB006: EGM (Export General Manifest) error - cargo departure details not logged by carrier.",
      "SB009: GSTIN mismatch in the shipping bill.",
      "Essential for exporters whose IGST refunds are stuck at customs."
    ],
    documents: [
      "GSTR-1 and GSTR-3B filing copies",
      "Export Shipping Bills and Commercial Invoices",
      "ICEGATE query report showing error codes (e.g. SB005)",
      "Concordance table reconciling GSTR-1 invoices with Shipping Bills",
      "Letter of authorization to representation"
    ],
    process: [
      "Check the ICEGATE system to identify the specific error code blocking the IGST refund transmission.",
      "Reconcile the GSTR-1 data with the customs shipping bill details.",
      "If error is SB005, file an officer-level modification request or submit concordance tables to the customs EDI section.",
      "If error is SB006, coordinate with the shipping line/carrier to file supplementary EGMs.",
      "Once the customs EDI section validates the correction, the system automatically scrolls out the refund amount."
    ],
    timeframe: "10-15 working days",
    validity: "Specific to the corrected shipping bills"
  },
  {
    id: "EXIM-Licences-Registrations",
    title: "EXIM Licences & Registrations Overview",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "An overview of critical portal registrations and regulatory filings required on ICEGATE and other central portals to establish import-export compliance before shipping.",
    keyPoints: [
      "Mandatory setup on the ICEGATE portal to interface with customs.",
      "Involves AD Code mapping, bank accounts linkage, and digital key mapping.",
      "Ensures the exporter can receive duty refunds, drawback credits, and scheme incentives.",
      "Allows monitoring of shipping logs and import data in real-time."
    ],
    documents: [
      "IEC Certificate",
      "PAN Card of the firm",
      "Authorized Signatory details"
    ],
    process: [
      "Register the firm's profile on the ICEGATE website.",
      "Link the Digital Signature (DSC) to enable secure electronic document signing.",
      "Set up individual port profiles for clearing shipments across India."
    ],
    timeframe: "1-2 working days",
    validity: "Permanent"
  },
  {
    id: "epr-certificate-registration",
    title: "EPR (Extended Producer Responsibility) Registration",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "A mandatory environmental registration under the Central Pollution Control Board (CPCB). It applies to manufacturers, importers, and brand owners of plastic packaging, electronic waste (E-waste), batteries, and waste tyres to manage waste recycling.",
    keyPoints: [
      "Mandatory for importing products containing plastic packaging, batteries, or electronic components.",
      "Customs clearances require EPR registration details to avoid illegal imports.",
      "Ensures compliance with national recycling targets.",
      "Failure to register results in environmental compensation fines."
    ],
    documents: [
      "IEC and GST Certificate",
      "Details of the imported material categories and weight (in metric tonnes)",
      "Recycling action plan or agreement with certified recyclers (PRO)",
      "PAN Card and promoter details",
      "Manufacturing process flowchart (if domestic manufacturer)"
    ],
    process: [
      "Register on the CPCB EPR portal corresponding to the waste category (Plastic, E-waste, Battery, or Tyre).",
      "Fill out the application stating the projected quantity of imports/manufacturing.",
      "Upload agreements with registered recycling agencies.",
      "Submit the processing fees online.",
      "CPCB/SPCB evaluates the application and issues the EPR Registration Certificate."
    ],
    timeframe: "20-30 working days",
    validity: "1 to 5 years (requires annual compliance returns)"
  },
  {
    id: "customs-ad-code-registration",
    title: "Customs AD (Authorised Dealer) Code Registration",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "A mandatory registration process where the exporter maps their bank's 14-digit Authorised Dealer (AD) Code with the customs EDI system at each port of export. Without AD Code registration, the customs ICEGATE system will not generate shipping bills.",
    keyPoints: [
      "Required to clear export cargo and generate Shipping Bills at specific ports.",
      "Mandatory to receive Duty Drawback, RoDTEP scrips, and other refunds directly in the bank account.",
      "Needs separate registration for each customs port (e.g. separate registrations for Chennai Sea, Nhava Sheva, Delhi Air).",
      "Registered bank account must match the exporter's IEC profile."
    ],
    documents: [
      "Bank AD Code Letter (original letter issued by the bank branch in customs format)",
      "IEC Certificate and PAN Card",
      "GST Registration certificate",
      "Cancel cheque copy",
      "ICEGATE login credentials"
    ],
    process: [
      "Request the 14-digit AD Code authorization letter from your banker.",
      "Log in to the ICEGATE portal using the exporter profile.",
      "Navigate to 'Bank Account Management' and select 'AD Code Registration'.",
      "Enter the AD Code, bank branch name, and upload the bank letter scan.",
      "Customs officer at the target port verifies the bank letter online and approves the AD Code link."
    ],
    timeframe: "2-3 working days",
    validity: "Lifetime (provided the bank account remains active)"
  },
  {
    id: "icegate-ifsc-code-registration",
    title: "IFSC Code Registration on ICEGATE",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "Mapping the exporter's specific bank branch IFSC code and account details on the ICEGATE portal to enable the automatic credit of Duty Drawback and custom refunds.",
    keyPoints: [
      "Enables direct electronic refund transfer (Drawback/IGST refund) from customs to the bank account.",
      "Prevents transaction failures and payment delays.",
      "Must be completed before filing shipping bills.",
      "Associated with AD Code registration process."
    ],
    documents: [
      "Bank Letter confirming IFSC and Account number",
      "Cancel cheque copy",
      "IEC Certificate and PAN"
    ],
    process: [
      "Access the Bank Account registration tab on the ICEGATE dashboard.",
      "Select 'Drawback / IGST Refund Account' option.",
      "Enter the bank name, account number, and IFSC code.",
      "Upload the cancelled cheque and bank confirmation letter.",
      "System verifies the details online and registers the account."
    ],
    timeframe: "1-2 working days",
    validity: "Permanent (unless bank account is changed)"
  },
  {
    id: "icegate-registration",
    title: "IceGate Registration",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "The primary registration of an importer, exporter, CHA, or logistics provider on the Indian Customs Electronic Gateway (ICEGATE). This portal handles electronic filing of Bills of Entry, Shipping Bills, and customs payments.",
    keyPoints: [
      "Primary portal for tracking all customs cargo logs and declarations.",
      "Required to file e-SANSAR documents and upload test certificates.",
      "Provides login access for duty payment through e-payment gateway.",
      "Enables viewing of custom clearance status and logs."
    ],
    documents: [
      "IEC Certificate and PAN",
      "Aadhaar Card and Mobile Number of the authorized person",
      "Valid Digital Signature Certificate (Class 3 DSC)",
      "Partnership Deed / Incorporation Certificate"
    ],
    process: [
      "Access the ICEGATE website (icegate.gov.in) and select 'Register'.",
      "Fill out the registration form selecting user type (e.g. Importer/Exporter).",
      "Map the Class 3 DSC key.",
      "Verify registration via email and mobile OTP.",
      "Upon profile approval by ICEGATE admin, credentials are sent to launch the dashboard."
    ],
    timeframe: "1-2 working days",
    validity: "Permanent"
  },
  {
    id: "customs-first-time-registration",
    title: "Customs First Time Port Registration",
    category: "Registrations & Compliance",
    subCategory: "Registrations",
    description: "A one-time registration formality required at a specific seaport or airport customs EDI terminal before an importer/exporter can clear cargo through that port for the first time.",
    keyPoints: [
      "Registers the company's credentials at the local port customs server.",
      "Verifies the physical existence and business legitimacy of the importer/exporter.",
      "Prevents fraudulent import/export activities.",
      "CHA coordinates the file submission at the port clearance counter."
    ],
    documents: [
      "IEC Certificate and PAN Card",
      "GST registration certificate",
      "Bank AD Code letter and cancelled cheque",
      "Factory/Office address proof (ownership/lease)",
      "Authority Letter in favor of the CHA to clear cargo"
    ],
    process: [
      "Prepare a registration file with copies of IEC, GST, PAN, and Bank letters.",
      "Submit the physical docket to the EDI Section of the Port Customs House.",
      "Customs EDI department verifies the files against the online ICEGATE data.",
      "Local server profiles are created and unlocked.",
      "Cargo clearance documents can now be processed for this port."
    ],
    timeframe: "1-2 working days",
    validity: "Permanent for that specific port"
  }
];
