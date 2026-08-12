import React from "react";

export default function Clients() {
  const row1Logos = [
    "/img/clients/blueenergybuild.webp",
    "/img/clients/Bromine.webp",
    "/img/clients/itek.webp",
    "/img/clients/jsw.webp",
    "/img/clients/lenovo.webp",
    "/img/clients/poshan.webp",
    "/img/clients/samhi.webp",
    "/img/clients/stellarises.webp",
    "/img/clients/sumeet.webp",
    "/img/clients/techeco.webp",
    "/img/clients/tungabhadraethonal.webp",
    "/img/clients/vetogen.webp",
    "/img/clients/1.webp",
    "/img/clients/3.webp",
    "/img/clients/4.webp",
    "/img/clients/5.webp",
    "/img/clients/12.webp",
    "/img/clients/13.webp",
    "/img/clients/14.webp",
    "/img/clients/15.webp",
    "/img/clients/16.webp",
    "/img/clients/18.webp",
    "/img/clients/20.webp",
    "/img/clients/22.webp",
    "/img/clients/23.webp",
    "/img/clients/26.webp",
    "/img/clients/southasianceramic.webp",
    "/img/clients/globalgreencompany.webp",
    "/img/clients/smilax (1).webp"
  ];

  const row2Logos = [
    "/img/clients/baypark (1).webp",
    "/img/clients/amararaja.webp",
    "/img/clients/jayarajfortune.webp",
    "/img/clients/sarala.webp",
    "/img/clients/bhagyalakshmi1.webp",
    "/img/clients/sats1.webp",
    "/img/clients/adithya_birla.webp",
    "/img/clients/27.webp",
    "/img/clients/28.webp",
    "/img/clients/shyamg.webp",
    "/img/clients/wirelux.webp",
    "/img/clients/zeel group.webp",
    "/img/clients/Mitsubishi (1).webp",
    "/img/clients/notofrire.webp",
    "/img/clients/patabiagro.webp",
    "/img/clients/photons.webp",
    "/img/clients/rossenterprises.webp",
    "/img/clients/Shreenathji.webp",
    "/img/clients/lcare.webp",
    "/img/clients/kashiv.webp",
    "/img/clients/frick.webp",
    "/img/clients/fairy.webp",
    "/img/clients/delight.webp",
    "/img/clients/d&g.webp",
    "/img/clients/awp.webp",
    "/img/clients/biosci.webp",
    "/img/clients/advanceagrolife.webp",
    "/img/clients/aloe.webp",
    "/img/clients/amino.webp",
    "/img/clients/appl.webp"
  ];

  const getClientAlt = (url: string) => {
    try {
      const filename = url.split("/").pop() || "";
      const name = filename.split(".")[0].replace(/%20/g, " ").replace(/[-_]/g, " ");
      return `${name.charAt(0).toUpperCase() + name.slice(1)} Client Logo`;
    } catch {
      return "Y2K Exim Corporate Client Logo";
    }
  };

  return (
    <section id="clients" className="py-16 bg-white overflow-hidden relative">
      <div className="w-full px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-kc-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Trusted by leading companies across industries
          </p>
        </div>

        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden mb-6 relative">
          <div className="flex gap-8 w-max animate-client-left hover:[animation-play-state:paused] ease-linear">
            {[...row1Logos, ...row1Logos].map((src, idx) => (
              <div
                key={idx}
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08] bg-slate-50/60 rounded-xl border border-slate-100 p-2"
              >
                <img
                  src={src}
                  alt={getClientAlt(src)}
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
            {[...row2Logos, ...row2Logos].map((src, idx) => (
              <div
                key={idx}
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08] bg-slate-50/60 rounded-xl border border-slate-100 p-2"
              >
                <img
                  src={src}
                  alt={getClientAlt(src)}
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
