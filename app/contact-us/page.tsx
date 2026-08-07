"use client";

import React, { useState } from "react";

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

export default function ContactUsPage() {

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

        {/* Top 3 Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="bg-slate-50/50 rounded-xl border border-slate-200/80 p-5 flex flex-col justify-between hover:border-orange-200/70 hover:shadow-xs transition duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4 text-kc-orange">
                    <i className={`${branch.icon} text-sm`}></i>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-2">{branch.city}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed text-center mb-3 font-medium">
                    {branch.address}
                  </p>
                </div>

                <div className="space-y-3 mt-2">
                  <div className="text-center flex flex-col gap-0.5">
                    {branch.phones.map((phone, pIdx) => (
                      <a
                        key={pIdx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-[11px] font-semibold text-orange-600 hover:text-orange-700 transition"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div className="text-center">
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-[#1a2d54] text-white text-[10px] font-bold px-3 py-1.5 rounded-md hover:bg-kc-orange hover:shadow-2xs transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Business Hours */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xs ">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Business Operating Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-orange-50/40 border border-orange-100/30 flex justify-between items-center text-xs font-semibold text-gray-700">
              <span>Monday - Saturday</span>
              <span className="text-orange-700">9:30 AM - 6:30 PM</span>
            </div>
            <div className="p-4 rounded-lg bg-orange-50/40 border border-orange-100/30 flex justify-between items-center text-xs font-semibold text-gray-700">
              <span>Sunday</span>
              <span className="text-orange-700">Closed</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
