import React from "react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: "fas fa-award",
      title: "Industry Expertise",
      text: "Experience in DGFT, subsidies, customs, and taxation."
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Turnaround",
      text: "Quick, efficient service delivery."
    },
    {
      icon: "fas fa-tools",
      title: "Custom Solutions",
      text: "Tailored to your business needs."
    },
    {
      icon: "fas fa-headset",
      title: "Quick Support",
      text: "Team available around the clock."
    },
    {
      icon: "fas fa-tasks",
      title: "Multi Tasking",
      text: "Efficiently handling diverse services and domains."
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Flexible Solutions",
      text: "Seamless integration with your workflows."
    }
  ];

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-tr from-orange-50 via-orange-100/40 to-orange-200/20 text-kc-navy-950 relative overflow-hidden select-none"
    >
      {/* Decorative blur graphics like the footer but light orange */}
      <div className="absolute w-[380px] h-[380px] rounded-full bg-orange-200/30 blur-[100px] top-[-120px] left-[-100px] pointer-events-none z-0"></div>
      <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-200/30 blur-[100px] bottom-[-150px] right-[-120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-kc-orange">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-kc-navy-950 mt-3 mb-5">
            The Y2k Exim advantage
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed text-gray-600">
            We deliver exceptional value through our expertise, technology, and commitment to your success
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-orange-100 rounded-xl p-[2rem_1.75rem] shadow-xs hover:bg-orange-50/20 hover:border-orange-300 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 group z-10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <i className={`${card.icon} text-kc-orange text-[1.1rem]`}></i>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold font-display text-kc-navy-950 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="/contact-us"
            className="bg-kc-orange hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-block text-sm"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
