"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface FunnelClientProps {
  baseWhatsappUrl: string;
  phoneNumber: string;
}

export default function FunnelClient({
  baseWhatsappUrl,
  phoneNumber,
}: FunnelClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Pre-filled WhatsApp message state
  const [selectedIssue, setSelectedIssue] = useState<string>("Pending export IGST refund");
  const [approxAmount, setApproxAmount] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [showQuickForm, setShowQuickForm] = useState(false);

  const generateWhatsappUrl = () => {
    let msg = `Hello Y2K Exim,\n\nWe have a pending export-import refund issue and would like an initial case review.\n\n*Type of issue:* ${selectedIssue}`;
    if (approxAmount.trim()) {
      msg += `\n*Approximate refund amount:* ₹${approxAmount.trim()}`;
    }
    if (companyName.trim()) {
      msg += `\n*Company name:* ${companyName.trim()}`;
    }
    msg += `\n\nPlease guide us regarding the next steps and documents required.`;
    return `${baseWhatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  const defaultWhatsappUrl = `${baseWhatsappUrl}?text=${encodeURIComponent(
    "Hello Y2K Exim,\n\nWe have a pending export-import refund issue and would like an initial case review.\n\nType of issue: Pending export IGST refund\nPlease guide us regarding next steps."
  )}`;

  const painPoints = [
    {
      t: "Pending export IGST refund",
      d: "Refund not received despite export completion and valid GSTR filings.",
      icon: "fa-solid fa-clock-rotate-left",
    },
    {
      t: "Shipping bill or invoice mismatch",
      d: "Details do not match across customs (ICEGATE) and GST records (SB005 errors).",
      icon: "fa-solid fa-file-circle-xmark",
    },
    {
      t: "ICEGATE validation errors & EGM",
      d: "Refund validation errors, Gateway EGM errors, or scroll generation delays.",
      icon: "fa-solid fa-triangle-exclamation",
    },
    {
      t: "Old unresolved refund cases",
      d: "Cases from previous financial years that require specialized legal & dept review.",
      icon: "fa-solid fa-folder-open",
    },
    {
      t: "Duplicate customs duty payment",
      d: "Multiple bank debits during clearance but only single payment reflected on ICEGATE.",
      icon: "fa-solid fa-copy",
    },
    {
      t: "Export incentives & duty refunds",
      d: "Unprocessed RoDTEP, RoSCTL, duty drawback, or special customs duty refunds.",
      icon: "fa-solid fa-receipt",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Case Assessment",
      desc: "We review your available shipping bills, refund status, payment records, and ICEGATE scroll logs.",
      icon: "fa-solid fa-file-magnifying-glass",
    },
    {
      step: "02",
      title: "Identify Discrepancies",
      desc: "Investigate DGARM alerts, transmission errors, port mismatches, or specific GST discrepancies.",
      icon: "fa-solid fa-list-check",
    },
    {
      step: "03",
      title: "Recommend Next Steps",
      desc: "Provide the exact rectification procedure, departmental representation, or amendment route.",
      icon: "fa-solid fa-route",
    },
  ];

  const assistanceAreas = [
    "Export IGST refund issues & clearance",
    "Customs duty refund & duplicate payment cases",
    "ICEGATE and shipping bill discrepancies (SB005, EGM)",
    "GST-related export refund (LUT / payment route)",
    "RoDTEP, MEIS & export incentive queries",
    "Pending or older export-import refund cases",
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Banner Bar */}
      <header className="sticky top-0 z-50 bg-[#090a0f]/95 backdrop-blur-md border-b border-gray-800/80 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/img/y2k-logo.webp"
              alt="Y2K Exim Logo"
              width={34}
              height={34}
              className="rounded-full object-contain"
            />
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-white block leading-tight">
                Y2K EXIM SERVICES PVT LTD.
              </span>
            </div>
          </div>

          <a
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg transition duration-200"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-12 sm:pt-16 sm:pb-16 overflow-hidden border-b border-gray-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-orange-600/15 via-emerald-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            Your Export Refund Is Pending.{" "}
            <span className="text-orange-500">
              Have You Checked Why?
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Specialized support for unresolved export-import refund cases across India.
          </p>

          {/* Founder / Explainer Video Container - Wide Screen Coverage */}
          <div className="w-full max-w-4xl lg:max-w-5xl mx-auto mt-6 sm:mt-8">
            <div
              onClick={handlePlayToggle}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] max-h-[70vh] bg-[#141414] rounded-2xl sm:rounded-3xl border border-gray-800 hover:border-orange-500/50 flex items-center justify-center overflow-hidden cursor-pointer group shadow-2xl transition-all"
              role="button"
              tabIndex={0}
              aria-label={isPlaying ? "Pause Video" : "Play Founder Introduction Video"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePlayToggle();
                }
              }}
            >
              <video
                ref={videoRef}
                src="/ship-video.mp4"
                playsInline
                controls={isPlaying}
                onEnded={() => setIsPlaying(false)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-50"
                  }`}
              />

              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 bg-gradient-to-t from-black/85 via-black/35 to-black/40">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/90 flex items-center justify-center text-white text-xl sm:text-2xl group-hover:scale-110 group-hover:border-orange-400 group-hover:text-orange-400 transition-all duration-200 bg-black/60 backdrop-blur-xs shadow-2xl">
                    <i className="fa-solid fa-play ml-1"></i>
                  </div>
                  <span className="mt-4 text-sm sm:text-base font-semibold text-gray-100 text-center tracking-wide drop-shadow-md">
                    Founder Introduction & Advisory Overview • 30 sec
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    Click to play with sound
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="mt-6 max-w-xl mx-auto bg-gray-900/90 border border-gray-800 rounded-2xl p-5 sm:p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-white font-bold text-base sm:text-lg">
                  Have a pending refund case?
                </h2>
                <p className="text-xs text-gray-400">
                  Discuss your issue directly with Y2K Exim experts on WhatsApp.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Direct Review
              </span>
            </div>

            {/* Quick pre-qualify inputs */}
            {showQuickForm ? (
              <div className="space-y-3 pt-2 border-t border-gray-800">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Select Your Issue Type:
                  </label>
                  <select
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 text-white text-xs sm:text-sm rounded-lg p-2.5 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Pending export IGST refund">Pending export IGST refund</option>
                    <option value="Shipping bill or invoice mismatch (SB005)">Shipping bill or invoice mismatch (SB005)</option>
                    <option value="ICEGATE validation / EGM errors">ICEGATE validation / EGM errors</option>
                    <option value="Duplicate customs duty payment">Duplicate customs duty payment</option>
                    <option value="Export incentives / RoDTEP issue">Export incentives / RoDTEP issue</option>
                    <option value="Old unresolved refund case">Old unresolved refund case</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Approx. Refund Amount (₹):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5,50,000"
                      value={approxAmount}
                      onChange={(e) => setApproxAmount(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-700 text-white text-xs sm:text-sm rounded-lg p-2.5 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ABC Exports Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-700 text-white text-xs sm:text-sm rounded-lg p-2.5 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowQuickForm(true)}
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold mb-3 flex items-center gap-1.5 transition"
              >
                <i className="fa-solid fa-sliders"></i>
                <span>Optional: Add issue details for instant tailored guidance</span>
              </button>
            )}

            <a
              href={showQuickForm ? generateWhatsappUrl() : defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg text-center"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Discuss Your Case on WhatsApp</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-90"></i>
            </a>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
              <span>*Initial case review available</span>
              <span>Direct Phone: {phoneNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Relatable Issues Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">
            Identify Your Situation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Does Your Business Face Any of These Issues?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Most delays stem from identifiable technical or documentation bottlenecks across customs and GST portals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-gray-700 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 text-base">
                <i className={item.icon}></i>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.t}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] sm:text-xs text-gray-500 text-center mt-6">
          Important: Whether a refund can be recovered depends on individual case facts, portal records, applicable customs rules, and statutory deadlines.
        </p>
      </section>

      {/* How Y2K Exim Can Help */}
      <section className="py-12 px-4 bg-gray-950/70 border-y border-gray-800/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              Clear & Transparent Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How Y2K Exim Can Help
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
              We assist businesses in examining refund issues, identifying discrepancies, and determining the appropriate procedural steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 relative hover:border-orange-500/40 transition group"
              >
                <span className="text-3xl font-black text-gray-800 group-hover:text-orange-500/30 transition-colors absolute top-4 right-5">
                  {st.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl mb-4">
                  <i className={st.icon}></i>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Assistance & Why Choose Us */}
      <section className="py-12 px-4 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Column 1: Areas */}
          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
            <span className="text-xs font-bold text-orange-400 tracking-wider uppercase block mb-1">
              Scope of Service
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-5">
              Our Areas of Assistance
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {assistanceAreas.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-check text-emerald-400 text-sm flex-shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Why Contact Y2K Exim */}
          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
            <span className="text-xs font-bold text-orange-400 tracking-wider uppercase block mb-1">
              Why Exporters Trust Us
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-5">
              Why Contact Y2K Exim?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Specialized focus</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Dedicated focus on export-import refunds, ICEGATE customs procedures, and related documentation for over 28 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-file-shield"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Case-specific review</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Recommendations based strictly on your actual records and port notifications rather than generic templates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transparent fee discussion</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Clear understanding of the proposed scope of work and professional terms before initiating any file processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-12 px-4 bg-gradient-to-t from-gray-950 via-gray-900 to-[#090a0f] border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center bg-gray-900/90 border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <span className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 inline-flex items-center justify-center text-xl mb-3">
            <i className="fa-brands fa-whatsapp"></i>
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have You Been Waiting for Your Refund?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
            Don't assume the issue will resolve automatically or that recovery is impossible without a structured case assessment.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-gray-400">
            Share a brief description of your issue with Y2K Exim to discuss the appropriate next steps.
          </p>

          <a
            href={defaultWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-emerald-900/40"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Chat With Y2K Exim on WhatsApp</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-90"></i>
          </a>

          <div className="mt-5 pt-5 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400 font-medium">
            <span>WhatsApp / Call: <strong className="text-gray-200">{phoneNumber}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span>Email: <strong className="text-gray-200">info@y2kexim.com</strong></span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 px-4 text-center border-t border-gray-800/60 text-xs text-gray-500">
        <p>© 2026 Y2K Exim Services Pvt Ltd. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-gray-600">
          Disclaimer: Consultancy services are provided strictly in accordance with statutory customs and GST regulations.
        </p>
      </footer>
    </div>
  );
}
