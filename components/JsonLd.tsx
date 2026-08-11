import React from "react";

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
      "telephone": "+91-7774988189",
      "email": "info@y2kexim.com",
      "sameAs": [
        "https://www.facebook.com/y2kexim",
        "https://x.com/y2kexim",
        "https://www.instagram.com/y2keximofficial",
        "https://www.linkedin.com/in/y2k-exim-0b9b25423",
        "https://www.youtube.com/@y2kexim"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-mumbai",
      "name": "Y2K Exim Services - Head Office Navi Mumbai",
      "url": "https://www.y2kexim.com",
      "telephone": "+91-7774988189",
      "email": "info@y2kexim.com",
      "priceRange": "$$",
      "image": "https://www.y2kexim.com/img/y2k-logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-135, A-Wing, Balaji Bhavan, Near Railway Stn, Belapur",
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
      "@id": "https://www.y2kexim.com/#localbusiness-gujarat",
      "name": "Y2K Exim Services - Gujarat Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": "+91-7774988189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 912-B, 9th Floor, Sun West Bank, Opp City Gold Cinema, Ashram Road",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380009",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-chennai",
      "name": "Y2K Exim Services - Chennai Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": "+91-7774988189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No 37/6, Alagiri Nagar, 5th Street, 100 Ft Road, Vadapalani",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600026",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.y2kexim.com/#localbusiness-kolkata",
      "name": "Y2K Exim Services - Kolkata Branch",
      "url": "https://www.y2kexim.com/contact-us",
      "telephone": "+91-7774988189",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No 3B Ground Floor, Premises No.79, Commercial Point, Lenin Sarani, P S Taltala",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700013",
        "addressCountry": "IN"
      }
    }
  ]
};
