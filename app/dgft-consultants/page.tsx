import type { Metadata } from "next";
import DGFTClient from "@/components/pages/DGFTClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "DGFT Consultants & Licensing",
  description:
    "Expert DGFT consultancy for Advance Authorisation, EPCG scheme, RoDTEP, Duty Drawback, and Star Export House certification across India.",
  alternates: {
    canonical: "/dgft-consultants",
  },
  openGraph: {
    title: "DGFT Consultants & Licensing | Y2K Exim",
    description:
      "Complete guide and service portal for DGFT licensing, EPCG schemes, Advance Authorisations, RoDTEP, and EXIM policy compliance.",
    url: "https://www.y2kexim.com/dgft-consultants",
  },
};

const dgftBreadcrumbSchema = {
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
      "name": "DGFT Consultants",
      "item": "https://www.y2kexim.com/dgft-consultants"
    }
  ]
};

const dgftServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "DGFT Licensing & EXIM Consultancy",
  "provider": {
    "@type": "Organization",
    "name": "Y2k Exim Indenting and Services Pvt Ltd",
    "url": "https://www.y2kexim.com"
  },
  "areaServed": "India",
  "description": "Consultancy for DGFT licenses including Advance License, EPCG Scheme, RoDTEP, Duty Drawback, and Star Export House registration."
};

export default function DGFTConsultantsPage() {
  return (
    <>
      <JsonLd data={[dgftBreadcrumbSchema, dgftServiceSchema]} />
      <DGFTClient />
    </>
  );
}
