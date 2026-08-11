import React from "react";

export default function Clients() {
  const row1Logos = [
    "https://www.kireeticonsultants.com/img/newclients/blueenergybuild.png",
    "https://www.kireeticonsultants.com/img/newclients/Bromine.png",
    "https://www.kireeticonsultants.com/img/newclients/itek.png",
    "https://www.kireeticonsultants.com/img/newclients/jsw.png",
    "https://www.kireeticonsultants.com/img/newclients/lenovo.png",
    "https://www.kireeticonsultants.com/img/newclients/poshan.png",
    "https://www.kireeticonsultants.com/img/newclients/samhi.png",
    "https://www.kireeticonsultants.com/img/newclients/stellarises.png",
    "https://www.kireeticonsultants.com/img/newclients/sumeet.png",
    "https://www.kireeticonsultants.com/img/newclients/techeco.png",
    "https://www.kireeticonsultants.com/img/newclients/tungabhadraethonal.png",
    "https://www.kireeticonsultants.com/img/newclients/vetogen.png",
    "https://www.kireeticonsultants.com/img/client/1.png",
    "https://www.kireeticonsultants.com/img/client/3.png",
    "https://www.kireeticonsultants.com/img/client/4.png",
    "https://www.kireeticonsultants.com/img/client/5.png",
    "https://www.kireeticonsultants.com/img/client/12.png",
    "https://www.kireeticonsultants.com/img/client/13.png",
    "https://www.kireeticonsultants.com/img/client/14.png",
    "https://www.kireeticonsultants.com/img/client/15.png",
    "https://www.kireeticonsultants.com/img/client/16.png",
    "https://www.kireeticonsultants.com/img/client/18.png",
    "https://www.kireeticonsultants.com/img/client/20.png",
    "https://www.kireeticonsultants.com/img/client/22.png",
    "https://www.kireeticonsultants.com/img/client/23.png",
    "https://www.kireeticonsultants.com/img/client/26.png",
    "https://www.kireeticonsultants.com/img/newclients/southasianceramic.png",
    "https://www.kireeticonsultants.com/img/newclients/globalgreencompany.png",
    "https://www.kireeticonsultants.com/img/newclients/smilax%20(1).png"
  ];

  const row2Logos = [
    "https://www.kireeticonsultants.com/img/newclients/baypark%20(1).png",
    "https://www.kireeticonsultants.com/img/newclients/amararaja.png",
    "https://www.kireeticonsultants.com/img/newclients/jayarajfortune.png",
    "https://www.kireeticonsultants.com/img/client/sarala.png",
    "https://www.kireeticonsultants.com/img/client/bhagyalakshmi1.jpg",
    "https://www.kireeticonsultants.com/img/client/sats1.jpg",
    "https://www.kireeticonsultants.com/img/client/adithya_birla.jpg",
    "https://www.kireeticonsultants.com/img/client/27.png",
    "https://www.kireeticonsultants.com/img/client/28.png",
    "https://www.kireeticonsultants.com/img/newclients/shyamg.png",
    "https://www.kireeticonsultants.com/img/newclients/wirelux.png",
    "https://www.kireeticonsultants.com/img/newclients/zeel%20group.png",
    "https://www.kireeticonsultants.com/img/newclients/Mitsubishi%20(1).png",
    "https://www.kireeticonsultants.com/img/newclients/notofrire.png",
    "https://www.kireeticonsultants.com/img/newclients/patabiagro.png",
    "https://www.kireeticonsultants.com/img/newclients/photons.png",
    "https://www.kireeticonsultants.com/img/newclients/rossenterprises.png",
    "https://www.kireeticonsultants.com/img/newclients/Shreenathji.png",
    "https://www.kireeticonsultants.com/img/newclients/lcare.png",
    "https://www.kireeticonsultants.com/img/newclients/kashiv.png",
    "https://www.kireeticonsultants.com/img/newclients/frick.png",
    "https://www.kireeticonsultants.com/img/newclients/fairy.png",
    "https://www.kireeticonsultants.com/img/newclients/delight.png",
    "https://www.kireeticonsultants.com/img/newclients/d&g.png",
    "https://www.kireeticonsultants.com/img/newclients/awp.png",
    "https://www.kireeticonsultants.com/img/newclients/biosci.png",
    "https://www.kireeticonsultants.com/img/newclients/advanceagrolife.png",
    "https://www.kireeticonsultants.com/img/newclients/aloe.png",
    "https://www.kireeticonsultants.com/img/newclients/amino.png",
    "https://www.kireeticonsultants.com/img/newclients/appl.png"
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
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading companies across industries
          </p>
        </div>

        {/* Row 1: Scrolling Left */}
        <div className="w-full overflow-hidden mb-6 relative">
          <div className="flex gap-8 w-max animate-client-left hover:[animation-play-state:paused] ease-linear">
            {[...row1Logos, ...row1Logos].map((src, idx) => (
              <div
                key={idx}
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08]"
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
                className="w-[150px] h-[80px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.08]"
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
