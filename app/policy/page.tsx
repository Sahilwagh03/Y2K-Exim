import type { Metadata } from "next";
import PolicyClient from "@/components/pages/PolicyClient";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Y2K Exim Services Pvt Ltd. Learn how we safeguard and manage commercial documentation and client business information.",
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: "Privacy Policy | Y2K Exim Services",
    description:
      "Our commitment to client data confidentiality, document security, and compliance with Indian commercial regulations.",
    url: "https://www.y2kexim.com/policy",
  },
};

const policyBreadcrumbSchema = {
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
      "name": "Privacy Policy",
      "item": "https://www.y2kexim.com/policy"
    }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={policyBreadcrumbSchema} />
      <PolicyClient />
    </>
  );
}
