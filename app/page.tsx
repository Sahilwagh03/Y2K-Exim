import type { Metadata } from "next";
import Marquee from "../components/Marquee";
import Hero from "../components/Hero";
import Commitment from "../components/Commitment";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Branches from "../components/Branches";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Y2K Exim Services | DGFT Consultants, Customs House Agent & Industrial Subsidies India",
  description:
    "Y2K Exim Services Pvt Ltd is India's leading consulting firm for DGFT EXIM licensing, Licensed Customs House Agent (CHA) clearance, GST & CA compliance, and Government Industrial Subsidies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Y2K Exim Services | DGFT Consultants, Customs & Industrial Subsidies India",
    description:
      "Expert consultancy for DGFT EXIM licensing, Customs Clearance (CHA), Corporate Tax & GST, and Industrial Subsidies across India.",
    url: "https://www.y2kexim.com",
  },
};

const homeWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Y2K Exim Services",
  "url": "https://www.y2kexim.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.y2kexim.com/dgft-consultants#{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={homeWebSiteSchema} />

      {/* Latest Updates scrolling ticker - Home page only */}
      <Marquee />

      <main className="flex-grow flex flex-col">
        {/* Fullscreen Video Background Banner */}
        <Hero />

        {/* Our Commitment Section */}
        <Commitment />

        {/* Our Services Section */}
        <Services />

        {/* About Us Section */}
        <About />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Verified Google Reviews slider */}
        <Testimonials />

        {/* Clients logo marquee */}
        <Clients />

        {/* Interactive office branch locator */}
        <Branches />
      </main>
    </div>
  );
}


