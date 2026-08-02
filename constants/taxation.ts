export interface TaxationService {
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

export const taxationData: TaxationService[] = [
  // SECTION 1: GST - GST Services
  {
    id: "gst-registration-certificate",
    title: "GST Registration Certificate",
    category: "GST",
    subCategory: "GST Services",
    description: "Registration under the Goods and Services Tax (GST) Act. It is mandatory for businesses with turnover exceeding the prescribed limits (INR 40 Lakhs for goods, INR 20 Lakhs for services in general states), and for any entity engaged in interstate supply or import/export.",
    keyPoints: [
      "Mandatory for all importers, exporters, and interstate sellers.",
      "Assigns a unique 15-digit GST Identification Number (GSTIN).",
      "Enables the business to collect GST on sales and claim Input Tax Credit (ITC) on inputs.",
      "A prerequisite for opening business bank accounts and shipping clearance."
    ],
    documents: [
      "PAN Card of the Business and promoters",
      "Aadhaar Card / Voter ID of directors/partners",
      "Proof of business premises (Rent Agreement / Property tax bill / Consent Letter)",
      "Bank Account proof (Cancelled cheque or bank statement)",
      "Certificate of Incorporation / Partnership Deed"
    ],
    process: [
      "Submit the Part-A of GST registration on the GST Portal with PAN, Email, and Mobile number.",
      "Complete Part-B by filling out promoter profiles, business details, and address proof.",
      "Link Aadhaar OTP verification to enable fast-track processing.",
      "GST officer reviews the application and queries are addressed if raised.",
      "System issues the digitally signed GST Registration Certificate (Form REG-06)."
    ],
    timeframe: "3-5 working days",
    validity: "Lifetime (provided periodic returns are filed)"
  },
  {
    id: "gst-returns",
    title: "GST Returns Filing",
    category: "GST",
    subCategory: "GST Services",
    description: "The periodic compliance filing of GST transaction records. Every registered taxpayer must report sales, purchases, GST collected, and GST paid to determine net tax liability using forms like GSTR-1, GSTR-3B, and GSTR-9.",
    keyPoints: [
      "Mandatory periodic filing (Monthly or Quarterly based on QRMP scheme).",
      "GSTR-1: Filing of outward sales details.",
      "GSTR-3B: Summary return to pay taxes and reconcile Input Tax Credit.",
      "Avoids interest, late fees, and blocking of E-way bills."
    ],
    documents: [
      "Sales Register (Outward supplies invoices)",
      "Purchase Register (Inward supplies bills showing GST paid)",
      "Reconciliation files matching GSTR-2B with purchase register",
      "Import Bill of Entry details (for verifying import IGST)"
    ],
    process: [
      "Reconcile sales data and prepare GSTR-1 invoices for upload.",
      "Upload the sales details on the GST portal to generate GSTR-1.",
      "Reconcile inward Input Tax Credit (ITC) reflected in GSTR-2B.",
      "Draft GSTR-3B, offset tax liabilities using ITC, and pay net tax online.",
      "File GSTR-3B return using DSC or EVC verification."
    ],
    timeframe: "Continuous compliance (filed by 11th, 20th, or 24th of every month)",
    validity: "Periodic returns filing"
  },

  // SECTION 2: GST - GST Refund
  {
    id: "gst-refund-deemed-export",
    title: "GST Refund on Deemed Exports & zero-rated supplies",
    category: "GST",
    subCategory: "GST Refund",
    description: "A mechanism to claim a refund of GST paid on inputs or supplies made under 'Deemed Exports' (e.g. supplies to EOU, EPCG holders, or Advance Authorisation holders) or zero-rated supplies (exports of goods/services).",
    keyPoints: [
      "Allows refund of accumulated Input Tax Credit (ITC) or GST paid on exports.",
      "Applicable for supplies made to Special Economic Zone (SEZ) developers or units.",
      "Saves working capital and makes export pricing competitive globally.",
      "Claims are verified against customs shipping records."
    ],
    documents: [
      "GST Refund Application (Form RFD-01)",
      "Invoice list and corresponding GSTR-1 and GSTR-3B filings",
      "Shipping Bills and eBRCs for exports, or Invalidation Letter for Deemed Exports",
      "Chartered Accountant certificate certifying that the tax burden was not passed on",
      "Bank Realisation Certificates showing receipt of foreign exchange"
    ],
    process: [
      "Prepare a reconciliation statement matching export invoices with shipping bills.",
      "File Form RFD-01 online on the GST portal under the appropriate category.",
      "Upload the bank statement, shipping bill database, and CA certificate.",
      "GST officer validates the claim and issues an acknowledgment (REG-02).",
      "Payment sanction order (RFD-06) is issued, and the refund is credited to the bank."
    ],
    timeframe: "30-60 days",
    validity: "Claims must be filed within 2 years from the relevant date of export"
  },

  // SECTION 3: COMPLIANCE & OTHER - GST Compliance
  {
    id: "gst-pay-certificate",
    title: "GST Pay Certificate (GST Compliance Verification)",
    category: "Compliance & Other",
    subCategory: "GST Compliance",
    description: "A certificate verifying the GST payment status, tax compliance record, and filing history of an enterprise. This is often required for bidding in government tenders or clearing vendor audits.",
    keyPoints: [
      "Proof of excellent compliance standing with tax departments.",
      "Required for bidding in state or central government tenders.",
      "Helps vendors confirm that their tax credits are secure.",
      "Certified by a qualified Chartered Accountant."
    ],
    documents: [
      "GST returns filing history ledger (past 2-3 years)",
      "GST ledgers showing cash and credit ledger balances",
      "Tender requirement specification details",
      "PAN Card and GSTIN details"
    ],
    process: [
      "Download the complete filing records and payment ledger from the GST portal.",
      "Verify that all tax liability offsets match GSTR-3B.",
      "A Chartered Accountant audits the records and issues the GST Compliance Certificate.",
      "Submit the certificate to the tender or audit committee."
    ],
    timeframe: "2-3 working days",
    validity: "Specific to the audit / tender period"
  },
  {
    id: "gst-letter-of-undertaking-lut",
    title: "GST Letter of Undertaking (LUT) for Exports",
    category: "Compliance & Other",
    subCategory: "GST Compliance",
    description: "An online compliance option enabling registered exporters to export goods or services without paying Integrated GST (IGST) at the time of export. The exporter undertakes to complete the export within the specified timeframe.",
    keyPoints: [
      "Saves working capital: no need to pay IGST first and claim refund later.",
      "Valid for one entire financial year (must be renewed annually in April).",
      "Applies to export of both goods and services.",
      "Saves paperwork and administrative efforts for every shipment."
    ],
    documents: [
      "GSTIN details",
      "Digital signature of the authorized signatory",
      "Two witness details (names and PAN numbers)",
      "ICEGATE mapping profile check"
    ],
    process: [
      "Log in to the GST common portal using company credentials.",
      "Go to Services > User Services > Furnish Letter of Undertaking (LUT).",
      "Select the current financial year and enter witness information.",
      "Sign the application using DSC or Aadhaar OTP.",
      "The system instantly generates the LUT acceptance letter (Form GST RFD-11)."
    ],
    timeframe: "Instant approval (online generation)",
    validity: "1 Financial Year (valid until 31st March)"
  },

  // SECTION 4: COMPLIANCE & OTHER - Other Services
  {
    id: "labour-licence",
    title: "Contract Labour Licence",
    category: "Compliance & Other",
    subCategory: "Other Services",
    description: "A license required under the Contract Labour (Regulation and Abolition) Act, 1970. It is mandatory for establishments and contractors employing 20 or more contract workers (or as defined by state amendments) to regulate working conditions and ensure welfare.",
    keyPoints: [
      "Mandatory for factory owners and infrastructure developers utilizing contractor labor.",
      "Protects the principal employer from direct liabilities of contractor wages.",
      "Ensures the facility maintains basic amenities like drinking water, restrooms, and safety gear.",
      "Applies to security agencies, housekeeping contractors, and construction labor."
    ],
    documents: [
      "Form III (Certificate of Registration of the Principal Employer)",
      "Form V (Certificate issued by Principal Employer to the Contractor)",
      "Partnership Deed / Incorporation Certificate",
      "EPF and ESIC registration certificates of the contractor",
      "PAN and Aadhaar of the contractor/signatory"
    ],
    process: [
      "The principal employer registers their establishment and obtains Form III.",
      "The principal employer issues Form V to the contractor.",
      "The contractor submits the licence application online on the Shram Suvidha portal or State Labour portal.",
      "Pay the licensing fees and security deposit based on the worker count.",
      "Labour department reviews and issues the Contract Labour Licence."
    ],
    timeframe: "15-20 working days",
    validity: "1 Financial Year (requires annual renewal)"
  },
  {
    id: "detailed-project-report",
    title: "Detailed Project Report (DPR) Services",
    category: "Compliance & Other",
    subCategory: "Other Services",
    description: "A comprehensive project report prepared by financial consultants and engineers. It details the technical, commercial, financial, and operational feasibility of a proposed industrial or infrastructure project, required to secure bank term loans and state/central government subsidies.",
    keyPoints: [
      "Essential for securing bank financing and venture capital.",
      "Required for registering under central government subsidy schemes (MoFPI, NLM, etc.).",
      "Includes market analysis, raw material sourcing plans, and machinery layouts.",
      "Contains detailed financial projections (Balance Sheet, Cash Flow, DSCR, IRR, BEP) for 5-10 years."
    ],
    documents: [
      "Promoters net worth statement and background profile",
      "Land allocation details and construction quotes",
      "Quotations of plant and machinery to be installed",
      "Market feasibility survey or target customer list",
      "Detailed process chart of the manufacturing unit"
    ],
    process: [
      "Conduct discussions with promoters to outline project size, machinery details, and capacity.",
      "Gather quotes for civil works and processing machinery.",
      "Perform financial modeling to project margins, cash flows, and payback periods.",
      "Compile the technical, marketing, and financial chapters into a structured document.",
      "Review the draft with the promoters and finalize the DPR for bank/government submission."
    ],
    timeframe: "10-15 working days",
    validity: "Project-specific"
  },
  {
    id: "itr-filing",
    title: "Income Tax Return (ITR) Filing",
    category: "Income Tax",
    subCategory: "Income Tax Services",
    description: "Professional filing of Income Tax Returns for salaried individuals, business owners, professionals, freelancers, partnerships, LLPs, and companies, ensuring maximum tax optimization and zero compliance errors.",
    keyPoints: [
      "Filing for Salaried, Business, Professional, Presumptive (44AD/ADA/AE), LLPs & Corporates.",
      "Optimize liabilities using legal deductions under Chapter VI-A (80C, 80D, 80G, etc.).",
      "Reconciliation of tax payments against AIS, TIS, and Form 26AS reports.",
      "Specialist support for capital gains (property, shares) and foreign asset reporting."
    ],
    documents: [
      "Form 16 / Form 16A (TDS Certificates)",
      "Bank Account Statements & Interest Certificates",
      "Investment Proofs (PPF, LIC, ELSS, Housing loan certificates)",
      "Financial Books or Balance Sheets (for businesses & professionals)"
    ],
    process: [
      "Collate details on salary, investments, bank interest, and transaction ledger.",
      "Download and audit the Annual Information Statement (AIS) and Form 26AS.",
      "Reconcile taxes, offset liabilities, and prepare the correct ITR Form draft.",
      "File ITR online via the Income Tax portal and complete Aadhaar OTP e-verification."
    ],
    timeframe: "2-4 working days",
    validity: "Assessment Year filing compliance"
  },
  {
    id: "pan-tan-registration",
    title: "PAN, TAN & Tax Registration Services",
    category: "Income Tax",
    subCategory: "Income Tax Services",
    description: "End-to-end processing for Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) registrations, name corrections, status updates, and Aadhaar-linkage compliance.",
    keyPoints: [
      "Mandatory registrations for running corporate accounts and commercial operations.",
      "Avoid penal TDS rates (up to 20%) by securing active, correct TAN mappings.",
      "Fast-track processing for corporate applications and NRI status mappings."
    ],
    documents: [
      "Identity Proof (Aadhaar, Voter Card, Passport)",
      "Address Proof of promoters and commercial office premises",
      "Certificate of Incorporation or Partnership Deed (for companies & firms)"
    ],
    process: [
      "Fill online PAN/TAN application (Form 49A/49B) with verified company details.",
      "Pay required application and administrative fees online.",
      "Submit digital signatures or physical receipts to the processing agency.",
      "Digtally signed TAN/PAN is emailed, and physical card is delivered via post."
    ],
    timeframe: "3-7 working days",
    validity: "Permanent / Lifetime"
  },
  {
    id: "tax-planning-advisory",
    title: "Income Tax Planning & Advisory",
    category: "Income Tax",
    subCategory: "Income Tax Services",
    description: "Personalized, legal tax planning strategies to minimize liabilities for individuals, startups, exporters, and corporations while aligning fully with tax provisions.",
    keyPoints: [
      "Advisory on Presumptive Taxation benefits (Sec 44AD/44ADA) for small businesses.",
      "Capital Gains exemption planning (Sec 54, 54F, 54EC) for property and share sales.",
      "Strategic structuring of business transactions and residential status advisory."
    ],
    documents: [
      "Audited financial statements or projected income computations",
      "Previous year's ITR copies",
      "Details of proposed investments, asset sales, or capital transactions"
    ],
    process: [
      "Analyze the client's current source of income, balance sheets, and tax brackets.",
      "Evaluate available tax exemptions, deductions, and presumptive schemes.",
      "Deliver a custom tax planning summary indicating optimal tax-saving measures.",
      "Track and schedule quarterly advance tax payments to avoid interest penalties."
    ],
    timeframe: "3-5 working days",
    validity: "Ongoing / Annual advisory"
  },
  {
    id: "tds-tcs-consultancy",
    title: "TDS & TCS Compliance & Returns",
    category: "Income Tax",
    subCategory: "Income Tax Services",
    description: "Comprehensive assistance in deducting, depositing, and filing quarterly returns for Tax Deducted at Source (TDS) and Tax Collected at Source (TCS).",
    keyPoints: [
      "Quarterly return filings for Form 24Q (Salary), 26Q (Non-Salary), and 27Q (Foreign payments).",
      "Resolution of PAN errors, mismatch notices, and late fee demands on TRACES.",
      "Assistance in securing Lower Deduction Certificates from the tax department."
    ],
    documents: [
      "TDS challan deposits",
      "Deduction register matching payments to vendor/employee PAN details",
      "TRACES login credentials and previous quarterly statements"
    ],
    process: [
      "Verify applicable TDS rates (e.g. contracting, professional fees, commission).",
      "Deduct TDS and deposit the amounts online into the bank on or before due dates.",
      "Prepare quarterly TDS text files using official return preparation utilities.",
      "File returns online, download Form 16/16A certificates, and distribute to vendors."
    ],
    timeframe: "Quarterly compliance cycles",
    validity: "Periodic returns filing"
  },
  {
    id: "income-tax-notice-appeals",
    title: "Notice Assistance, Assessments & Appeals",
    category: "Income Tax",
    subCategory: "Income Tax Services",
    description: "Expert assistance drafting replies to Income Tax notices, representing clients during faceless assessments, and preparing appeals before appellate authorities.",
    keyPoints: [
      "Professional response drafting for scrutiny, demand, and mismatch notices.",
      "Coordination with experienced CAs for representation during tax audit and assessment.",
      "Drafting and filing CIT (Appeals) documentation, stay petitions, and dispute resolution."
    ],
    documents: [
      "Income Tax notice received (e.g. Sec 143(1), 143(2), 148, or 156)",
      "Supporting ledgers, invoices, bank statements, and tax computations",
      "Previous assessment records and audited accounts where applicable"
    ],
    process: [
      "Review the notice requirements, identify target issues, and fetch supporting data.",
      "Draft a structured, legally sound explanation referencing appropriate tax laws.",
      "Upload documents on the e-Proceeding tab of the Income Tax portal.",
      "Monitor status and submit supplementary details or appeals if required."
    ],
    timeframe: "Case-dependent (typically 5-15 working days)",
    validity: "Case-specific duration"
  }
];
