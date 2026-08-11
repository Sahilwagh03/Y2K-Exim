import type { Metadata } from "next";
import SubsidiesClient from "@/components/pages/SubsidiesClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industrial & Agricultural Subsidies Advisory | Central & State Schemes India",
  description:
    "Discover central and state government subsidy schemes for industrial units, food processing, logistics, and agriculture. Y2K Exim provides end-to-end subsidy filing and claim advisory in India.",
  alternates: {
    canonical: "/industrial-subsidies",
  },
  openGraph: {
    title: "Industrial & Agricultural Subsidies Directory | Y2K Exim",
    description:
      "Expert advisory for Central and State Government Industrial Subsidies, Ministry of Food Processing Industries (MOFPI), MoFPI, and state incentive schemes.",
    url: "https://www.y2kexim.com/industrial-subsidies",
  },
};

const subsidiesBreadcrumbSchema = {
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
      "name": "Industrial Subsidies",
      "item": "https://www.y2kexim.com/industrial-subsidies"
    }
  ]
};

const subsidiesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Industrial & Government Subsidies Advisory",
  "provider": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  },
  "areaServed": "India",
  "description": "Advisory for Central & State government industrial subsidies, food processing incentives, capital subsidies, and interest subsidies."
};

export default function SubsidiesPage() {
  return (
    <>
      <JsonLd data={[subsidiesBreadcrumbSchema, subsidiesServiceSchema]} />
      <SubsidiesClient />
    </>
  );
}
