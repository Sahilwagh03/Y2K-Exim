import type { Metadata } from "next";
import PortCodesClient from "@/components/pages/PortCodesClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Indian Customs Port Codes Directory (412 Locations) | Y2K Exim",
  description:
    "Searchable directory of 412 official Indian Customs Port Codes (ICEGATE EDI), Sea Ports, Air Cargo (ACC), Inland Container Depots (ICD), CFS, and Land Customs (LCS) across India.",
  alternates: {
    canonical: "/customs-port-codes",
  },
  openGraph: {
    title: "Indian Customs Port Codes Directory (412 Locations) | Y2K Exim",
    description:
      "Complete database and instant search tool for Indian Customs Port Codes (INNSA1, INBOM4, INMAA1, INCCU1, etc.) for shipping bills, ICEGATE, and export-import compliance.",
    url: "https://www.y2kexim.com/customs-port-codes",
  },
};

const portCodesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.y2kexim.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Customs Port Codes Directory",
      "item": "https://www.y2kexim.com/customs-port-codes"
    }
  ]
};

const portCodesDatasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Indian Customs Port Codes Directory",
  "description": "Complete reference database of 412 Indian Customs Location Codes (UN/LOCODE) including EDI-enabled Sea Ports, Airports, ICDs, CFSs, and Land Customs Stations.",
  "url": "https://www.y2kexim.com/customs-port-codes",
  "keywords": [
    "Indian Customs Port Codes",
    "ICEGATE Port Codes",
    "UN LOCODE India",
    "Customs Location Codes",
    "Nhava Sheva Port Code INNSA1",
    "Air Cargo Sahar Port Code INBOM4",
    "ICD Port Codes India"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  }
};

export default function PortCodesPage() {
  return (
    <>
      <JsonLd data={[portCodesBreadcrumbSchema, portCodesDatasetSchema]} />
      <PortCodesClient />
    </>
  );
}
