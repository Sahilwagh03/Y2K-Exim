import Marquee from "../components/Marquee";
import Hero from "../components/Hero";
import Commitment from "../components/Commitment";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Branches from "../components/Branches";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

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


