import React from "react";

export default function About() {
  const stats = [
    {
      icon: "fas fa-users",
      title: "5,000+",
      desc: "Satisfied Clients"
    },
    {
      icon: "fas fa-globe-americas",
      title: "20+",
      desc: "States Served"
    },
    {
      icon: "fas fa-folder-open",
      title: "10,000+",
      desc: "Projects Completed"
    }
  ];

  const illustrations = [
    { src: "/img/services-icons/dgft-icon (1).png", alt: "DGFT Licensing & EXIM Compliance Consultancy" },
    { src: "/img/services-icons/about-subsidy-icon (1).png", alt: "Industrial & Agricultural Subsidies Advisory" },
    { src: "/img/services-icons/about-customs-icon.png", alt: "Licensed Customs House Agent (CHA) Services" },
    { src: "/img/services-icons/about-taxation-icon.png", alt: "Corporate GST & Income Tax Advisory" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 select-none">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
              About Us
            </h2>
            <div className="w-24 h-1 bg-kc-orange mb-6"></div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Y2k Exim has been a trusted partner for businesses engaged in international trade for over 28 years. We specialize in simplifying the complexities of DGFT, Subsidy and Customs, helping our clients navigate customs regulations, optimize duty payments, and streamline their import-export operations.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Our team of experts brings decades of combined experience in international trade, customs procedures, and regulatory compliance. We stay updated with the latest changes in trade policies and regulations to ensure our clients always receive accurate and current advice.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Whether you&apos;re a small business making your first international shipment or a multinational corporation looking to optimize your global supply chain, we have the expertise and solutions to support your success.
            </p>

            {/* Counters/Stats Row */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${stat.icon} text-kc-orange text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl leading-tight">
                      {stat.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Circular Illustrations Column */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none w-full">
            {illustrations.map((item, idx) => (
              <div
                key={idx}
                className="w-full max-w-[200px] sm:max-w-[220px] aspect-square bg-blue-50 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 rounded-full flex items-center justify-center mx-auto overflow-hidden border border-blue-100/50 p-2"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-[90%] h-[90%] object-contain rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
