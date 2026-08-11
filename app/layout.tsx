import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.y2kexim.com"),
  title: {
    default: "Y2K Exim Services | Top DGFT Consultants, CA, Customs & Subsidies India",
    template: "%s | Y2K Exim Services",
  },
  description:
    "Y2K Exim Indenting and Services Pvt Ltd provides expert consultancy for DGFT EXIM licensing, Customs Clearance (CHA), Corporate Tax & GST, and Industrial Subsidies across India.",
  keywords: [
    "DGFT Consultants",
    "EXIM Licensing",
    "Advance Authorisation",
    "EPCG Scheme",
    "Customs House Agent",
    "CHA Services",
    "ICEGATE Filing",
    "GST Consultants",
    "Income Tax Advisory",
    "Industrial Subsidies India",
    "Navi Mumbai EXIM Consultant",
    "Customs Clearance Nhava Sheva",
    "Y2K Exim"
  ],
  authors: [{ name: "Y2K Exim Services Pvt Ltd", url: "https://www.y2kexim.com" }],
  creator: "Y2K Exim Services Pvt Ltd",
  publisher: "Y2K Exim Services Pvt Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.y2kexim.com",
    siteName: "Y2K Exim Services",
    title: "Y2K Exim Services | Top DGFT Consultants, CA, Customs & Subsidies India",
    description:
      "Leading EXIM, DGFT Licensing, Customs House Agent (CHA), GST, and Industrial Subsidy consultants serving clients across India.",
    images: [
      {
        url: "/img/y2k-logo.jpg",
        width: 800,
        height: 800,
        alt: "Y2K Exim Services Pvt Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Y2K Exim Services | Top DGFT Consultants, CA, Customs & Subsidies India",
    description:
      "Leading EXIM, DGFT Licensing, Customs House Agent (CHA), GST, and Industrial Subsidy consultants serving clients across India.",
    images: ["/img/y2k-logo.jpg"],
    creator: "@y2kexim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/y2k-logo.jpg",
    shortcut: "/img/y2k-logo.jpg",
    apple: "/img/y2k-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
