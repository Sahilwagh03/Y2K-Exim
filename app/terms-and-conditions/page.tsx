import type { Metadata } from "next";
import TermsClient from "@/components/pages/TermsClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Y2K EXIM SERVICES. Learn about user responsibilities, payment terms, cancellation & refund policies, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Y2K EXIM SERVICES",
    description:
      "Read the Terms and Conditions governing the use of courier booking and shipping services provided by Y2K EXIM SERVICES.",
    url: "https://www.y2kexim.com/terms-and-conditions",
  },
};

const termsBreadcrumbSchema = {
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
      "name": "Terms and Conditions",
      "item": "https://www.y2kexim.com/terms-and-conditions"
    }
  ]
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd data={termsBreadcrumbSchema} />
      <TermsClient />
    </>
  );
}
