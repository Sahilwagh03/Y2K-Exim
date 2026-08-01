/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState<string | null>(null);
  const [activeMobileSubSubDropdown, setActiveMobileSubSubDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close search overlay on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    setActiveMobileSubDropdown(null);
    setActiveMobileSubSubDropdown(null);
  };

  const toggleMobileSubDropdown = (submenu: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileSubDropdown(activeMobileSubDropdown === submenu ? null : submenu);
    setActiveMobileSubSubDropdown(null);
  };

  const toggleMobileSubSubDropdown = (subsubmenu: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileSubSubDropdown(activeMobileSubSubDropdown === subsubmenu ? null : subsubmenu);
  };

  return (
    <>
      {/* Desktop Sticky Navigation */}
      <nav className="hidden md:block sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
        <div className="max-w-[1440px] mx-auto h-[68px] flex items-center justify-between px-6 gap-[18px] relative">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg
                className="h-10 w-10 text-kc-gold fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white leading-none tracking-wide">
                  Y2k Exim
                </span>
                <span className="text-[9px] text-kc-gold font-bold tracking-[0.2em] uppercase mt-0.5">
                  Group
                </span>
              </div>
            </div>
          </a>

          {/* Menu Items */}
          <ul className="flex items-center justify-evenly flex-1 h-full list-none p-0 m-0">
            <li className="flex items-center h-full">
              <a
                href="/"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                Home
              </a>
            </li>

            {/* DGFT MEGA MENU */}
            <li className="flex items-center h-full group">
              <a
                href="/dgft-consultants"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                DGFT
                <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              {/* Mega Menu Panel */}
              <div className="absolute top-full left-0 w-[1180px] max-w-[95vw] bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50 overflow-y-auto max-h-[75vh] review-text-scrollbar">
                <div className="flex items-start gap-9">
                  <div className="flex-1 grid grid-cols-4 gap-6">
                    {/* Column 1: Certifications & Registrations */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                        <i className="fas fa-certificate"></i> Certifications
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">Primary Certification</h4>
                      <a href="/rcmc-registration-certificate" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">RCMC</a>
                      <a href="/iec-importer-exporter-code" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">IEC</a>
                      <a href="/digital-signature" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">DSC</a>
                      <a href="/certificate-of-origin" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Certificate of Origin</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Other Certificates</h4>
                      <a href="/status-export-house-certificate" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Export House</a>
                      <a href="/free-sale-certificate" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Free Sale Certificate</a>
                      <a href="/rex" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">REX</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Monitoring System</h4>
                      <a href="/chip-import-monitoring-system" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">CHIMS</a>
                      <a href="/steel-import-monitoring-system" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">SIMS</a>
                      <a href="/pims" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">PIMS</a>
                      <a href="/non-ferrous-metals-import-monitoring-system" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">NFMIMS</a>
                      <a href="/coal-import-monitoring-system" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">CIMS</a>
                    </div>

                    {/* Column 2: Duty Exemption Schemes */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                        <i className="fas fa-file-signature"></i> Duty Exemption
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">
                        <a href="/advance-authorisation-scheme" className="hover:text-kc-orange">Advance Authorisation</a>
                      </h4>
                      <a href="/advance-authorisation-sion" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">SION</a>
                      <a href="/advance-authorisation-self-declaration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Self Declaration</a>
                      <a href="/advance-authorisation-self-ratification" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Self Ratification</a>
                      <a href="/advance-authorisation-net-to-net" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Net-to-Net</a>
                      <a href="/advance-authorisation-repeat-basis" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Repeat Basis</a>
                      <a href="/advance-authorisation-packing-material" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Packing Materials</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Compliance</h4>
                      <a href="/advance-authorisation-eo-extension" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AA EO Extension</a>
                      <a href="/advance-authorisation-eodc" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AA EODC / Surrender</a>
                    </div>

                    {/* Column 3: EPCG */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                        <i className="fas fa-cogs"></i> EPCG & Incentives
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">
                        <a href="/epcg-scheme" className="hover:text-kc-orange">Fresh EPCG</a>
                      </h4>
                      <a href="/epcg-direct-import" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Direct Import</a>
                      <a href="/epcg-indian-purchase" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Indian Purchase</a>
                      <a href="/epcg-spares-import" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Spares Import</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">EPCG Compliance</h4>
                      <a href="/epcg-extension" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">EPCG Extension</a>
                      <a href="/epcg-closure" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">EPCG Closure</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Duty Remission</h4>
                      <a href="/RoDTEP-scheme" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">RoDTEP</a>
                      <a href="/Duty-Drawback" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Duty Drawback (DBK)</a>
                      <a href="/interest-equalization-scheme-ies" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Interest Equalization</a>
                    </div>

                    {/* Column 4: Licences */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                        <i className="fas fa-id-card"></i> Licences
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">DGFT Licences</h4>
                      <a href="/restricted-authorisations-for-import-and-export-india" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Restricted Licences</a>
                      <a href="/restricted-import" className="block py-1.5 px-2 hover:text-kc-blue-600 pl-4 transition-all duration-200 text-gray-600 text-[12px] font-medium">↳ Import</a>
                      <a href="/restricted-export" className="block py-1.5 px-2 hover:text-kc-blue-600 pl-4 transition-all duration-200 text-gray-600 text-[12px] font-medium">↳ Export</a>
                      <a href="/scomet-authorisation" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">SCOMET</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">
                        <a href="/iem-industrial-entrepreneur-memorandum" className="hover:text-kc-orange">IEM</a>
                      </h4>
                      <a href="/iem-part-a" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">IEM Part-A</a>
                      <a href="/iem-part-b" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">IEM Part-B</a>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">
                        <a href="/FSSAI" className="hover:text-kc-orange">FSSAI</a>
                      </h4>
                      <a href="/fssai-central-license" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Fresh Central</a>
                      <a href="/fssai-state-license" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Fresh State</a>
                      <a href="/fssai-returns" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Returns</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* CUSTOMS MEGA MENU */}
            <li className="flex items-center h-full group">
              <a
                href="/Customs-House-Agent-Services"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                Customs
                <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              <div className="absolute top-full left-0 w-[820px] max-w-[92vw] bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50">
                <div className="flex items-start gap-9">
                  {/* Customs Services */}
                  <div className="flex-1 flex flex-col min-w-[230px]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                      <i className="fas fa-ship"></i> Customs Services
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">Core Operations</h4>
                    <a href="/freight-forwarding-services" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Freight Forwarding</a>
                    <a href="/Customs-Clearance" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Customs Clearance</a>
                    <a href="/Container-Transportation-Services" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Transport Services</a>

                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Customs Duty Schemes</h4>
                    <a href="/moowr-scheme" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">MOOWR Scheme</a>

                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Duty Refund</h4>
                    <a href="/customs-dbk-brand-rate-fixation" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Brand Rate Fixation</a>
                    <a href="/refund-of-customs-duty" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Refund of Customs Duty</a>
                    <a href="/customs-appeal" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Customs Appeal</a>
                  </div>

                  {/* Registrations & Compliance */}
                  <div className="flex-[2] flex flex-col pl-7 border-l border-gray-150">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                      <i className="fas fa-stamp"></i> Registrations &amp; Compliance
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">
                          <a href="/Authorized-Economic-Operator" className="hover:text-kc-orange">AEO &amp; Facilitation</a>
                        </h4>
                        <a href="/authorized-economic-operator-aeo-t1" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AEO - T1</a>
                        <a href="/authorized-economic-operator-aeo-t2" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AEO - T2</a>
                        <a href="/authorized-economic-operator-aeo-t3" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AEO - T3</a>
                        <a href="/authorized-economic-operator-aeo-lo" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">AEO - LO</a>
                        <a href="/self-sealing-permission" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Self Sealing Permission</a>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">
                          <a href="/EXIM-Licences-Registrations" className="hover:text-kc-orange">Registrations</a>
                        </h4>
                        <a href="/epr-certificate-registration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">EPR Registration</a>
                        <a href="/customs-ad-code-registration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Cus-AD Code</a>
                        <a href="/icegate-ifsc-code-registration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">IFSC Code Reg</a>
                        <a href="/icegate-registration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">IceGate Reg</a>
                        <a href="/customs-first-time-registration" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">First Time Reg</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* TAXATION MEGA MENU */}
            <li className="flex items-center h-full group">
              <a
                href="/Taxation"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                Taxation
                <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              <div className="absolute top-full left-0 w-[560px] max-w-[92vw] bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50">
                <div className="flex items-start gap-9">
                  {/* GST */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                      <i className="fas fa-receipt"></i> GST
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">
                      <a href="/gst" className="hover:text-kc-orange">GST Services</a>
                    </h4>
                    <a href="/gst-registration-certificate" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">GST Registration</a>
                    <a href="/gst-returns" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">GST Returns</a>

                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">
                      <a href="/gst-refund-deemed-export" className="hover:text-kc-orange">GST Refund</a>
                    </h4>
                    <a href="/gst-refund-deemed-export" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Deemed Export Refund</a>
                  </div>

                  {/* Compliance & Other */}
                  <div className="flex-1 flex flex-col pl-7 border-l border-gray-150">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                      <i className="fas fa-file-invoice"></i> Compliance &amp; Other
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2">GST Compliance</h4>
                    <a href="/Duty-Drawback" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">GST-DE-DBK</a>
                    <a href="/gst-pay-certificate" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">GST Pay Certificate</a>
                    <a href="/gst-letter-of-undertaking-lut" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">GST LUT</a>

                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mt-4 mb-2">Other Services</h4>
                    <a href="/labour-licence" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Labour License</a>
                    <a href="/detailed-project-report" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium">Detailed Project Report</a>
                  </div>
                </div>
              </div>
            </li>

            {/* RESOURCES MEGA MENU */}
            <li className="flex items-center h-full group relative">
              <a
                href="/y2k-exim-notifications"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                Resources
                <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
              </a>

              <div className="absolute top-full right-0 w-[260px] max-w-[92vw] bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                    <i className="fas fa-bell"></i> Resources
                  </div>
                  <a href="/y2k-exim-notifications" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-800 text-[14px] font-bold">Notifications</a>
                  <a href="/blogs" className="block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-800 text-[14px] font-bold mt-2">Blogs</a>
                </div>
              </div>
            </li>

            <li className="flex items-center h-full">
              <a
                href="/contact-us"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                Contact Us
              </a>
            </li>

            <li className="flex items-center h-full">
              <a
                href="/about-us"
                className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
              >
                About Us
              </a>
            </li>
          </ul>

          {/* Search trigger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 grid place-items-center bg-white/8 border-none rounded-full text-white cursor-pointer hover:bg-white/18 transition-all duration-220"
              aria-label="Open search overlay"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation & Menu Panel */}
      <nav className="block md:hidden sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
        <div className="flex items-center justify-between px-4 h-[68px]">
          {/* Logo */}
          <a href="/" className="mm-logo">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-8 w-8 text-kc-gold fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base text-white leading-none tracking-wide">
                  Y2k Exim
                </span>
                <span className="text-[8px] text-kc-gold font-bold tracking-[0.2em] uppercase mt-0.5">
                  Group
                </span>
              </div>
            </div>
          </a>

          {/* Mobile Buttons */}
          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="bg-none border-none text-white p-2.5 text-lg cursor-pointer"
              aria-label="Open Search"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-none border-none text-white p-2.5 text-lg cursor-pointer"
              aria-label="Toggle Menu"
            >
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-kc-navy-900 border-t border-white/10 max-h-[calc(100vh-68px)] overflow-y-auto w-full select-none pb-8 shadow-inner animate-popup-fade">
            <ul className="list-none m-0 p-0">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6"
                >
                  Home
                </a>
              </li>

              {/* DGFT */}
              <li>
                <div
                  onClick={() => toggleMobileDropdown("dgft")}
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                >
                  <span>DGFT</span>
                  <i className={`fas text-xs text-kc-gold-light ${activeMobileDropdown === "dgft" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </div>

                {activeMobileDropdown === "dgft" && (
                  <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                    {/* Certifications */}
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("dgft-certs", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Certifications &amp; Registrations</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "dgft-certs" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "dgft-certs" && (
                        <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[13px]">
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-certs-primary", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>Primary Certification</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-certs-primary" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-certs-primary" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/rcmc-registration-certificate" className="p-2 hover:text-white">RCMC</a>
                                <a href="/iec-importer-exporter-code" className="p-2 hover:text-white">IEC</a>
                                <a href="/digital-signature" className="p-2 hover:text-white">DSC</a>
                                <a href="/certificate-of-origin" className="p-2 hover:text-white">Certificate of Origin</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-certs-other", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>Other Certificates</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-certs-other" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-certs-other" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/status-export-house-certificate" className="p-2 hover:text-white">Export House</a>
                                <a href="/free-sale-certificate" className="p-2 hover:text-white">Free Sale</a>
                                <a href="/rex" className="p-2 hover:text-white">REX</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-certs-monitor", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>Import Monitoring System</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-certs-monitor" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-certs-monitor" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/chip-import-monitoring-system" className="p-2 hover:text-white">CHIMS</a>
                                <a href="/steel-import-monitoring-system" className="p-2 hover:text-white">SIMS</a>
                                <a href="/pims" className="p-2 hover:text-white">PIMS</a>
                                <a href="/non-ferrous-metals-import-monitoring-system" className="p-2 hover:text-white">NFMIMS</a>
                                <a href="/coal-import-monitoring-system" className="p-2 hover:text-white">CIMS</a>
                              </div>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Duty Exemption Schemes */}
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("dgft-exempt", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Duty Exemption Schemes</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "dgft-exempt" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "dgft-exempt" && (
                        <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[13px]">
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-exempt-aa", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>Advance Authorisation</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-exempt-aa" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-exempt-aa" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/advance-authorisation-sion" className="p-2 hover:text-white">SION</a>
                                <a href="/advance-authorisation-self-declaration" className="p-2 hover:text-white">Self Declaration</a>
                                <a href="/advance-authorisation-self-ratification" className="p-2 hover:text-white">Self Ratification</a>
                                <a href="/advance-authorisation-net-to-net" className="p-2 hover:text-white">Net-to-Net</a>
                                <a href="/advance-authorisation-repeat-basis" className="p-2 hover:text-white">Repeat Basis</a>
                                <a href="/advance-authorisation-packing-material" className="p-2 hover:text-white">Packing Materials</a>
                                <a href="/advance-authorisation-eo-extension" className="p-2 hover:text-white">EO Extension</a>
                                <a href="/advance-authorisation-eodc" className="p-2 hover:text-white">EODC / Surrender</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-exempt-epcg", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>EPCG</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-exempt-epcg" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-exempt-epcg" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/epcg-direct-import" className="p-2 hover:text-white">Direct Import</a>
                                <a href="/epcg-indian-purchase" className="p-2 hover:text-white">Indian Purchase</a>
                                <a href="/epcg-spares-import" className="p-2 hover:text-white">Spares Import</a>
                                <a href="/epcg-extension" className="p-2 hover:text-white">Extension</a>
                                <a href="/epcg-closure" className="p-2 hover:text-white">Closure / Surrender</a>
                              </div>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Incentives */}
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("dgft-incentives", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Duty Remission / Export Incentives</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "dgft-incentives" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "dgft-incentives" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/RoDTEP-scheme" className="p-2 hover:text-white">RoDTEP</a>
                          <a href="/Duty-Drawback" className="p-2 hover:text-white">DBK (Duty Drawback)</a>
                          <a href="/interest-equalization-scheme-ies" className="p-2 hover:text-white">IES (Interest Equalization)</a>
                        </div>
                      )}
                    </li>

                    {/* Licences */}
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("dgft-licences", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Licences</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "dgft-licences" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "dgft-licences" && (
                        <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[13px]">
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-lic-dgft", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>DGFT Licences</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-lic-dgft" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-lic-dgft" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/restricted-import" className="p-2 hover:text-white">Restricted Import</a>
                                <a href="/restricted-export" className="p-2 hover:text-white">Restricted Export</a>
                                <a href="/scomet-authorisation" className="p-2 hover:text-white">SCOMET</a>
                                <a href="/EXIM-Licences-Registrations" className="p-2 hover:text-white">Other Regulatory</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-lic-iem", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>IEM</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-lic-iem" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-lic-iem" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/iem-part-a" className="p-2 hover:text-white">IEM Part-A</a>
                                <a href="/iem-part-b" className="p-2 hover:text-white">IEM Part-B</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("dgft-lic-fssai", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>FSSAI</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "dgft-lic-fssai" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "dgft-lic-fssai" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/fssai-central-license" className="p-2 hover:text-white">Fresh Central</a>
                                <a href="/fssai-state-license" className="p-2 hover:text-white">Fresh State</a>
                                <a href="/fssai-returns" className="p-2 hover:text-white">Returns</a>
                              </div>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* Customs */}
              <li>
                <div
                  onClick={() => toggleMobileDropdown("customs")}
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                >
                  <span>Customs</span>
                  <i className={`fas text-xs text-kc-gold-light ${activeMobileDropdown === "customs" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </div>

                {activeMobileDropdown === "customs" && (
                  <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("cust-services", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Customs Services</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "cust-services" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "cust-services" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/freight-forwarding-services" className="p-2 hover:text-white">Freight Forwarding</a>
                          <a href="/Customs-Clearance" className="p-2 hover:text-white">Customs Clearance</a>
                          <a href="/Container-Transportation-Services" className="p-2 hover:text-white">Transport Services</a>
                          <a href="/moowr-scheme" className="p-2 hover:text-white">MOOWR Scheme</a>
                          <a href="/customs-dbk-brand-rate-fixation" className="p-2 hover:text-white">Brand Rate Fixation</a>
                          <a href="/refund-of-customs-duty" className="p-2 hover:text-white">Refund of Duty</a>
                          <a href="/customs-appeal" className="p-2 hover:text-white">Customs Appeal</a>
                        </div>
                      )}
                    </li>

                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("cust-compliance", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Registrations &amp; Compliance</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "cust-compliance" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "cust-compliance" && (
                        <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[13px]">
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("cust-comp-aeo", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>AEO &amp; Facilitation</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "cust-comp-aeo" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "cust-comp-aeo" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/authorized-economic-operator-aeo-t1" className="p-2 hover:text-white">AEO - T1</a>
                                <a href="/authorized-economic-operator-aeo-t2" className="p-2 hover:text-white">AEO - T2</a>
                                <a href="/authorized-economic-operator-aeo-t3" className="p-2 hover:text-white">AEO - T3</a>
                                <a href="/authorized-economic-operator-aeo-lo" className="p-2 hover:text-white">AEO - LO</a>
                                <a href="/self-sealing-permission" className="p-2 hover:text-white">Self Sealing</a>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              onClick={(e) => toggleMobileSubSubDropdown("cust-comp-reg", e)}
                              className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                            >
                              <span>Registrations</span>
                              <i className={`fas text-[9px] ${activeMobileSubSubDropdown === "cust-comp-reg" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </div>
                            {activeMobileSubSubDropdown === "cust-comp-reg" && (
                              <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
                                <a href="/epr-certificate-registration" className="p-2 hover:text-white">EPR Registration</a>
                                <a href="/customs-ad-code-registration" className="p-2 hover:text-white">Cus-AD Code</a>
                                <a href="/icegate-ifsc-code-registration" className="p-2 hover:text-white">IFSC Code Reg</a>
                                <a href="/icegate-registration" className="p-2 hover:text-white">IceGate Reg</a>
                                <a href="/customs-first-time-registration" className="p-2 hover:text-white">First Time Reg</a>
                              </div>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* Subsidies */}
              <li>
                <div
                  onClick={() => toggleMobileDropdown("subsidies")}
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                >
                  <span>Industrial Subsidies</span>
                  <i className={`fas text-xs text-kc-gold-light ${activeMobileDropdown === "subsidies" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </div>

                {activeMobileDropdown === "subsidies" && (
                  <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("subs-central", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>Central Govt Schemes</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "subs-central" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "subs-central" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/agro-processing-cluster" className="p-2 hover:text-white">MoFPI - APC</a>
                          <a href="/creation-expansion-of-food-processing-preservation-capacity-scheme" className="p-2 hover:text-white">MoFPI - CEFPPC</a>
                          <a href="/integrated-cold-chain" className="p-2 hover:text-white">MoFPI - ICC</a>
                          <a href="/mega-food-park" className="p-2 hover:text-white">MoFPI - MFP</a>
                          <a href="/operation-greens" className="p-2 hover:text-white">MoFPI - Greens</a>
                          <a href="/nabard-primary-processing" className="p-2 hover:text-white">NABARD - Primary Processing</a>
                          <a href="/nabard-silos" className="p-2 hover:text-white">NABARD - Silos</a>
                          <a href="/rural-godowns" className="p-2 hover:text-white">NABARD - Godowns</a>
                          <a href="/rural-poultry-project" className="p-2 hover:text-white">NLM - Poultry</a>
                          <a href="/sheep-goat-breeding-farm" className="p-2 hover:text-white">NLM - Sheep &amp; Goat</a>
                          <a href="/fodder-value-addition-units" className="p-2 hover:text-white">NLM - Fodder</a>
                          <a href="/pig-breeding-farm" className="p-2 hover:text-white">NLM - Pig Farm</a>
                          <a href="/apeda-infra" className="p-2 hover:text-white">APEDA - Infra</a>
                          <a href="/apeda-pack-house" className="p-2 hover:text-white">APEDA - Pack House</a>
                          <a href="/ahidf-subsidy-consultants" className="p-2 hover:text-white">AHIDF</a>
                          <a href="/NABARD-Agriculture-Infrastructure-Fund" className="p-2 hover:text-white">Agri Infrastructure</a>
                          <a href="/ministry-of-new-and-renewable-energy" className="p-2 hover:text-white">MNRE</a>
                        </div>
                      )}
                    </li>

                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("subs-state", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>State Govt Schemes</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "subs-state" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "subs-state" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/Andhra-Pradesh-State-Schemes" className="p-2 hover:text-white">APFPS / AP Schemes</a>
                          <a href="/telangana-state-schemes" className="p-2 hover:text-white">Telangana (TG-DIC)</a>
                          <a href="/karnataka-state-schemes" className="p-2 hover:text-white">Karnataka (KS-DIC)</a>
                        </div>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* Taxation */}
              <li>
                <div
                  onClick={() => toggleMobileDropdown("taxation")}
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                >
                  <span>Taxation</span>
                  <i className={`fas text-xs text-kc-gold-light ${activeMobileDropdown === "taxation" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </div>

                {activeMobileDropdown === "taxation" && (
                  <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("tax-gst", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>GST Services</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "tax-gst" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "tax-gst" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/gst-registration-certificate" className="p-2 hover:text-white">GST Registration</a>
                          <a href="/gst-returns" className="p-2 hover:text-white">GST Returns</a>
                          <a href="/gst-refund-deemed-export" className="p-2 hover:text-white">GST Deemed Export Refund</a>
                        </div>
                      )}
                    </li>
                    <li>
                      <div
                        onClick={(e) => toggleMobileSubDropdown("tax-compliance", e)}
                        className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                      >
                        <span>GST Compliance &amp; Other</span>
                        <i className={`fas text-[10px] ${activeMobileSubDropdown === "tax-compliance" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                      </div>
                      {activeMobileSubDropdown === "tax-compliance" && (
                        <div className="flex flex-col pl-8 text-xs bg-black/10 pb-2 border-b border-white/5">
                          <a href="/Duty-Drawback" className="p-2 hover:text-white">GST-DE-DBK</a>
                          <a href="/gst-pay-certificate" className="p-2 hover:text-white">GST Pay Certificate</a>
                          <a href="/gst-letter-of-undertaking-lut" className="p-2 hover:text-white">GST LUT</a>
                          <a href="/labour-licence" className="p-2 hover:text-white">Labour License</a>
                          <a href="/detailed-project-report" className="p-2 hover:text-white">Detailed Project Report</a>
                        </div>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* Resources */}
              <li>
                <div
                  onClick={() => toggleMobileDropdown("resources")}
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                >
                  <span>Resources</span>
                  <i className={`fas text-xs text-kc-gold-light ${activeMobileDropdown === "resources" ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </div>

                {activeMobileDropdown === "resources" && (
                  <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                    <li>
                      <a href="/y2k-exim-notifications" className="block p-[10px_24px] border-b border-white/5 hover:bg-white/6 text-gray-300 font-semibold">
                        Notifications
                      </a>
                    </li>
                    <li>
                      <a href="/blogs" className="block p-[10px_24px] border-b border-white/5 hover:bg-white/6 text-gray-300 font-semibold">
                        Blogs
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/about-us"
                  className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Google Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-[99999] animate-popup-fade select-none">
          <div className="w-[900px] max-w-[90%] bg-white p-[30px] rounded-lg relative">
            {/* Close Search Button */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute -top-12 right-0 text-white border-none bg-transparent text-3xl cursor-pointer hover:scale-110 transition duration-200"
              aria-label="Close search overlay"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Embedded Google GCSE */}
            <div className="w-full">
              <iframe
                src="https://cse.google.com/cse.js?cx=048b28fae166745ae"
                className="hidden"
                title="GCSE Loader"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <script async src="https://cse.google.com/cse.js?cx=048b28fae166745ae"></script>
                  <div class="gcse-search"></div>
                `,
                }}
              />
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              Type your search query and press Enter
            </p>
          </div>
        </div>
      )}
    </>
  );
}
