import type { Metadata } from "next";
import FunnelClient from "@/components/pages/FunnelClient";
import JsonLd from "@/components/JsonLd";
import { COMPANY_CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Your Export Refund Is Pending? | Y2K Exim Advisory",
  description:
    "Facing pending Export IGST refunds, Shipping Bill & GST invoice mismatches, ICEGATE validation errors, or duplicate customs duty payments? Review your case with Y2K Exim.",
  alternates: {
    canonical: "/funnel",
  },
  openGraph: {
    title: "Your Export Refund Is Pending. Have You Checked Why? | Y2K Exim",
    description:
      "Specialized support for unresolved export-import refund cases. Review your pending refund issue directly with Y2K Exim on WhatsApp.",
    url: "https://www.y2kexim.com/funnel",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const funnelSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Export-Import Refund Case Review & Resolution",
  "provider": {
    "@type": "Organization",
    "name": "Y2K Exim Services Pvt Ltd",
    "url": "https://www.y2kexim.com",
    "telephone": COMPANY_CONTACT.phone,
  },
  "areaServed": "India",
  "description":
    "Expert consultancy for pending export IGST refunds, ICEGATE error codes, SB005 mismatches, DGARM notices, and customs duty refunds across India.",
};

export default function FunnelPage() {
  return (
    <>
      <JsonLd data={funnelSchema} />
      <FunnelClient
        baseWhatsappUrl={COMPANY_CONTACT.whatsappUrl}
        phoneNumber={COMPANY_CONTACT.phone}
      />
    </>
  );
}
