import React from "react";

export default function Commitment() {
  const cards = [
    {
      icon: "fas fa-globe",
      title: "Global Reach",
      text: "Connecting businesses across borders and facilitating seamless international trade operations."
    },
    {
      icon: "fas fa-handshake",
      title: "Trusted Partnership",
      text: "Building long-term relationships based on trust, transparency, and mutual growth."
    },
    {
      icon: "fas fa-chart-line",
      title: "Sustainable Growth",
      text: "Promoting responsible trade practices that contribute to economic and environmental sustainability."
    }
  ];

  return (
    <section id="vision" className="relative py-20 bg-kc-paper bg-radial-dots">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-kc-gold">
            Our Commitment
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-kc-navy-950 mt-3 mb-5">
            Built on trust, backed by expertise
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We simplify international business with expert DGFT, Industrial Subsidies, Customs, and Taxation Solutions.
          </p>
        </div>

        {/* Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl p-[2.5rem_2rem_2.25rem] border border-[#e7e2d5] shadow-[0_1px_2px_rgba(12,26,58,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(12,26,58,0.18)] hover:border-transparent before:content-[''] before:absolute before:left-0 before:top-8 before:bottom-8 before:w-[3px] before:bg-gradient-to-b before:from-kc-gold before:to-kc-navy-700 before:rounded-r transition-all duration-300 group"
            >
              {/* Icon Wrapper */}
              <div className="w-[56px] h-[56px] rounded-lg bg-kc-navy-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className={`${card.icon} text-kc-gold-light text-xl`}></i>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-kc-navy-900 mb-3 font-display">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
