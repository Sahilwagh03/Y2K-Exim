"use client";

import React, { useState, useEffect } from "react";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Show popup automatically after 500ms
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }, 500);

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      onClick={closePopup}
      className="fixed inset-0 w-full h-full bg-black/55 backdrop-blur-[4px] z-[10000] flex items-center justify-center p-4 select-none animate-popup-fade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[620px] max-w-full max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl relative border-t-4 border-kc-navy-700 flex flex-col animate-popup-fade"
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2.5 right-2.5 w-[30px] h-[30px] border-none rounded-full bg-orange-100 text-kc-orange font-bold text-lg flex items-center justify-center cursor-pointer hover:bg-kc-orange hover:text-white hover:rotate-90 transition-all duration-300 z-[9999]"
          aria-label="Close vision and mission popup"
        >
          &times;
        </button>

        <div className="p-[22px_26px_18px] overflow-y-auto">
          {/* Header */}
          <div className="text-center pb-2.5 border-b border-gray-200 mb-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="h-9 w-9 text-kc-orange fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-lg text-kc-navy-700 leading-none tracking-wide">
                  Y2k Exim
                </span>
                <span className="text-[8px] text-kc-orange font-bold tracking-[0.2em] uppercase mt-0.5">
                  Group
                </span>
              </div>
            </div>
            <h2 className="text-xl font-extrabold text-kc-navy-700 leading-tight">
              Welcome to Y2k Exim
            </h2>
            <p className="text-gray-500 text-xs mt-1 max-w-sm">
              Your Trusted Partner for DGFT, Taxation & Industrial Subsidies
            </p>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Vision Card */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 flex flex-col">
              <h3 className="text-[14px] font-bold text-kc-navy-700 text-center mb-3 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <i className="fas fa-eye text-kc-gold"></i>
                Our Vision
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  "Digitalisation (Most of the Transactions)",
                  "Faceless & Paperless Transactions (Minimal Dependency)",
                  "Error-Free & Risk-Free Transactions",
                  "Best Turn Around Time (TAT) / Transaction Lead Time",
                  "Affordable Costing / Pricing"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-[3px] border-kc-orange rounded px-2.5 py-1.5 text-[11px] leading-relaxed text-gray-700 shadow-sm hover:translate-x-1 hover:bg-[#fff7ed] transition-all duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 flex flex-col">
              <h3 className="text-[14px] font-bold text-kc-navy-700 text-center mb-3 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <i className="fas fa-bullseye text-kc-orange"></i>
                Our Mission
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  "Structured ways of Office Working Environment",
                  "Subject Matter Expertise",
                  "Ease of Doing Business"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-[3px] border-kc-orange rounded px-2.5 py-1.5 text-[11px] leading-relaxed text-gray-700 shadow-sm hover:translate-x-1 hover:bg-[#fff7ed] transition-all duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8fafc] py-2 text-center text-[10px] text-gray-400 border-t border-gray-200">
          Serving client success across India.
        </div>
      </div>
    </div>
  );
}
