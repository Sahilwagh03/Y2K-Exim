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
  // ==========================================
  // SECTION 1: GST Services (12 Categories)
  // ==========================================
  {
    id: "gst-registration-services",
    title: "GST Registration Services",
    category: "GST",
    subCategory: "GST Registration & Returns",
    description: "Comprehensive GST registration solutions for proprietorships, partnerships, LLPs, private limited companies, trusts, and societies across India, including amendments, additional business places, composition scheme, and revocation of cancellation.",
    keyPoints: [
      "New GST Registration",
      "GST Registration Amendment",
      "Additional Place of Business Registration",
      "GST Cancellation",
      "Revocation of GST Cancellation",
      "Composition Scheme Registration",
      "GST Registration for Proprietorship, Partnership, LLP, Private Limited Company, Trust and Society"
    ],
    documents: [
      "PAN Card & Aadhaar of Business and Promoters / Directors",
      "Certificate of Incorporation / Partnership Deed / Trust Deed",
      "Proof of Business Premises (Rent Agreement / Property Tax receipt / Consent Letter)",
      "Bank Account Proof (Cancelled Cheque / Bank Statement)",
      "Board Resolution / Authorization Letter for Signatory"
    ],
    process: [
      "Submit Part-A of GST registration on the GST Portal with PAN, Email, and Mobile.",
      "Complete Part-B with business jurisdiction, promoter details, and premises proof.",
      "Complete Aadhaar OTP authentication or biometric verification.",
      "Respond to officer clarifications or queries (Form REG-03) if issued.",
      "System generates 15-digit GSTIN and issues GST Certificate (Form REG-06)."
    ],
    timeframe: "3-5 working days",
    validity: "Lifetime (provided periodic returns are filed)"
  },
  {
    id: "gst-return-filing",
    title: "GST Return Filing",
    category: "GST",
    subCategory: "GST Registration & Returns",
    description: "End-to-end periodic GST return filing services ensuring accurate tax liability calculation, GSTR-2B ITC matching, and full annual GST compliance to prevent penalties, interest, and e-way bill blocking.",
    keyPoints: [
      "GSTR-1 (Outward Sales Return)",
      "GSTR-3B (Summary Tax Payment Return)",
      "GSTR-9 Annual Return",
      "GSTR-9C Reconciliation Statement",
      "Quarterly Return Filing (QRMP Scheme)",
      "Monthly Return Filing",
      "Annual GST Compliance"
    ],
    documents: [
      "Sales Register (Outward Taxable & Zero-Rated Supplies)",
      "Purchase Register (Inward Taxable Supplies & Taxes Paid)",
      "GSTR-2B Automated ITC Reconciliation Sheet",
      "Electronic Cash & Credit Ledger statements",
      "Audited Financial Statements (for GSTR-9 / 9C)"
    ],
    process: [
      "Reconcile sales data and upload outward supply invoices to generate GSTR-1.",
      "Match inward purchase registers against auto-populated GSTR-2B statements.",
      "Compute eligible Input Tax Credit (ITC) and net tax payable under CGST, SGST, and IGST.",
      "Draft GSTR-3B, offset tax liability via ITC & electronic cash ledger, and file return.",
      "Prepare annual reconciliation under GSTR-9 and GSTR-9C."
    ],
    timeframe: "Monthly / Quarterly / Annual recurring compliance",
    validity: "Periodic returns filing"
  },
  {
    id: "gst-refund-services",
    title: "GST Refund Services",
    category: "GST",
    subCategory: "GST Refunds & Exporters",
    description: "End-to-end consultancy and filing support for various GST refund claims, including export refunds under LUT, IGST paid exports, unutilized Input Tax Credit, inverted duty structures, and cash ledger balances.",
    keyPoints: [
      "Export Refund under Letter of Undertaking (LUT)",
      "Export IGST Refund",
      "Unutilized Input Tax Credit (ITC) Refund",
      "Excess GST Paid Refund",
      "Electronic Cash Ledger Refund",
      "Inverted Duty Structure Refund",
      "Wrong Tax Paid Refund (CGST/SGST or IGST)",
      "Refund arising from Assessment or Appeal Orders",
      "GST Refund Follow-up with GST Authorities"
    ],
    documents: [
      "GST Refund Application (Form RFD-01)",
      "Export Invoices, Shipping Bills, and eBRC / EDPMS Certificates",
      "Statement of Inward & Outward Supplies Reconciliation",
      "CA Certificate certifying non-unjust enrichment (Annexure 2)",
      "Copy of Assessment / Appeal Order (if applicable)"
    ],
    process: [
      "Audit financial records and compute maximum allowable refund under GST rules.",
      "Draft and submit electronic application Form RFD-01 on the GST portal.",
      "Upload supporting shipping bills, GSTR-1, GSTR-3B, and bank realization data.",
      "Respond to officer queries or Deficiency Memos (RFD-03) within prescribed timelines.",
      "Track Sanction Order (RFD-06) and direct credit of refund amount into bank account."
    ],
    timeframe: "30-60 days",
    validity: "Claims must be filed within 2 years from the relevant date"
  },
  {
    id: "export-gst-consultancy",
    title: "Export GST Consultancy",
    category: "GST",
    subCategory: "GST Refunds & Exporters",
    description: "Specialized GST consultancy tailored for exporters to execute zero-rated supplies under LUT or IGST payment, manage SEZ supplies, resolve customs GSTN error codes, and maintain full export compliance.",
    keyPoints: [
      "Export under LUT",
      "Export with IGST Payment",
      "Merchant Export Consultancy",
      "SEZ Supplies",
      "Deemed Exports",
      "Shipping Bill & GST Data Reconciliation",
      "GSTN Error Resolution (SB000, SB001, SB005, SB006)",
      "Export Refund Documentation",
      "Export GST Compliance",
      "Coordination with Customs and GST Authorities"
    ],
    documents: [
      "LUT Acknowledgment (Form RFD-11)",
      "Export Invoices, Bills of Lading, and Packing Lists",
      "ICEGATE Shipping Bills & Customs Clearance Reports",
      "eBRC / FIRC Certificates of foreign remittance",
      "SEZ Endorsement Certificate (for SEZ supplies)"
    ],
    process: [
      "Evaluate business model and determine optimal export route (LUT vs. IGST Payment).",
      "File annual Letter of Undertaking (LUT) prior to commencement of financial year.",
      "Reconcile GSTR-1 Table 6A with ICEGATE portal export records.",
      "Clear mismatch errors with port customs officers for pending IGST refunds.",
      "Provide ongoing export compliance advisory and authority coordination."
    ],
    timeframe: "Ongoing advisory & clearance",
    validity: "1 Financial Year for LUT (Renewed annually in April)"
  },
  {
    id: "itc-consultancy",
    title: "Input Tax Credit (ITC) Consultancy",
    category: "GST",
    subCategory: "ITC & Compliance Review",
    description: "Comprehensive Input Tax Credit (ITC) verification, GSTR-2B automated matching, blocked credit analysis under Section 17(5), vendor compliance review, and systematic credit recovery.",
    keyPoints: [
      "ITC Verification",
      "ITC Reconciliation",
      "GSTR-2B Matching",
      "Vendor Compliance Review",
      "ITC Recovery",
      "Blocked Credit Analysis",
      "ITC Reversal Consultancy"
    ],
    documents: [
      "Purchase Register & Inward Tax Invoices",
      "Downloaded GSTR-2A & GSTR-2B Statements",
      "Vendor GSTIN list and compliance status reports",
      "Debit / Credit notes for inward supplies"
    ],
    process: [
      "Execute automated match-making between purchase registers and GSTR-2B.",
      "Identify non-compliant vendors who failed to file GSTR-1 returns.",
      "Segregate eligible, ineligible (Sec 17(5)), and common ITC requiring reversal.",
      "Issue automated notifications to defaulting suppliers for tax filing.",
      "Optimize ITC utilization in GSTR-3B to save cash outflows legally."
    ],
    timeframe: "Monthly / Quarterly compliance cycles",
    validity: "Continuous monitoring"
  },
  {
    id: "gst-compliance-review",
    title: "GST Compliance Review",
    category: "GST",
    subCategory: "ITC & Compliance Review",
    description: "Proactive health check and internal audit of GST operations to identify compliance gaps, manage tax risks, implement standard operating procedures (SOPs), and train internal staff.",
    keyPoints: [
      "GST Health Check",
      "Compliance Review",
      "Risk Assessment",
      "Internal GST Audit",
      "SOP Preparation",
      "Staff Training"
    ],
    documents: [
      "Trial Balance & General Ledgers for past 1-3 years",
      "GSTR-1, GSTR-3B, and GSTR-9 return filings",
      "Sample Outward Tax Invoices & Purchase Bills",
      "E-Way Bill logs and Customs Shipping Bills"
    ],
    process: [
      "Conduct complete diagnostic review of sales, purchases, and tax ledger balances.",
      "Cross-verify GST return numbers against audited financial books.",
      "Identify potential risk areas, short payments, or ineligible ITC claims.",
      "Formulate custom GST Standard Operating Procedures (SOPs) for accounting teams.",
      "Deliver interactive staff training sessions for error-free day-to-day operations."
    ],
    timeframe: "7-10 working days",
    validity: "Annual / Semi-annual health check"
  },
  {
    id: "gst-notices-representation",
    title: "GST Notices & Department Representation",
    category: "GST",
    subCategory: "Department Notices & Litigation",
    description: "Professional assistance for all GST departmental proceedings, Show Cause Notices (SCN), demand notices, deficiency memo replies, and personal hearing representation before tax officers.",
    keyPoints: [
      "GST Notice Review",
      "Reply Drafting",
      "Show Cause Notice Representation",
      "Refund Deficiency Memo Replies",
      "GST Demand Notices",
      "Registration Notices",
      "Personal Hearing Representation",
      "Follow-up with GST Authorities"
    ],
    documents: [
      "Copy of GST Notice / SCN / DRC-01 received",
      "Books of Accounts, Sales/Purchase Registers, and Bank Statements",
      "Filed copies of GSTR-1, GSTR-3B & GSTR-9 returns",
      "Supporting evidence and documentary proofs"
    ],
    process: [
      "Thoroughly analyze the allegations, legal provisions, and demand figures in the notice.",
      "Collate supporting financial ledgers, tax invoices, and statutory returns.",
      "Draft a legally sound, technical response backed by GST statutory provisions and case laws.",
      "Represent the client during Personal Hearings (PH) before assessing authorities.",
      "Follow up with authorities until formal closure or drop of proceedings."
    ],
    timeframe: "7-15 working days per notice",
    validity: "Case-specific response timeline"
  },
  {
    id: "gst-appeals-litigation",
    title: "GST Appeals & Litigation Support",
    category: "GST",
    subCategory: "Department Notices & Litigation",
    description: "Expert legal support for challenging adverse GST orders, demand assessments, and refund rejection orders before Appellate Authorities (Joint Commissioner / Commissioner Appeals).",
    keyPoints: [
      "Appeal Preparation",
      "Refund Rejection Appeals",
      "Demand Order Appeals",
      "Rectification Applications",
      "Stay Applications",
      "Representation before Appellate Authorities"
    ],
    documents: [
      "Adverse Order / Order-in-Original (Form DRC-07 / RFD-06)",
      "Statement of Facts and Grounds of Appeal",
      "Proof of mandatory statutory pre-deposit payment (Form DRC-03)",
      "Letter of Authorization / Vakalatnama"
    ],
    process: [
      "Evaluate legal merits of the adverse order and prepare Grounds of Appeal.",
      "Draft Form APL-01 with detailed factual and legal submissions.",
      "Pay mandatory statutory pre-deposit via GST portal electronic cash ledger.",
      "E-file appeal bundle on GST portal and submit hard copies to Appellate Authority.",
      "Represent client during appellate hearings and secure favorable order."
    ],
    timeframe: "30-90 days",
    validity: "Appeals must be filed within 90 days of order receipt"
  },
  {
    id: "gst-audit-assessment",
    title: "GST Audit & Assessment",
    category: "GST",
    subCategory: "Department Notices & Litigation",
    description: "End-to-end support for GST departmental audits (Section 65), special audits (Section 66), annual reconciliations, assessment proceedings, and compliance verification.",
    keyPoints: [
      "GST Audit Assistance",
      "Department Audit Support",
      "Annual GST Reconciliation",
      "Assessment Proceedings",
      "Documentation Review",
      "Compliance Verification"
    ],
    documents: [
      "Audited Financial Statements & Trial Balance",
      "Annual Reconciliation Statements (GSTR-9C)",
      "Tax Invoices, Debit/Credit Notes, and E-Way Bills",
      "Stock Registers and Manufacturing Records",
      "ITC Ledger Reconciliations"
    ],
    process: [
      "Perform pre-audit inspection of financial records to resolve potential discrepancies.",
      "Prepare structured replies for initial audit notice (Form ADT-01).",
      "Coordinate with visiting departmental audit teams and present documents.",
      "Submit written replies for audit findings (Form ADT-02).",
      "Assist in final closure of audit proceedings without penalty imposition."
    ],
    timeframe: "15-30 working days",
    validity: "Financial Year audit cycle"
  },
  {
    id: "eway-bill-services",
    title: "E-Way Bill Services",
    category: "GST",
    subCategory: "Digital GST & Advisory",
    description: "Complete E-Way bill management including portal registration, generation, cancellation, distance validity extensions, compliance consultancy, and vehicle detention penalty representation.",
    keyPoints: [
      "E-Way Bill Generation",
      "Cancellation",
      "Amendment",
      "Compliance Consultancy",
      "Penalty Representation"
    ],
    documents: [
      "Tax Invoice / Delivery Challan / Bill of Entry",
      "Transporter ID, Lorry Receipt (LR), or Vehicle Registration Number",
      "Goods HSN Code, quantity, and value details",
      "Detention Order (Form MOV-02 / MOV-06) if intercepted"
    ],
    process: [
      "Setup E-Way bill portal account and API integration with ERP systems.",
      "Generate Part-A (Consignor/Consignee/Value) and Part-B (Transport details).",
      "Track consignment movement and extend validity for delayed transits.",
      "Handle vehicle interception cases under Section 129 / 130.",
      "Draft representation to release detained goods and vehicles."
    ],
    timeframe: "Real-time generation / 24-48 hrs for detention relief",
    validity: "Based on distance rules (1 day per 200 km for normal cargo)"
  },
  {
    id: "e-invoicing-consultancy",
    title: "E-Invoicing Consultancy",
    category: "GST",
    subCategory: "Digital GST & Advisory",
    description: "Seamless implementation of mandatory B2B E-Invoicing, IRN generation, QR code integration, ERP system alignment, and error resolution.",
    keyPoints: [
      "E-Invoice Registration",
      "IRN Related Issues",
      "E-Invoice Compliance",
      "System Implementation Guidance"
    ],
    documents: [
      "Business GSTIN & Accounting ERP System details",
      "Sample B2B Tax Invoices & Credit/Debit Notes",
      "GSP / ASP API integration credentials"
    ],
    process: [
      "Check applicability based on annual aggregate turnover threshold.",
      "Register entity on E-Invoice portal and configure API credentials.",
      "Map ERP fields to standard JSON schema (Form INV-01).",
      "Enable real-time Invoice Reference Number (IRN) & QR Code generation.",
      "Train billing staff and resolve IRN generation errors."
    ],
    timeframe: "3-7 working days setup / Real-time generation",
    validity: "Ongoing operational requirement"
  },
  {
    id: "gst-advisory-services",
    title: "GST Advisory Services",
    category: "GST",
    subCategory: "Digital GST & Advisory",
    description: "Expert opinion and strategic advisory on GST rate classification, HSN coding, place of supply, time of supply, valuation, composite/mixed supplies, job work, and cross-charge transactions.",
    keyPoints: [
      "GST Rate Classification",
      "HSN Classification",
      "Place of Supply",
      "Time of Supply",
      "Valuation under GST",
      "Composite & Mixed Supply",
      "Job Work Transactions",
      "Branch Transfer",
      "Cross Charge",
      "Industry-Specific GST Opinions"
    ],
    documents: [
      "Business Contracts & Service Level Agreements (SLAs)",
      "Product Technical Datasheets & Composition Details",
      "Invoicing & Supply Chain Flowcharts",
      "Inter-company transfer pricing agreements"
    ],
    process: [
      "Analyze commercial contracts, supply flows, and transaction agreements.",
      "Examine relevant GST statutes, notifications, circulars, and Advance Rulings.",
      "Determine correct HSN/SAC code and applicable GST rate structure.",
      "Issue formal legal Advisory Opinion with practical implementation steps.",
      "Assist in modifying contracts and billing workflows for legal tax optimization."
    ],
    timeframe: "3-5 working days",
    validity: "Ongoing advisory"
  },

  // ==========================================
  // SECTION 2: Income Tax Services (13 Categories)
  // ==========================================
  {
    id: "itr-filing",
    title: "Income Tax Return (ITR) Filing",
    category: "Income Tax",
    subCategory: "Income Tax Filings & Registrations",
    description: "Professional filing of Income Tax Returns for salaried individuals, business owners, professionals, freelancers, partnerships, LLPs, and companies, ensuring maximum tax optimization and zero compliance errors.",
    keyPoints: [
      "Filing for Salaried (ITR-1/2), Business (ITR-3/4), Presumptive (44AD/ADA/AE), LLPs & Corporates (ITR-5/6)",
      "Optimize liabilities using legal deductions under Chapter VI-A (80C, 80D, 80G, etc.)",
      "Reconciliation of tax payments against AIS, TIS, and Form 26AS reports",
      "Specialist support for capital gains (property, shares) and foreign asset reporting"
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
    subCategory: "Income Tax Filings & Registrations",
    description: "End-to-end processing for Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) registrations, name corrections, status updates, and Aadhaar-linkage compliance.",
    keyPoints: [
      "Mandatory registrations for corporate bank accounts and commercial operations",
      "Avoid penal TDS rates (up to 20%) by securing active, correct TAN mappings",
      "Fast-track processing for corporate applications and NRI status mappings"
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
      "Digitally signed TAN/PAN is emailed, and physical card is delivered via post."
    ],
    timeframe: "3-7 working days",
    validity: "Permanent / Lifetime"
  },
  {
    id: "tax-planning-advisory",
    title: "Income Tax Planning & Advisory",
    category: "Income Tax",
    subCategory: "Tax Planning & Advisory",
    description: "Our experts help you legally optimize your tax liability through effective, statute-backed individual, business, and corporate tax planning.",
    keyPoints: [
      "Individual Tax Planning",
      "Business Tax Planning",
      "Corporate Tax Planning",
      "Advance Tax Planning",
      "Presumptive Taxation Advisory",
      "Capital Gains Tax Planning",
      "Investment Tax Planning",
      "Residential Status Advisory",
      "International Tax Advisory",
      "Business Restructuring Advisory"
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
    title: "TDS & TCS Consultancy",
    category: "Income Tax",
    subCategory: "TDS, TCS & Advance Tax",
    description: "Comprehensive assistance for Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) compliance, quarterly return filings, corrections, reconciliation, and lower deduction certificate guidance.",
    keyPoints: [
      "TDS Return Filing (Form 24Q, 26Q, 27Q)",
      "TDS Compliance",
      "TDS Corrections",
      "TDS Reconciliation",
      "TDS Notice Assistance",
      "Lower Deduction Certificate Guidance (Form 13)",
      "TCS Compliance (Form 27EQ)"
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
    id: "advance-tax-self-assessment",
    title: "Advance Tax & Self-Assessment Tax",
    category: "Income Tax",
    subCategory: "TDS, TCS & Advance Tax",
    description: "Professional computation and guidance for advance tax installments and self-assessment tax payments to prevent heavy interest penalties under Sections 234B and 234C.",
    keyPoints: [
      "Advance Tax Computation",
      "Self-Assessment Tax Assistance",
      "Tax Liability Estimation",
      "Interest Calculation (Sec 234A/B/C)",
      "Tax Payment Guidance"
    ],
    documents: [
      "Estimated annual financial statements and profit projections",
      "Quarterly trial balance & revenue ledgers",
      "Form 26AS & AIS tax deduction records"
    ],
    process: [
      "Estimate annual total income and calculate gross tax liability.",
      "Subtract TDS/TCS credits to determine net advance tax obligation.",
      "Calculate quarterly payment installments (15%, 45%, 75%, 100%).",
      "Generate online challans (ITNS 280) and guide timely e-payment."
    ],
    timeframe: "Quarterly installments (June 15, Sept 15, Dec 15, Mar 15)",
    validity: "Financial Year installment cycle"
  },
  {
    id: "income-tax-notice-assistance",
    title: "Income Tax Notice Assistance",
    category: "Income Tax",
    subCategory: "Notices, Assessments & Litigation",
    description: "Our experienced consultants assist clients in reviewing, drafting replies, and representing before the Income Tax Department for all types of departmental notices.",
    keyPoints: [
      "Income Tax Notice Review",
      "Reply Drafting",
      "Defective Return Notices (Sec 139(9))",
      "Demand Notices (Sec 156)",
      "Faceless Assessment Assistance",
      "Income Tax Scrutiny Cases",
      "Documentation Support",
      "Representation & Follow-up before the Income Tax Department"
    ],
    documents: [
      "Copy of Income Tax notice received (e.g. Sec 139(9), 142(1), 143(1), 156)",
      "Filed copy of ITR and Computation of Income",
      "Bank statements, purchase/sales registers, and investment proofs"
    ],
    process: [
      "Analyze notice details, target points, and statutory response deadlines.",
      "Compile supporting financial documents and accounting ledgers.",
      "Draft a structured, legally sound written response with case laws.",
      "Submit electronic reply on the Income Tax e-Filing portal e-Proceedings tab."
    ],
    timeframe: "5-10 working days",
    validity: "Case-specific deadline"
  },
  {
    id: "income-tax-assessments",
    title: "Income Tax Assessments",
    category: "Income Tax",
    subCategory: "Notices, Assessments & Litigation",
    description: "Complete end-to-end technical support and representation for scrutiny assessments, reassessment proceedings, and departmental inquiries under the Income Tax Act.",
    keyPoints: [
      "Scrutiny Assessments (Sec 143(3))",
      "Reassessment Proceedings (Sec 147/148)",
      "Documentation Preparation",
      "Income Tax Department Representation",
      "Compliance Assistance"
    ],
    documents: [
      "Assessment notice & Questionnaire (Sec 142(1) / 143(2))",
      "Audited Financial Statements & Books of Accounts",
      "Bank Statements & Transaction Reconciliations"
    ],
    process: [
      "Audit financial ledgers against specific query items in the assessment notice.",
      "Prepare complete paperbook of documentary evidence and submissions.",
      "Upload submissions via Faceless Assessment Portal.",
      "Track assessment order (Sec 143(3)) and evaluate tax demand correctness."
    ],
    timeframe: "15-30 working days",
    validity: "Assessment Year statutory duration"
  },
  {
    id: "income-tax-appeals",
    title: "Income Tax Appeals",
    category: "Income Tax",
    subCategory: "Notices, Assessments & Litigation",
    description: "If your case requires legal remedies, our expert team provides complete assistance with drafting, filing, and representing income tax appeals before Appellate Authorities.",
    keyPoints: [
      "Appeal Preparation",
      "Appeal Filing (Form 35)",
      "Rectification Applications (Sec 154)",
      "Stay Petitions",
      "Representation before Appellate Authorities (CIT Appeals)",
      "Tax Dispute Resolution Support"
    ],
    documents: [
      "Assessment Order & Notice of Demand (Sec 156)",
      "Grounds of Appeal and Statement of Facts",
      "Proof of tax payment under protest / statutory appeal fees"
    ],
    process: [
      "Formulate strong legal grounds and facts of the case.",
      "Draft and e-file Form 35 on the Income Tax portal.",
      "Submit stay petitions if required to pause tax recovery actions.",
      "Represent client in virtual/faceless appeal hearings before CIT (Appeals)."
    ],
    timeframe: "30-90 days",
    validity: "Filing within 30 days of receiving assessment order"
  },
  {
    id: "tax-audit-support",
    title: "Tax Audit Support",
    category: "Income Tax",
    subCategory: "Notices, Assessments & Litigation",
    description: "Working through our experienced Chartered Accountant team, we provide full tax audit coordination, documentation review, and books audit under Section 44AB.",
    keyPoints: [
      "Tax Audit Coordination",
      "Audit Documentation Support",
      "Books of Accounts Review",
      "Compliance Verification",
      "Coordination during Audit Proceedings (Form 3CA/3CB & Form 3CD)"
    ],
    documents: [
      "Trial Balance, Profit & Loss Account, and Balance Sheet",
      "TDS & GST Reconciliation Statements",
      "Depreciation Schedules & Tax Deduction Registers"
    ],
    process: [
      "Perform preliminary audit of books of accounts to verify compliance.",
      "Audit clauses of Form 3CD (TDS, GST, related party transactions, disallowances).",
      "Coordinate with CA team for formal audit report signing.",
      "Upload digitally signed Tax Audit Report on the Income Tax Portal."
    ],
    timeframe: "7-15 working days",
    validity: "Financial Year audit compliance"
  },
  {
    id: "business-tax-consultancy",
    title: "Business Tax Consultancy",
    category: "Income Tax",
    subCategory: "Tax Planning & Advisory",
    description: "Specialized sector-specific tax consultancy designed for manufacturers, exporters, traders, logistics firms, startups, and MSMEs to optimize business tax structures.",
    keyPoints: [
      "Manufacturers",
      "Exporters & Importers",
      "Traders & Distributors",
      "Service Providers",
      "Logistics & Transportation Companies",
      "E-Commerce Businesses",
      "Startups & MSMEs",
      "Large Corporate Organizations"
    ],
    documents: [
      "Business Model & Operating Structure details",
      "Annual Financial Books & Revenue Statements",
      "Inter-company & Vendor Contracts"
    ],
    process: [
      "Identify sector-specific tax deductions, incentives, and depreciation benefits.",
      "Review operational contracts and entity structure for tax efficiency.",
      "Draft customized tax advisory memorandum for business decision-making.",
      "Assist in executing recommended corporate tax strategies."
    ],
    timeframe: "Ongoing / Annual advisory",
    validity: "Continuous business advisory"
  },
  {
    id: "capital-gains-consultancy",
    title: "Capital Gains Consultancy",
    category: "Income Tax",
    subCategory: "Capital Gains & Compliance",
    description: "Professional guidance for calculating, optimizing, and claiming statutory exemptions on taxation relating to property sales, shares, mutual funds, and business assets.",
    keyPoints: [
      "Sale of Property (Residential & Commercial)",
      "Sale of Shares & Securities",
      "Mutual Funds Taxation",
      "Sale of Business Assets",
      "Capital Gain Exemption Planning (Sec 54, 54EC, 54F, etc.)"
    ],
    documents: [
      "Property Sale & Purchase Deeds / Cost Indexation Proofs",
      "Demat Transaction Statements & Mutual Fund Capital Gain Statements",
      "Reinvestment Proofs (54EC Capital Gain Bonds / New Residential Property documents)"
    ],
    process: [
      "Determine short-term or long-term capital gain status and cost indexation.",
      "Compute exact tax liability under Section 112, 112A, and 111A.",
      "Advise on statutory exemption options (Sec 54, 54EC bonds, 54F).",
      "File ITR incorporating complete capital gains schedule."
    ],
    timeframe: "3-5 working days",
    validity: "Transaction-specific"
  },
  {
    id: "income-tax-compliance-services",
    title: "Income Tax Compliance Services",
    category: "Income Tax",
    subCategory: "Capital Gains & Compliance",
    description: "Structured tax compliance reviews, risk assessments, and health checks to identify gaps, maintain records, and adhere to compliance calendars.",
    keyPoints: [
      "Tax Compliance Review",
      "Risk Assessment",
      "Documentation Review",
      "Record Maintenance Guidance",
      "Compliance Calendar",
      "Business Tax Health Check"
    ],
    documents: [
      "Past 3 years ITR & Tax Audit Reports",
      "Form 26AS, AIS, and TIS Records",
      "General Ledgers and Accounting Registers"
    ],
    process: [
      "Review historical tax filings and accounting ledger entries.",
      "Identify potential non-compliance risks, interest exposures, or missing disclosures.",
      "Establish a customized annual compliance calendar.",
      "Issue comprehensive Business Tax Health Check Report."
    ],
    timeframe: "5-7 working days",
    validity: "Annual / Periodical review"
  },
  {
    id: "exim-tax-consultancy",
    title: "Specialized Consultancy for Exporters & Importers",
    category: "Income Tax",
    subCategory: "Tax Planning & Advisory",
    description: "Integrated income tax advisory leveraging Y2K Exim's international trade expertise to optimize tax treatment for foreign exchange gains, cross-border transactions, and export incentives.",
    keyPoints: [
      "Income Tax Advisory for Exporters",
      "Income Tax Advisory for Importers",
      "Business Tax Planning for Global Trade",
      "Export Documentation Support",
      "Coordination with GST, Customs & DGFT Compliance",
      "Tax Planning for International Trade Transactions"
    ],
    documents: [
      "Foreign Exchange Realization Statements (eBRC / FIRC)",
      "Shipping Bills, Import Bills of Entry, and Customs Valuations",
      "Export Orders & Overseas Vendor Contracts"
    ],
    process: [
      "Analyze cross-border transaction flows and foreign exchange tax treatment.",
      "Coordinate Income Tax compliance with Customs, GST, and DGFT frameworks.",
      "Optimize export profit tax structures and transfer pricing compliance.",
      "Provide ongoing specialized consultancy for EXIM enterprises."
    ],
    timeframe: "Ongoing advisory",
    validity: "Continuous EXIM tax support"
  },

  // ==========================================
  // SECTION 3: Business Compliance (2 Categories)
  // ==========================================
  {
    id: "labour-licence",
    title: "Contract Labour Licence",
    category: "Compliance & Other",
    subCategory: "Business Compliance",
    description: "A license required under the Contract Labour (Regulation and Abolition) Act, 1970. Mandatory for establishments and contractors employing contract workers to regulate working conditions and ensure welfare.",
    keyPoints: [
      "Mandatory for factory owners and infrastructure developers utilizing contractor labor",
      "Protects the principal employer from direct liabilities of contractor wages",
      "Ensures the facility maintains basic amenities like drinking water, restrooms, and safety gear",
      "Applies to security agencies, housekeeping contractors, and construction labor"
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
    subCategory: "Business Compliance",
    description: "Comprehensive project report detailing technical, commercial, financial, and operational feasibility of proposed industrial or infrastructure projects, required to secure bank loans and subsidies.",
    keyPoints: [
      "Essential for securing bank financing and venture capital",
      "Required for registering under central government subsidy schemes (MoFPI, NLM, etc.)",
      "Includes market analysis, raw material sourcing plans, and machinery layouts",
      "Contains detailed financial projections (Balance Sheet, Cash Flow, DSCR, IRR, BEP) for 5-10 years"
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
      "Compile technical, marketing, and financial chapters into a structured document.",
      "Review draft with promoters and finalize DPR for bank/government submission."
    ],
    timeframe: "10-15 working days",
    validity: "Project-specific"
  }
];
