import { NavigationItem } from "../interfaces/navigation";

export const navigationConfig: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    type: "link"
  },
  {
    label: "DGFT",
    href: "/dgft-consultants",
    type: "mega",
    widthClass: "w-[1180px] max-w-[95vw]",
    columns: [
      {
        title: "Certifications",
        icon: "fas fa-certificate",
        groups: [
          {
            title: "Primary Certification",
            links: [
              { label: "RCMC", href: "/dgft-consultants#rcmc-registration-certificate" },
              { label: "IEC", href: "/dgft-consultants#iec-importer-exporter-code" },
              { label: "DSC", href: "/dgft-consultants#digital-signature" },
              { label: "Certificate of Origin", href: "/dgft-consultants#certificate-of-origin" }
            ]
          },
          {
            title: "Other Certificates",
            links: [
              { label: "Export House", href: "/dgft-consultants#status-export-house-certificate" },
              { label: "Free Sale Certificate", href: "/dgft-consultants#free-sale-certificate" },
              { label: "REX", href: "/dgft-consultants#rex" }
            ]
          },
          {
            title: "Monitoring System",
            links: [
              { label: "CHIMS", href: "/dgft-consultants#chip-import-monitoring-system" },
              { label: "SIMS", href: "/dgft-consultants#steel-import-monitoring-system" },
              { label: "PIMS", href: "/dgft-consultants#pims" },
              { label: "NFMIMS", href: "/dgft-consultants#non-ferrous-metals-import-monitoring-system" },
              { label: "CIMS", href: "/dgft-consultants#coal-import-monitoring-system" }
            ]
          }
        ]
      },
      {
        title: "Duty Exemption",
        icon: "fas fa-file-signature",
        groups: [
          {
            title: "Advance Authorisation",
            href: "/dgft-consultants#advance-authorisation-scheme",
            links: [
              { label: "SION", href: "/dgft-consultants#advance-authorisation-sion" },
              { label: "Self Declaration", href: "/dgft-consultants#advance-authorisation-self-declaration" },
              { label: "Self Ratification", href: "/dgft-consultants#advance-authorisation-self-ratification" },
              { label: "Net-to-Net", href: "/dgft-consultants#advance-authorisation-net-to-net" },
              { label: "Repeat Basis", href: "/dgft-consultants#advance-authorisation-repeat-basis" },
              { label: "Packing Materials", href: "/dgft-consultants#advance-authorisation-packing-material" }
            ]
          },
          {
            title: "Compliance",
            links: [
              { label: "AA EO Extension", href: "/dgft-consultants#advance-authorisation-eo-extension" },
              { label: "AA EODC / Surrender", href: "/dgft-consultants#advance-authorisation-eodc" }
            ]
          }
        ]
      },
      {
        title: "EPCG & Incentives",
        icon: "fas fa-cogs",
        groups: [
          {
            title: "Fresh EPCG",
            href: "/dgft-consultants#epcg-scheme",
            links: [
              { label: "Direct Import", href: "/dgft-consultants#epcg-direct-import" },
              { label: "Indian Purchase", href: "/dgft-consultants#epcg-indian-purchase" },
              { label: "Spares Import", href: "/dgft-consultants#epcg-spares-import" }
            ]
          },
          {
            title: "EPCG Compliance",
            links: [
              { label: "EPCG Extension", href: "/dgft-consultants#epcg-extension" },
              { label: "EPCG Closure", href: "/dgft-consultants#epcg-closure" }
            ]
          },
          {
            title: "Duty Remission",
            links: [
              { label: "RoDTEP", href: "/dgft-consultants#RoDTEP-scheme" },
              { label: "Duty Drawback (DBK)", href: "/dgft-consultants#Duty-Drawback" },
              { label: "Interest Equalization", href: "/dgft-consultants#interest-equalization-scheme-ies" }
            ]
          }
        ]
      },
      {
        title: "Licences",
        icon: "fas fa-id-card",
        groups: [
          {
            title: "DGFT Licences",
            links: [
              { label: "Restricted Licences", href: "/dgft-consultants#restricted-authorisations-for-import-and-export-india" },
              { label: "Restricted Import", href: "/dgft-consultants#restricted-import", indent: true },
              { label: "Restricted Export", href: "/dgft-consultants#restricted-export", indent: true },
              { label: "SCOMET", href: "/dgft-consultants#scomet-authorisation" }
            ]
          },
          {
            title: "IEM",
            href: "/dgft-consultants#iem-industrial-entrepreneur-memorandum",
            links: [
              { label: "IEM Part-A", href: "/dgft-consultants#iem-part-a" },
              { label: "IEM Part-B", href: "/dgft-consultants#iem-part-b" }
            ]
          },
          {
            title: "FSSAI",
            href: "/dgft-consultants#FSSAI",
            links: [
              { label: "Fresh Central", href: "/dgft-consultants#fssai-central-license" },
              { label: "Fresh State", href: "/dgft-consultants#fssai-state-license" },
              { label: "Returns", href: "/dgft-consultants#fssai-returns" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Subsidies",
    href: "/industrial-subsidies",
    type: "mega",
    widthClass: "w-[620px] max-w-[90vw]",
    columns: [
      {
        title: "Central Govt Schemes",
        icon: "fas fa-university",
        groups: [
          {
            title: "",
            links: [
              { label: "MoFPI - APC", href: "/industrial-subsidies#agro-processing-cluster" },
              { label: "MoFPI - CEFPPC", href: "/industrial-subsidies#creation-expansion-of-food-processing-preservation-capacity-scheme" },
              { label: "MoFPI - ICC", href: "/industrial-subsidies#integrated-cold-chain" },
              { label: "MoFPI - MFP", href: "/industrial-subsidies#mega-food-park" },
              { label: "MoFPI - Greens", href: "/industrial-subsidies#operation-greens" },
              { label: "NABARD - Primary Processing", href: "/industrial-subsidies#nabard-primary-processing" },
              { label: "NABARD - Silos", href: "/industrial-subsidies#nabard-silos" },
              { label: "NABARD - Godowns", href: "/industrial-subsidies#rural-godowns" },
              { label: "NLM - Poultry", href: "/industrial-subsidies#rural-poultry-project" },
              { label: "NLM - Sheep & Goat", href: "/industrial-subsidies#sheep-goat-breeding-farm" },
              { label: "NLM - Fodder", href: "/industrial-subsidies#fodder-value-addition-units" },
              { label: "NLM - Pig Farm", href: "/industrial-subsidies#pig-breeding-farm" },
              { label: "APEDA - Infra", href: "/industrial-subsidies#apeda-infra" },
              { label: "APEDA - Pack House", href: "/industrial-subsidies#apeda-pack-house" },
              { label: "AHIDF", href: "/industrial-subsidies#ahidf-subsidy-consultants" },
              { label: "Agri Infrastructure", href: "/industrial-subsidies#NABARD-Agriculture-Infrastructure-Fund" },
              { label: "MNRE", href: "/industrial-subsidies#ministry-of-new-and-renewable-energy" }
            ]
          }
        ]
      },
      {
        title: "State Govt Schemes",
        icon: "fas fa-map-marker-alt",
        groups: [
          {
            title: "",
            links: [
              { label: "APFPS / AP Schemes", href: "/industrial-subsidies#Andhra-Pradesh-State-Schemes" },
              { label: "Telangana (TG-DIC)", href: "/industrial-subsidies#telangana-state-schemes" },
              { label: "Karnataka (KS-DIC)", href: "/industrial-subsidies#karnataka-state-schemes" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Customs",
    href: "/Customs-House-Agent-Services",
    type: "mega",
    widthClass: "w-[820px] max-w-[92vw]",
    columns: [
      {
        title: "Customs Services",
        icon: "fas fa-ship",
        groups: [
          {
            title: "Core Operations",
            links: [
              { label: "Freight Forwarding", href: "/Customs-House-Agent-Services#freight-forwarding-services" },
              { label: "Customs Clearance", href: "/Customs-House-Agent-Services#Customs-Clearance" },
              { label: "Transport Services", href: "/Customs-House-Agent-Services#Container-Transportation-Services" }
            ]
          },
          {
            title: "Customs Duty Schemes",
            links: [
              { label: "MOOWR Scheme", href: "/Customs-House-Agent-Services#moowr-scheme" }
            ]
          },
          {
            title: "Duty Refund",
            links: [
              { label: "ADDL SAD / 4% Refund", href: "/Customs-House-Agent-Services#customs-addl-sad-4-percent-refund" },
              { label: "1% RD / SVB", href: "/Customs-House-Agent-Services#customs-svb-1-percent-rd" },
              { label: "Section 74 / Re-Export", href: "/Customs-House-Agent-Services#customs-section-74-re-export" },
              { label: "Excess / Wrong Paid Refund", href: "/Customs-House-Agent-Services#customs-excess-wrong-paid-refund" },
              { label: "Brand Rate Fixation", href: "/Customs-House-Agent-Services#customs-dbk-brand-rate-fixation" },
              { label: "Customs Appeal Matters", href: "/Customs-House-Agent-Services#customs-appeal-matters" },
              { label: "CESTAT / Tribunal Matters", href: "/Customs-House-Agent-Services#customs-tribunal-cestat-matters" }
            ]
          }
        ]
      },
      {
        title: "Registrations & Compliance",
        icon: "fas fa-stamp",
        groups: [
          {
            title: "AEO & Facilitation",
            href: "/Customs-House-Agent-Services#Authorized-Economic-Operator",
            links: [
              { label: "AEO - T1", href: "/Customs-House-Agent-Services#authorized-economic-operator-aeo-t1" },
              { label: "AEO - T2", href: "/Customs-House-Agent-Services#authorized-economic-operator-aeo-t2" },
              { label: "AEO - T3", href: "/Customs-House-Agent-Services#authorized-economic-operator-aeo-t3" },
              { label: "AEO - LO", href: "/Customs-House-Agent-Services#authorized-economic-operator-aeo-lo" },
              { label: "Self Sealing Permission", href: "/Customs-House-Agent-Services#self-sealing-permission" }
            ]
          },
          {
            title: "Registrations",
            href: "/Customs-House-Agent-Services#EXIM-Licences-Registrations",
            links: [
              { label: "EPR Registration", href: "/Customs-House-Agent-Services#epr-certificate-registration" },
              { label: "Cus-AD Code", href: "/Customs-House-Agent-Services#customs-ad-code-registration" },
              { label: "IFSC Code Reg", href: "/Customs-House-Agent-Services#icegate-ifsc-code-registration" },
              { label: "IceGate Reg", href: "/Customs-House-Agent-Services#icegate-registration" },
              { label: "First Time Reg", href: "/Customs-House-Agent-Services#customs-first-time-registration" },
              { label: "Redemption of Old Licence", href: "/Customs-House-Agent-Services#customs-redemption-of-old-licence" },
              { label: "Export IGST Errors (SB001-SB009)", href: "/Customs-House-Agent-Services#customs-igst-refund-errors" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "GST & Tax Services",
    href: "/Taxation",
    type: "mega",
    widthClass: "w-[820px] max-w-[92vw]",
    columns: [
      {
        title: "GST Services",
        icon: "fas fa-receipt",
        groups: [
          {
            title: "Core Filings & Refund",
            links: [
              { label: "GST Registration", href: "/Taxation#gst-registration-certificate" },
              { label: "GST Returns Filing", href: "/Taxation#gst-returns" },
              { label: "Deemed Export Refund", href: "/Taxation#gst-refund-deemed-export" }
            ]
          },
          {
            title: "GST Compliance",
            links: [
              { label: "GST LUT for Export", href: "/Taxation#gst-letter-of-undertaking-lut" },
              { label: "GST Pay Certificate", href: "/Taxation#gst-pay-certificate" }
            ]
          }
        ]
      },
      {
        title: "Income Tax Services",
        icon: "fas fa-calculator",
        groups: [
          {
            title: "Taxation & Planning",
            links: [
              { label: "ITR Return Filing", href: "/Taxation#itr-filing" },
              { label: "Tax Planning & Advisory", href: "/Taxation#tax-planning-advisory" },
              { label: "PAN & TAN Registration", href: "/Taxation#pan-tan-registration" }
            ]
          },
          {
            title: "TDS & Notice",
            links: [
              { label: "TDS & TCS Returns", href: "/Taxation#tds-tcs-consultancy" },
              { label: "Scrutiny & Notice Help", href: "/Taxation#income-tax-notice-appeals" }
            ]
          }
        ]
      },
      {
        title: "Business Compliance",
        icon: "fas fa-briefcase",
        groups: [
          {
            title: "Corporate Filings",
            links: [
              { label: "Labour License", href: "/Taxation#labour-licence" },
              { label: "Detailed Project Report (DPR)", href: "/Taxation#detailed-project-report" }
            ]
          }
        ]
      }
    ]
  },

  {
    label: "Contact Us",
    href: "/contact-us",
    type: "link"
  },
  {
    label: "About Us",
    href: "/about-us",
    type: "link"
  }
];
