import React from "react";

export default function Clients() {
  const row1Logos = [
    "/img/clients/blueenergybuild.png",
    "/img/clients/Bromine.png",
    "/img/clients/itek.png",
    "/img/clients/jsw.png",
    "/img/clients/lenovo.png",
    "/img/clients/poshan.png",
    "/img/clients/samhi.png",
    "/img/clients/stellarises.png",
    "/img/clients/sumeet.png",
    "/img/clients/techeco.png",
    "/img/clients/tungabhadraethonal.png",
    "/img/clients/vetogen.png",
    "/img/clients/1.png",
    "/img/clients/3.png",
    "/img/clients/4.png",
    "/img/clients/5.png",
    "/img/clients/12.png",
    "/img/clients/13.png",
    "/img/clients/14.png",
    "/img/clients/15.png",
    "/img/clients/16.png",
    "/img/clients/18.png",
    "/img/clients/20.png",
    "/img/clients/22.png",
    "/img/clients/23.png",
    "/img/clients/26.png",
    "/img/clients/southasianceramic.png",
    "/img/clients/globalgreencompany.png",
    "/img/clients/smilax (1).png"
  ];

  const row2Logos = [
    "/img/clients/baypark (1).png",
    "/img/clients/amararaja.png",
    "/img/clients/jayarajfortune.png",
    "/img/clients/sarala.png",
    "/img/clients/bhagyalakshmi1.jpg",
    "/img/clients/sats1.jpg",
    "/img/clients/adithya_birla.jpg",
    "/img/clients/27.png",
    "/img/clients/28.png",
    "/img/clients/shyamg.png",
    "/img/clients/wirelux.png",
    "/img/clients/zeel group.png",
    "/img/clients/Mitsubishi (1).png",
    "/img/clients/notofrire.png",
    "/img/clients/patabiagro.png",
    "/img/clients/photons.png",
    "/img/clients/rossenterprises.png",
    "/img/clients/Shreenathji.png",
    "/img/clients/lcare.png",
    "/img/clients/kashiv.png",
    "/img/clients/frick.png",
    "/img/clients/fairy.png",
    "/img/clients/delight.png",
    "/img/clients/d&g.png",
    "/img/clients/awp.png",
    "/img/clients/biosci.png",
    "/img/clients/advanceagrolife.png",
    "/img/clients/aloe.png",
    "/img/clients/amino.png",
    "/img/clients/appl.png"
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
    <section id="clients" className="py-16 bg-white overflow-hidden select-none relative">
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
