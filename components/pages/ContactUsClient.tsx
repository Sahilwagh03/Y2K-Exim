"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";
import ContactForm from "@/components/ContactForm";

interface BranchInfo {
  city: string;
  icon: string;
  address: string;
  phones: string[];
  mapLink: string;
}

const branches: BranchInfo[] = [
  {
    city: "Mumbai (Head Office)",
    icon: "fas fa-ship",
    address: COMPANY_CONTACT.headOfficeAddress,
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=150-A%20Wing,%20Balaji%20Bhavan,%20Near%20Railway%20Station,%20Belapur,%20Navi%20Mumbai%20%E2%80%93%20400614"
  },
  {
    city: "Delhi / Gurgaon",
    icon: "fas fa-building",
    address: "C4/C, Clear View, South City, Old DLF Colony, Sec 14, Gurugram, HR – 122001",
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=C4/C,%20Clear%20View,%20South%20City,%20Old%20DLF%20Colony,%20Sec%2014,%20Gurugram,%20HR%20%E2%80%93%20122001"
  },
  {
    city: "Dadri ICD",
    icon: "fas fa-warehouse",
    address: "Room No. 11, CMA CGM, Tilpata, Dadri",
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=Room%20No.%2011,%20CMA%20CGM,%20Tilpata,%20Dadri"
  },
  {
    city: "Kolkata",
    icon: "fas fa-bridge",
    address: "21, “SWAPNA LOK”, Rammohan Estate, Block – B, Madhyamgram, Kolkata – 700129",
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=21,%E2%80%9CSWAPNA%20LOK%E2%80%9D,%20Rammohan%20Estate,%20Block%20%E2%80%93%20B,%20Madhyamgram,%20Kolkata%20%E2%80%93%20700129"
  },
  {
    city: "Gujarat",
    icon: "fas fa-industry",
    address: "115, Manali Tower, Oslo Road, Gandhidham (Kutch), Gujarat – 370201",
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=115,%20Manali%20Tower,%20Oslo%20Road,%20Gandhidham%20(Kutch),%20Gujarat%20%E2%80%93%20370201"
  },
  {
    city: "Chennai",
    icon: "fas fa-anchor",
    address: "130, Mint Street, 4th Floor, Shree Center, Sowcarpet, Chennai – 600079",
    phones: [COMPANY_CONTACT.phoneRaw],
    mapLink: "https://maps.google.com/maps?q=130,%20Mint%20Street,%204th%20Floor,%20Shree%20Center,%20Sowcarpet,%20Chennai%20%E2%80%93%20600079"
  }
];

export default function ContactUsClient() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-20">
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
                {COMPANY_CONTACT.headOfficeAddress}
              </p>
            </div>

            {/* Card 2 - Phone */}
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-2xs hover:-translate-y-1 transition duration-200">
              <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 text-kc-orange">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phone Number</h3>
              <div className="space-y-1 font-semibold">
                <Link href={COMPANY_CONTACT.tel} className="block text-gray-600 hover:text-kc-orange text-sm transition">
                  {COMPANY_CONTACT.phone}
                </Link>
              </div>
            </div>

            {/* Card 3 - Email */}
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-2xs hover:-translate-y-1 transition duration-200">
              <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-6 text-kc-orange">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email Addresses</h3>
              <div className="space-y-1">
                <Link href={COMPANY_CONTACT.mailto} className="block text-gray-600 hover:text-kc-orange font-semibold text-sm transition">
                  {COMPANY_CONTACT.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Associated Portals Row */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-2xl p-6 text-white text-center shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <i className="fas fa-globe text-xl text-white"></i>
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">Our Dedicated Portals</h4>
                <p className="text-xs text-orange-100 font-medium">Specialized web platforms for Customs Duty and GST Refund processing</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={COMPANY_CONTACT.websites.customDutyRefund}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-kc-orange font-bold text-xs rounded-xl shadow-xs hover:bg-orange-50 transition flex items-center gap-1.5"
              >
                <span>www.customdutyrefund.com</span>
                <i className="fas fa-external-link-alt text-[10px] text-kc-orange"></i>
              </Link>
              <Link
                href={COMPANY_CONTACT.websites.gstRefundIndia}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-kc-orange font-bold text-xs rounded-xl shadow-xs hover:bg-orange-50 transition flex items-center gap-1.5"
              >
                <span>www.gstrefundindia.com</span>
                <i className="fas fa-external-link-alt text-[10px] text-kc-orange"></i>
              </Link>
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
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section (Above Footer) */}
        <section id="contact-form" className="pt-4">
          <ContactForm />
        </section>

      </main>
    </div>
  );
}
