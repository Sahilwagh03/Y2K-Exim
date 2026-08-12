import React from "react";

export default function PortCodesHeader() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-16 px-6 md:px-12 border-b border-orange-100/50">
      <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
      <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
          <i className="fas fa-anchor text-xs text-kc-orange"></i>
          <span>ICEGATE & Customs Location Codes</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
          Indian Customs <span className="text-kc-orange">Port Codes Directory</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
          Complete database of 412 official Indian Customs Stations including Sea Ports, Air Cargo Complexes (ACC), Inland Container Depots (ICD), Container Freight Stations (CFS), and Land Customs Stations (LCS) with live EDI connectivity status.
        </p>
      </div>
    </section>
  );
}
