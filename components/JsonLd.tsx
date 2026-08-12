import React from "react";
import { COMPANY_CONTACT } from "@/constants/contact";

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Global Organization & LocalBusiness JSON-LD schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.y2kexim.com/#organization",
      "name": "Y2k Exim Indenting and Services Pvt Ltd",
      "alternateName": "Y2K Exim",
      "url": "https://www.y2kexim.com",
      "logo": "https://www.y2kexim.com/img/y2k-logo.webp",
      "description": "Premier DGFT Consultants, Licensed Customs House Agent (CHA), Corporate Tax Consultants & Industrial Subsidy Advisors in India.",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "email": COMPANY_CONTACT.email,
      "sameAs": [
        COMPANY_CONTACT.social.facebook,
        COMPANY_CONTACT.social.twitter,
        COMPANY_CONTACT.social.instagram,
        COMPANY_CONTACT.social.linkedin,
        COMPANY_CONTACT.social.youtube
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-mumbai",
      "name": "Y2K Exim Services - Head Office Navi Mumbai",
      "url": COMPANY_CONTACT.websites.main,
      "telephone": COMPANY_CONTACT.phoneRaw,
      "email": COMPANY_CONTACT.email,
      "priceRange": "$$",
      "image": "https://www.y2kexim.com/img/y2k-logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "150-A Wing, Balaji Bhavan, Near Railway Station, Belapur",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400614",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "18:30"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-delhi-gurgaon",
      "name": "Y2K Exim Services - Delhi / Gurgaon Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C4/C, Clear View, South City, Old DLF Colony, Sec 14",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-dadri",
      "name": "Y2K Exim Services - Dadri ICD Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Room No. 11, CMA CGM, Tilpata",
        "addressLocality": "Dadri",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-gujarat",
      "name": "Y2K Exim Services - Gujarat Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "115, Manali Tower, Oslo Road, Gandhidham (Kutch)",
        "addressLocality": "Gandhidham",
        "addressRegion": "Gujarat",
        "postalCode": "370201",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-chennai",
      "name": "Y2K Exim Services - Chennai Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "130, Mint Street, 4th Floor, Shree Center, Sowcarpet",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600079",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-kolkata",
      "name": "Y2K Exim Services - Kolkata Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": COMPANY_CONTACT.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21, SWAPNA LOK, Rammohan Estate, Block - B, Madhyamgram",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700129",
        "addressCountry": "IN"
      }
    }
  ]
};
