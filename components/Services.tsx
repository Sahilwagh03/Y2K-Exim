import React from "react";

export default function Services() {
  const services = [
    {
      icon: "/img/services-icons/dgft-icon.png",
      title: "DGFT Services",
      text: "Expert assistance with all DGFT-related documentation and compliance for smooth import and export operations.",
      link: "/dgft-consultants",
      actionText: "Explore DGFT Consultancy",
    },
    {
      icon: "/img/services-icons/subsidy-icon.png",
      title: "Industrial Subsidies",
      text: "Accurate guidance on eligibility, documentation, and claim processes for industrial subsidies and incentives.",
      link: "/industrial-subsidies",
      actionText: "Discover Industrial Subsidies",
    },
    {
      icon: "/img/services-icons/customs-icon.png",
      title: "Customs & Shipping",
      text: "End-to-end customs solutions including clearance, documentation, and compliance for seamless cross-border trade.",
      link: "/Customs-House-Agent-Services",
      actionText: "View Customs House Agent Services",
    },
    {
      icon: "/img/services-icons/gst-icon.png",
      title: "Taxation",
      text: "Ensuring your trade operations comply with all GST regulations and related tax requirements for seamless compliance.",
      link: "/Taxation",
      actionText: "Explore Taxation & GST Advisory",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white select-none">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-kc-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to streamline your operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 shadow-lg rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center group border border-slate-100"
            >
              {/* Circular Icon Wrapper */}
              <div className="w-16 h-16 bg-orange-50 flex items-center justify-center rounded-full overflow-hidden mb-5 border border-orange-100 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-md">
                {service.text}
              </p>

              {/* Action Link */}
              <a
                href={service.link}
                aria-label={service.actionText}
                className="text-kc-orange font-bold hover:text-orange-600 inline-flex items-center text-sm gap-1 hover:gap-2 transition-all duration-200"
              >
                <span>{service.actionText}</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
