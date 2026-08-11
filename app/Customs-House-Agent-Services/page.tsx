import type { Metadata } from "next";
import CustomsClient from "@/components/pages/CustomsClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Customs House Agent Services",
  description:
    "Licensed Customs House Agent (CHA) services for import-export clearance, ICEGATE filing, MOOWR scheme, AEO certification, and logistics.",
  alternates: {
    canonical: "/Customs-House-Agent-Services",
  },
  openGraph: {
    title: "Customs House Agent Services | Y2K Exim",
    description:
      "Reliable customs clearing, freight logistics, ICEGATE filing, and AEO certification in Nhava Sheva, Mundra, Chennai, and PAN India.",
    url: "https://www.y2kexim.com/Customs-House-Agent-Services",
  },
};

const customsBreadcrumbSchema = {
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
      "name": "Customs House Agent Services",
      "item": "https://www.y2kexim.com/Customs-House-Agent-Services"
    }
  ]
};

const customsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Customs House Agent (CHA) & Port Logistics",
  "provider": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  },
  "areaServed": "India",
  "description": "Licensed Customs House Agent services for import/export customs clearance, MOOWR scheme, AEO certification, and ICEGATE operations."
};

export default function CustomsPage() {
  return (
    <>
      <JsonLd data={[customsBreadcrumbSchema, customsServiceSchema]} />
      <CustomsClient />
    </>
  );
}
