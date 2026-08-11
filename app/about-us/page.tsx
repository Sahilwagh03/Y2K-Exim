import type { Metadata } from "next";
import AboutUsClient from "@/components/pages/AboutUsClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Premier EXIM, DGFT & Customs Consultancy Firm India",
  description:
    "Learn about Y2K Exim Services Pvt Ltd. Over 28 years of excellence in DGFT licensing, Customs House Agent (CHA) clearance, GST, and Government Subsidies consultancy across India.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Y2K Exim Services Pvt Ltd",
    description:
      "Over 28 years of trusted EXIM compliance, DGFT licensing, CHA clearance, and corporate subsidy advisory in India.",
    url: "https://www.y2kexim.com/about-us",
  },
};

const aboutBreadcrumbSchema = {
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
      "name": "About Us",
      "item": "https://www.y2kexim.com/about-us"
    }
  ]
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutBreadcrumbSchema} />
      <AboutUsClient />
    </>
  );
}
