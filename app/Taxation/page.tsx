import type { Metadata } from "next";
import TaxationClient from "@/components/pages/TaxationClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GST Services & Corporate Tax Advisory | Y2K Exim",
  description:
    "Comprehensive GST services by Y2K Exim: GST Registration, Return Filing (GSTR-1, 3B, 9), GST Refunds, Export GST, ITC Consultancy, Notices & Department Representation, Appeals, Audits, E-Way Bill, E-Invoicing, and Advisory.",
  alternates: {
    canonical: "/Taxation",
  },
  openGraph: {
    title: "GST Services & Corporate Tax Advisory | Y2K Exim",
    description:
      "Expert GST & Tax Consultants for GST Registration, GSTR Filing, GST Refunds, Export Consultancy, ITC Recovery, Notices, Appeals, E-Way Bill, E-Invoicing, and Compliance Audit in India.",
    url: "https://www.y2kexim.com/Taxation",
  },
};

const taxationBreadcrumbSchema = {
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
      "name": "GST & Taxation Services",
      "item": "https://www.y2kexim.com/Taxation"
    }
  ]
};

const taxationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "GST & Corporate Tax Consultancy Services",
  "provider": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  },
  "areaServed": "India",
  "description": "Full-spectrum GST registration, GSTR return filings, LUT & IGST refunds, export consultancy, ITC verification & recovery, department notice representation, appeals, GST audit, e-way bill, e-invoicing, and corporate tax advisory."
};

export default function TaxationPage() {
  return (
    <>
      <JsonLd data={[taxationBreadcrumbSchema, taxationServiceSchema]} />
      <TaxationClient />
    </>
  );
}
