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
              { label: "RCMC", href: "/rcmc-registration-certificate" },
              { label: "IEC", href: "/iec-importer-exporter-code" },
              { label: "DSC", href: "/digital-signature" },
              { label: "Certificate of Origin", href: "/certificate-of-origin" }
            ]
          },
          {
            title: "Other Certificates",
            links: [
              { label: "Export House", href: "/status-export-house-certificate" },
              { label: "Free Sale Certificate", href: "/free-sale-certificate" },
              { label: "REX", href: "/rex" }
            ]
          },
          {
            title: "Monitoring System",
            links: [
              { label: "CHIMS", href: "/chip-import-monitoring-system" },
              { label: "SIMS", href: "/steel-import-monitoring-system" },
              { label: "PIMS", href: "/pims" },
              { label: "NFMIMS", href: "/non-ferrous-metals-import-monitoring-system" },
              { label: "CIMS", href: "/coal-import-monitoring-system" }
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
            href: "/advance-authorisation-scheme",
            links: [
              { label: "SION", href: "/advance-authorisation-sion" },
              { label: "Self Declaration", href: "/advance-authorisation-self-declaration" },
              { label: "Self Ratification", href: "/advance-authorisation-self-ratification" },
              { label: "Net-to-Net", href: "/advance-authorisation-net-to-net" },
              { label: "Repeat Basis", href: "/advance-authorisation-repeat-basis" },
              { label: "Packing Materials", href: "/advance-authorisation-packing-material" }
            ]
          },
          {
            title: "Compliance",
            links: [
              { label: "AA EO Extension", href: "/advance-authorisation-eo-extension" },
              { label: "AA EODC / Surrender", href: "/advance-authorisation-eodc" }
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
            href: "/epcg-scheme",
            links: [
              { label: "Direct Import", href: "/epcg-direct-import" },
              { label: "Indian Purchase", href: "/epcg-indian-purchase" },
              { label: "Spares Import", href: "/epcg-spares-import" }
            ]
          },
          {
            title: "EPCG Compliance",
            links: [
              { label: "EPCG Extension", href: "/epcg-extension" },
              { label: "EPCG Closure", href: "/epcg-closure" }
            ]
          },
          {
            title: "Duty Remission",
            links: [
              { label: "RoDTEP", href: "/RoDTEP-scheme" },
              { label: "Duty Drawback (DBK)", href: "/Duty-Drawback" },
              { label: "Interest Equalization", href: "/interest-equalization-scheme-ies" }
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
              { label: "Restricted Licences", href: "/restricted-authorisations-for-import-and-export-india" },
              { label: "Restricted Import", href: "/restricted-import", indent: true },
              { label: "Restricted Export", href: "/restricted-export", indent: true },
              { label: "SCOMET", href: "/scomet-authorisation" }
            ]
          },
          {
            title: "IEM",
            href: "/iem-industrial-entrepreneur-memorandum",
            links: [
              { label: "IEM Part-A", href: "/iem-part-a" },
              { label: "IEM Part-B", href: "/iem-part-b" }
            ]
          },
          {
            title: "FSSAI",
            href: "/FSSAI",
            links: [
              { label: "Fresh Central", href: "/fssai-central-license" },
              { label: "Fresh State", href: "/fssai-state-license" },
              { label: "Returns", href: "/fssai-returns" }
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
              { label: "MoFPI - APC", href: "/agro-processing-cluster" },
              { label: "MoFPI - CEFPPC", href: "/creation-expansion-of-food-processing-preservation-capacity-scheme" },
              { label: "MoFPI - ICC", href: "/integrated-cold-chain" },
              { label: "MoFPI - MFP", href: "/mega-food-park" },
              { label: "MoFPI - Greens", href: "/operation-greens" },
              { label: "NABARD - Primary Processing", href: "/nabard-primary-processing" },
              { label: "NABARD - Silos", href: "/nabard-silos" },
              { label: "NABARD - Godowns", href: "/rural-godowns" },
              { label: "NLM - Poultry", href: "/rural-poultry-project" },
              { label: "NLM - Sheep & Goat", href: "/sheep-goat-breeding-farm" },
              { label: "NLM - Fodder", href: "/fodder-value-addition-units" },
              { label: "NLM - Pig Farm", href: "/pig-breeding-farm" },
              { label: "APEDA - Infra", href: "/apeda-infra" },
              { label: "APEDA - Pack House", href: "/apeda-pack-house" },
              { label: "AHIDF", href: "/ahidf-subsidy-consultants" },
              { label: "Agri Infrastructure", href: "/NABARD-Agriculture-Infrastructure-Fund" },
              { label: "MNRE", href: "/ministry-of-new-and-renewable-energy" }
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
              { label: "APFPS / AP Schemes", href: "/Andhra-Pradesh-State-Schemes" },
              { label: "Telangana (TG-DIC)", href: "/telangana-state-schemes" },
              { label: "Karnataka (KS-DIC)", href: "/karnataka-state-schemes" }
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
              { label: "Freight Forwarding", href: "/freight-forwarding-services" },
              { label: "Customs Clearance", href: "/Customs-Clearance" },
              { label: "Transport Services", href: "/Container-Transportation-Services" }
            ]
          },
          {
            title: "Customs Duty Schemes",
            links: [
              { label: "MOOWR Scheme", href: "/moowr-scheme" }
            ]
          },
          {
            title: "Duty Refund",
            links: [
              { label: "Brand Rate Fixation", href: "/customs-dbk-brand-rate-fixation" },
              { label: "Refund of Customs Duty", href: "/refund-of-customs-duty" },
              { label: "Customs Appeal", href: "/customs-appeal" }
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
            href: "/Authorized-Economic-Operator",
            links: [
              { label: "AEO - T1", href: "/authorized-economic-operator-aeo-t1" },
              { label: "AEO - T2", href: "/authorized-economic-operator-aeo-t2" },
              { label: "AEO - T3", href: "/authorized-economic-operator-aeo-t3" },
              { label: "AEO - LO", href: "/authorized-economic-operator-aeo-lo" },
              { label: "Self Sealing Permission", href: "/self-sealing-permission" }
            ]
          },
          {
            title: "Registrations",
            href: "/EXIM-Licences-Registrations",
            links: [
              { label: "EPR Registration", href: "/epr-certificate-registration" },
              { label: "Cus-AD Code", href: "/customs-ad-code-registration" },
              { label: "IFSC Code Reg", href: "/icegate-ifsc-code-registration" },
              { label: "IceGate Reg", href: "/icegate-registration" },
              { label: "First Time Reg", href: "/customs-first-time-registration" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Taxation",
    href: "/Taxation",
    type: "mega",
    widthClass: "w-[560px] max-w-[92vw]",
    columns: [
      {
        title: "GST",
        icon: "fas fa-receipt",
        groups: [
          {
            title: "GST Services",
            href: "/gst",
            links: [
              { label: "GST Registration", href: "/gst-registration-certificate" },
              { label: "GST Returns", href: "/gst-returns" }
            ]
          },
          {
            title: "GST Refund",
            href: "/gst-refund-deemed-export",
            links: [
              { label: "Deemed Export Refund", href: "/gst-refund-deemed-export" }
            ]
          }
        ]
      },
      {
        title: "Compliance & Other",
        icon: "fas fa-file-invoice",
        groups: [
          {
            title: "GST Compliance",
            links: [
              { label: "GST-DE-DBK", href: "/Duty-Drawback" },
              { label: "GST Pay Certificate", href: "/gst-pay-certificate" },
              { label: "GST LUT", href: "/gst-letter-of-undertaking-lut" }
            ]
          },
          {
            title: "Other Services",
            links: [
              { label: "Labour License", href: "/labour-licence" },
              { label: "Detailed Project Report", href: "/detailed-project-report" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Resources",
    href: "/y2k-exim-notifications",
    type: "dropdown",
    widthClass: "w-[260px] max-w-[92vw]",
    dropdownLinks: [
      { label: "Notifications", href: "/y2k-exim-notifications", isBold: true },
      { label: "Blogs", href: "/blogs", isBold: true }
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
