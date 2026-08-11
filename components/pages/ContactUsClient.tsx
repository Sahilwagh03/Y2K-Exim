"use client";

import React from "react";

interface BranchInfo {
  city: string;
  icon: string;
  address: string;
  phones: string[];
  mapLink: string;
}

const branches: BranchInfo[] = [
  {
    city: "Mumbai",
    icon: "fas fa-ship",
    address: "-135, A – Wing, Balaji Bhavan, Near Railway stn. Belapur Navi Mumbai. - 400614",
    phones: ["+91-7774988189"],
    mapLink: "https://maps.app.goo.gl/JdvW9vjushM4Eh1h6"
  },
  {
    city: "Gujarat",
    icon: "fas fa-industry",
    address: "Office 912-B, 9th Floor, Sun West Bank, Opp City Gold Cinema, Ashram Road, Ahmedabad - 380 009 (GJ)",
    phones: ["+91-7774988189"],
    mapLink: "https://maps.app.goo.gl/83iJ9p3L7143PKCJ6"
  },
  {
    city: "Chennai",
    icon: "fas fa-anchor",
    address: "Office No 37/6, Alagiri Nagar, 5th Street, 100 Ft Road, Vadapalani, Chennai - 600 026 (TN)",
    phones: ["+91-7774988189"],
    mapLink: "https://maps.app.goo.gl/GqAGHBRGzB9DJh2G6"
  },
  {
    city: "Kolkata",
    icon: "fas fa-bridge",
    address: "Office No 3B Ground Floor, Premises No.79, Commercial Point, Lenin Sarani, P S Taltala, Kolkata - 700 013 (WB)",
    phones: ["+91-7774988189"],
    mapLink: "https://maps.app.goo.gl/VLurCtXhiLvZCst87"
  }
];

export default function ContactUsClient() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none pb-20">
      {/* Light Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-16 px-6 md:px-12 border-b border-orange-100/50">
        <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
            <i className="fas fa-envelope text-xs text-kc-orange"></i>
            <span>Contact Support Desk</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
            Get in <span className="text-kc-orange">Touch With Us</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our DGFT, Customs, or Subsidy services? Contact our corporate team below. We are here to support your global trade business across India.
          </p>
        </div>
      </section>

      {/* Main Content Info Cards */}
      <main className="max-w-360 mx-auto w-full px-4 md:px-8 py-10 space-y-16">

        {/* Section 1: Quick Contact Channels */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900 text-center mb-8">
            Official Contact Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Address */}
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-2xs hover:-translate-y-1 transition duration-200">
              <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 text-kc-orange">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Location</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                -135, A – Wing, Balaji Bhavan, Near Railway stn. Belapur Navi Mumbai. - 400614
              </p>
            </div>

            {/* Card 2 - Phone */}
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-2xs hover:-translate-y-1 transition duration-200">
              <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 text-kc-orange">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phone Number</h3>
              <div className="space-y-1 font-semibold">
                <a href="tel:+917774988189" className="block text-gray-600 hover:text-kc-orange text-sm transition">
                  +91 77749 88189
                </a>
              </div>
            </div>

            {/* Card 3 - Email */}
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-2xs hover:-translate-y-1 transition duration-200">
              <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 text-kc-orange">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email Addresses</h3>
              <div className="space-y-1">
                <a href="mailto:info@y2kexim.com" className="block text-gray-600 hover:text-kc-orange font-semibold text-sm transition">
                  info@y2kexim.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Grid Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xs">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900">
              Our Network Branches
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Simplifying cross-border trade and compliance in major business hubs across India
            </p>
            <div className="w-16 h-1 bg-kc-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b, i) => (
              <div key={i} className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-md transition duration-200">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-kc-orange flex items-center justify-center font-bold">
                      <i className={`${b.icon} text-base`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 font-display">{b.city} Office</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 font-medium">
                    {b.address}
                  </p>
                </div>
                <a
                  href={b.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-kc-orange hover:underline pt-3 border-t border-slate-200/80"
                >
                  <span>View Location Map</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
