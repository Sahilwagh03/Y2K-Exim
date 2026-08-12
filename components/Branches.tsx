"use client";

import React, { useState } from "react";
import { COMPANY_CONTACT } from "@/constants/contact";

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
      title: "Mumbai (Head Office)",
      address: COMPANY_CONTACT.headOfficeAddress,
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=150-A%20Wing,%20Balaji%20Bhavan,%20Near%20Railway%20Station,%20Belapur,%20Navi%20Mumbai%20%E2%80%93%20400614&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "delhi-gurgaon",
      name: "Delhi / Gurgaon",
      title: "Delhi / Gurgaon Office",
      address: "C4/C, Clear View, South City, Old DLF Colony, Sec 14, Gurugram, HR – 122001",
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=C4/C,%20Clear%20View,%20South%20City,%20Old%20DLF%20Colony,%20Sec%2014,%20Gurugram,%20HR%20%E2%80%93%20122001&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "dadri",
      name: "Dadri ICD",
      title: "Dadri ICD Office",
      address: "Room No. 11, CMA CGM, Tilpata, Dadri",
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=Room%20No.%2011,%20CMA%20CGM,%20Tilpata,%20Dadri&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "kolkata",
      name: "Kolkata",
      title: "Kolkata Office",
      address: "21, “SWAPNA LOK”, Rammohan Estate, Block – B, Madhyamgram, Kolkata – 700129",
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=21,%E2%80%9CSWAPNA%20LOK%E2%80%9D,%20Rammohan%20Estate,%20Block%20%E2%80%93%20B,%20Madhyamgram,%20Kolkata%20%E2%80%93%20700129&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "gujarat",
      name: "Gujarat",
      title: "Gujarat Office",
      address: "115, Manali Tower, Oslo Road, Gandhidham (Kutch), Gujarat – 370201",
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=115,%20Manali%20Tower,%20Oslo%20Road,%20Gandhidham%20(Kutch),%20Gujarat%20%E2%80%93%20370201&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "chennai",
      name: "Chennai",
      title: "Chennai Office",
      address: "130, Mint Street, 4th Floor, Shree Center, Sowcarpet, Chennai – 600079",
      phones: [COMPANY_CONTACT.phoneRaw],
      email: COMPANY_CONTACT.email,
      hours: COMPANY_CONTACT.workingHours,
      mapUrl: "https://maps.google.com/maps?q=130,%20Mint%20Street,%204th%20Floor,%20Shree%20Center,%20Sowcarpet,%20Chennai%20%E2%80%93%20600079&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ];

  const [activeBranch, setActiveBranch] = useState<BranchData>(branches[0]);

  return (
    <section id="branches" className="py-16 bg-gray-50">
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
