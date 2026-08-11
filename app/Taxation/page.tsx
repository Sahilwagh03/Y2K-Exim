import type { Metadata } from "next";
import TaxationClient from "@/components/pages/TaxationClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Corporate Tax & GST Advisory",
  description:
    "Corporate tax and GST advisory services by Y2K Exim. GST registration, GSTR filing, tax audits, and indirect tax compliance across India.",
  alternates: {
    canonical: "/Taxation",
  },
  openGraph: {
    title: "Corporate Tax & GST Advisory | Y2K Exim",
    description:
      "Expert Chartered Accountants and Tax Consultants for GST registration, return filing, tax audits, and corporate tax structuring in India.",
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
      "name": "Taxation",
      "item": "https://www.y2kexim.com/Taxation"
    }
  ]
};

const taxationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate Tax & GST Consultancy",
  "provider": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  },
  "areaServed": "India",
  "description": "GST compliance, GSTR filings, Income Tax return filing, tax audits, and corporate indirect tax advisory."
};

export default function TaxationPage() {
  return (
    <>
      <JsonLd data={[taxationBreadcrumbSchema, taxationServiceSchema]} />
      <TaxationClient />
    </>
  );
}
