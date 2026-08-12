import React from "react";

export default function Clients() {
  const row1Logos = [
    { src: "/img/clients/samsung.svg", alt: "Samsung Client Logo" },
    { src: "/img/clients/hindware.svg", alt: "Hindware Client Logo" },
    { src: "/img/clients/herocycles.svg", alt: "Hero Cycles Client Logo" },
    { src: "/img/clients/spartan.svg", alt: "Spartan Engineering Client Logo" },
    { src: "/img/clients/transparentoverseas.svg", alt: "Transparent Overseas Client Logo" },
    { src: "/img/clients/maruti.svg", alt: "Maruti Suzuki Client Logo" },
    { src: "/img/clients/parle-elizabeth.svg", alt: "Parle Elizabeth Tools Pvt Ltd Client Logo" },
    { src: "/img/clients/haldia-petrochem.svg", alt: "Haldia Petrochem Ltd Client Logo" },
    { src: "/img/clients/sunpharma.svg", alt: "Sunpharma Ltd Client Logo" },
    { src: "/img/clients/indoco.svg", alt: "Indoco Remedies Ltd Client Logo" },
    { src: "/img/clients/cachet-pharma.svg", alt: "Cachet Pharma Ltd Client Logo" },
    { src: "/img/clients/toshiba-jsw.svg", alt: "Toshiba JSW Ltd Client Logo" },
  ];

  const row2Logos = [
    { src: "/img/clients/topsail.svg", alt: "Topsail Appliances Pvt Ltd Client Logo" },
    { src: "/img/clients/schwabe.svg", alt: "Dr Willmar Schwabe Herbal Client Logo" },
    { src: "/img/clients/manaksia.svg", alt: "Manaksia Aluminum Corporation Client Logo" },
    { src: "/img/clients/rasayan.svg", alt: "Rasayan Flavour and Fragrances Client Logo" },
    { src: "/img/clients/alkem.svg", alt: "Alkem Pharma Client Logo" },
    { src: "/img/clients/intas.svg", alt: "Intas Pharma Client Logo" },
    { src: "/img/clients/anand-mechanical.svg", alt: "Anand Mechanical Works Pvt Ltd Client Logo" },
    { src: "/img/clients/ceramin.svg", alt: "Ceramin India Pvt Ltd Client Logo" },
    { src: "/img/clients/ashiana-exports.svg", alt: "Ashiana Exports Private Limited Client Logo" },
    { src: "/img/clients/tovec-pharma.svg", alt: "Tovec Pharma Pvt Ltd Client Logo" },
    { src: "/img/clients/ashok-leyland.svg", alt: "Ashok Leyland Client Logo" },
  ];

  return (
    <section id="clients" className="py-16 bg-white overflow-hidden relative">
      <div className="w-full px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-kc-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Trusted by leading industrial conglomerates, MNCs, and corporate exporters across India
          </p>
        </div>

        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden mb-6 relative">
          <div className="flex gap-8 w-max animate-client-left hover:[animation-play-state:paused] ease-linear">
            {[...row1Logos, ...row1Logos].map((item, idx) => (
              <div
                key={idx}
                className="w-[220px] h-[105px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08] bg-slate-50/70 rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:bg-white hover:shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="w-full overflow-hidden relative">
          <div className="flex gap-8 w-max animate-client-right hover:[animation-play-state:paused] ease-linear">
            {[...row2Logos, ...row2Logos].map((item, idx) => (
              <div
                key={idx}
                className="w-[220px] h-[105px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08] bg-slate-50/70 rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:bg-white hover:shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
