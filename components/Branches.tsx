"use client";

import React, { useState } from "react";

interface BranchData {
  id: string;
  name: string;
  title: string;
  address: string;
  phones: string[];
  email: string;
  hours: string;
  mapUrl: string;
}

export default function Branches() {
  const branches: BranchData[] = [
    {
      id: "mumbai",
      name: "Mumbai",
      title: "Mumbai Office",
      address: "-135, A – Wing, Balaji Bhavan, Near Railway stn. Belapur Navi Mumbai. - 400614",
      phones: ["+91-7774988189"],
      email: "pramod@y2kexim.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://maps.google.com/maps?q=-135,%20A%20%E2%80%93%20Wing,%20Balaji%20Bhavan,%20Near%20Railway%20stn.%20Belapur%20Navi%20Mumbai.%20-%20400614&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "gujarat",
      name: "Gujarat",
      title: "Gujarat Office",
      address: "115, Manali Tower, Oslo Road , Gandhidham (Kutch), Gujrat -370201.",
      phones: ["+91-7774988189"],
      email: "pramod@y2kexim.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://maps.google.com/maps?q=115,%20Manali%20Tower,%20Oslo%20Road%20,%20Gandhidham%20(Kutch),%20Gujrat%20-370201.&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "chennai",
      name: "Chennai",
      title: "Chennai Office",
      address: "130, Mint Street, 4th Floor, Shree Center, Sowcarpet, Chennai -600079.",
      phones: ["+91-7774988189"],
      email: "pramod@y2kexim.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://maps.google.com/maps?q=130,%20Mint%20Street,%204th%20Floor,%20Shree%20Center,%20Sowcarpet,%20Chennai%20-600079.&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "kolkata",
      name: "Kolkata",
      title: "Kolkata Office",
      address: "15/1, Strand Road, Custom House, Kolkata - 700001.",
      phones: ["+91-7774988189"],
      email: "pramod@y2kexim.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://maps.google.com/maps?q=15/1,%20Strand%20Road,%20Custom%20House,%20Kolkata%20-%20700001.&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ];

  const [activeBranch, setActiveBranch] = useState<BranchData>(branches[0]);

  return (
    <section id="branches" className="py-16 bg-gray-50 select-none">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
            Our Branches
          </h2>
          <div className="w-24 h-1 bg-kc-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find our offices across major trade hubs in India
          </p>
        </div>

        {/* Dynamic Buttons list */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch)}
              className={`px-5 py-2.5 text-[13px] sm:text-sm font-semibold rounded-full border transition duration-200 cursor-pointer ${activeBranch.id === branch.id
                ? "bg-kc-orange text-white border-kc-orange shadow-md"
                : "bg-white text-gray-700 border-gray-200 hover:bg-orange-50"
                }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Active Branch Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between h-full animate-popup-fade">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-display border-b border-gray-100 pb-3">
                {activeBranch.title}
              </h3>

              <div className="flex items-start mb-5">
                <i className="fas fa-map-marker-alt mt-1 mr-3.5 text-kc-orange text-sm flex-shrink-0"></i>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: activeBranch.address }}
                />
              </div>

              <div className="flex items-start mb-5">
                <i className="fas fa-phone-alt mt-1 mr-3.5 text-kc-orange text-sm flex-shrink-0"></i>
                <div className="flex flex-col text-sm text-gray-600 gap-1 font-medium">
                  {activeBranch.phones.map((phone, i) => (
                    <span key={i}>{phone}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-5">
                <i className="fas fa-envelope mr-3.5 text-kc-orange text-sm flex-shrink-0"></i>
                <a
                  href={`mailto:${activeBranch.email}`}
                  className="text-gray-600 text-sm hover:text-kc-orange transition duration-200 font-medium"
                >
                  {activeBranch.email}
                </a>
              </div>
            </div>

            <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
              <i className="fas fa-clock mr-3.5 text-kc-orange text-sm flex-shrink-0"></i>
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
                {activeBranch.hours}
              </p>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative bg-gray-100">
            <iframe
              src={activeBranch.mapUrl}
              className="absolute top-0 left-0 w-full h-full border-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeBranch.name} Location Map`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
