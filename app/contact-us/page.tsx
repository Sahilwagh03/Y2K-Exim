import type { Metadata } from "next";
import ContactUsClient from "@/components/pages/ContactUsClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Branch Offices India",
  description:
    "Contact Y2K Exim Services Pvt Ltd. Offices in Navi Mumbai HQ, Gujarat, Chennai, and Kolkata for DGFT, Customs, GST, and Subsidy consultancy.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Y2K Exim Services",
    description:
      "Corporate Headquarters in Belapur Navi Mumbai and branches in Ahmedabad, Chennai & Kolkata. Contact us for EXIM consultancy across India.",
    url: "https://www.y2kexim.com/contact-us",
  },
};

const contactBreadcrumbSchema = {
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
      "name": "Contact Us",
      "item": "https://www.y2kexim.com/contact-us"
    }
  ]
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={contactBreadcrumbSchema} />
      <ContactUsClient />
    </>
  );
}
