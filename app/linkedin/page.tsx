import type { Metadata } from "next";
import LinkedInLandingClient from "@/components/pages/LinkedInLandingClient";
import JsonLd from "@/components/JsonLd";
import { COMPANY_CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Pending Export IGST Refund? Shipping Bill Discrepancy Review | Y2K Exim",
  description:
    "Export refund pending due to SB005 mismatch, EGM errors, PFMS delay, or double duty payment? Request an initial case review with Y2K Exim's customs advisory specialists.",
  alternates: {
    canonical: "/linkedin",
  },
  openGraph: {
    title: "Your Export Refund Is Pending. Have You Checked Why? | Y2K Exim",
    description:
      "Specialized review for pending Export IGST refunds, ICEGATE error codes, and customs duty discrepancies. Connect on WhatsApp for a direct case assessment.",
    url: "https://www.y2kexim.com/linkedin",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Export IGST & Customs Refund Advisory",
  "provider": {
    "@type": "Organization",
    "name": "Y2K Exim Services Pvt Ltd",
    "url": "https://www.y2kexim.com",
    "telephone": COMPANY_CONTACT.phone,
  },
  "areaServed": "India",
  "description":
    "Specialized assistance for corporate exporters facing pending IGST refunds, shipping bill errors (SB005), EGM discrepancies, and duplicate customs duty debits.",
};

export default function LinkedInLandingPage() {
  // Pre-qualifying WhatsApp initial message tailored for LinkedIn corporate audiences
  const prefilledText = encodeURIComponent(
    "Hi Y2K Exim, I saw your LinkedIn advisory page regarding pending Export IGST Refunds. I would like to get my pending shipping bill / refund case reviewed."
  );
  const customWhatsappUrl = `${COMPANY_CONTACT.whatsappUrl}?text=${prefilledText}`;

  return (
    <>
      <JsonLd data={serviceSchema} />
      <LinkedInLandingClient
        whatsappUrl={customWhatsappUrl}
        phoneNumber={COMPANY_CONTACT.phone}
      />
    </>
  );
}
