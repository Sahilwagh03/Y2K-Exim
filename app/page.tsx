import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Hero from "../components/Hero";
import PopupModal from "../components/PopupModal";
import Commitment from "../components/Commitment";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Branches from "../components/Branches";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Onload Vision & Mission Popup */}
      <PopupModal />

      {/* Top White Header (social links, contact numbers, Profile link) */}
      <Header />

      {/* Sticky Blue Navbar & Mega Menus */}
      <Navbar />

      {/* Latest Updates scrolling ticker */}
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

      {/* Site Footer with bottom reveal overlay, floating WhatsApp/Top/Sidebar widgets */}
      <Footer />
    </div>
  );
}

