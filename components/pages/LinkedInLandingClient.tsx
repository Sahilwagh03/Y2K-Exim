"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LinkedInLandingClientProps {
  whatsappUrl: string;
  phoneNumber: string;
}

export default function LinkedInLandingClient({
  whatsappUrl,
  phoneNumber,
}: LinkedInLandingClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const issuesList = [
    {
      code: "IGST-SB",
      title: "Pending Export IGST Refund",
      desc: "Goods shipped and export concluded months ago, but the refund has not been credited to your bank account.",
      badge: "Most Common",
    },
    {
      code: "ERR-005",
      title: "Shipping Bill & Invoice Mismatch",
      desc: "Discrepancy in invoice number, port code, or taxable values between GSTR-1, GSTR-3B and ICEGATE.",
      badge: "Data Conflict",
    },
    {
      code: "ICE-VAL",
      title: "ICEGATE Validation & EGM Errors",
      desc: "Electronic General Manifest (EGM) error code SB005, PFMS validation delays, or gateway transmission blocks.",
      badge: "Portal Glitch",
    },
    {
      code: "FY-HIST",
      title: "Old Cases From Prior Financial Years",
      desc: "Pending refunds from FY 17-18 to 22-23 written off as stuck or dead in internal accounting books.",
      badge: "Historical Audit",
    },
    {
      code: "CUST-DUP",
      title: "Duplicate Customs Duty Payment",
      desc: "Double debit during customs e-payment where bank account was charged twice but ICEGATE reflects single clearance.",
      badge: "Duty Double-Charge",
    },
    {
      code: "RODTEP",
      title: "RoDTEP, RoSCTL & Export Incentive Locks",
      desc: "Uncredited duty remission scrips, ledger posting delays, or technical discrepancies on the DGFT portal.",
      badge: "Incentive Hold",
    },
  ];

  const stepsList = [
    {
      step: "01",
      title: "Case Assessment & Audit",
      desc: "We review your shipping bills, ICEGATE logs, GSTR-1 / 3B filings, and bank debit logs to reconstruct the timeline.",
    },
    {
      step: "02",
      title: "Identify Root Discrepancy",
      desc: "Isolate the exact error code (e.g. SB005, EGM mismatch, PFMS account mismatch, or IGST value variance).",
    },
    {
      step: "03",
      title: "Action Plan & Representation",
      desc: "Guide through the relevant officer rectification, port-level concordance table, or official clarification representation.",
    },
  ];

  const faqs = [
    {
      q: "Can export refunds from older financial years still be recovered?",
      a: "Yes, in many legitimate export instances where goods physically left Indian ports and tax was paid, procedural errors or portal transmission failures can be legally rectified subject to statutory verification and documentation.",
    },
    {
      q: "What documents are required for an initial case review?",
      a: "Typically, copies of the relevant Shipping Bills, GSTR-1 (Table 6A), GSTR-3B, the ICEGATE refund status inquiry screenshot, and invoice copies are sufficient to pinpoint the block.",
    },
    {
      q: "How does Y2K Exim work regarding fees and transparency?",
      a: "We assess the viability of your case first. Scope of work, procedural feasibility, and transparent fee structures are agreed upon beforehand with zero hidden surprises.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Top Professional Banner */}
      <header className="border-b border-slate-800 bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-slate-700">
              <Image
                src="/img/y2k-logo.webp"
                alt="Y2K Exim Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-sm font-extrabold tracking-wider text-white uppercase block leading-tight">
                Y2K EXIM SERVICES
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide block">
                Exim & Customs Advisory • Est. 2000
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-slate-700/80 rounded-lg px-3 py-1.5 bg-slate-800/40"
            >
              <i className="fas fa-phone text-emerald-400"></i>
              <span>{phoneNumber}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-slate-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-emerald-950/40"
            >
              <i className="fab fa-whatsapp text-base"></i>
              <span>Discuss Case on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Problem-First Headline for CFOs & Exporters */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.15),transparent)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            For Exporters, Importers, CFOs & Finance Directors
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Your Export Refund Is Pending.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Have You Checked Why?
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Goods exported and duty paid, but your IGST refund or customs claim remains unresolved? 
            Before writing it off as lost working capital, identify whether a shipping bill mismatch, 
            ICEGATE validation error, or documentation discrepancy is holding your funds.
          </p>

          {/* Quick Problem Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-10 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="bg-slate-800/70 border border-slate-700 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <i className="fas fa-circle-exclamation text-amber-400"></i> SB005 Mismatch
            </span>
            <span className="bg-slate-800/70 border border-slate-700 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <i className="fas fa-circle-exclamation text-amber-400"></i> EGM Error
            </span>
            <span className="bg-slate-800/70 border border-slate-700 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <i className="fas fa-circle-exclamation text-amber-400"></i> Old Cases (FY 17–23)
            </span>
            <span className="bg-slate-800/70 border border-slate-700 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <i className="fas fa-circle-exclamation text-amber-400"></i> Double Customs Duty Debit
            </span>
          </div>

          {/* Primary CTA Box */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-2xl backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
              Have a Pending Refund Case?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Connect directly with Y2K Exim&apos;s senior specialists on WhatsApp for an initial case review.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-slate-950 font-extrabold text-base sm:text-lg py-3.5 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-emerald-950/60"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>Discuss Your Case on WhatsApp</span>
              <i className="fas fa-arrow-right text-sm"></i>
            </a>

            <div className="flex items-center justify-center gap-6 mt-4 text-[11px] sm:text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-shield-halved text-emerald-400"></i> Confidential Review
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-bolt text-emerald-400"></i> Direct Specialist Reply
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Relatable Problem Diagnostic */}
      <section className="py-16 sm:py-20 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Case Identification
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Does Your Business Face Any of These Issues?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Most pending export refunds in India remain unpaid due to technical transmission flags 
              rather than lack of legitimacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {issuesList.map((issue, idx) => (
              <div
                key={idx}
                className="bg-[#141a24] border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 border border-slate-700">
                      {issue.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">
                      {issue.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {issue.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>Verify case status</span>
                  <i className="fas fa-chevron-right ml-1.5 text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Notice / Qualification */}
          <div className="mt-10 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-center max-w-3xl mx-auto">
            <p className="text-xs text-slate-400 leading-normal">
              <strong className="text-slate-200">Important Note:</strong> Whether an export refund or duty claim can be recovered depends on individual transaction facts, customs records, statutory compliance, and applicable regulatory timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Systematic 3-Step Review Process */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Y2K Exim Resolves Stuck Cases
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              A structured, evidence-backed approach to identify and rectify customs & GST blockages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {stepsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-emerald-500/20 font-mono mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <i className="fas fa-check-circle text-emerald-500/70"></i>
                  <span>Documented procedure</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Specialized Areas of Assistance */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Scope of Practice
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Advisory Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Export IGST Refund discrepancy rectification (SB005, EGM errors)",
              "Customs Duty Refund & Double Payment recovery representations",
              "ICEGATE transmission & Shipping Bill amendment proceedings",
              "GST export refund without payment of tax (LUT - RFD-01 accumulated ITC)",
              "RoDTEP, RoSCTL, & MEIS duty remission ledger queries",
              "Review of legacy/stuck refund cases from previous financial years",
            ].map((scope, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 bg-slate-900/80 border border-slate-800/80 p-4 rounded-xl"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] text-emerald-400">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-sm text-slate-300 font-medium leading-snug">
                  {scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Consult Y2K Exim */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              The Y2K Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Corporate Exporters Consult Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111722] border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-crosshairs"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Specialized Focus</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We do not generalize. Our team focuses exclusively on export-import customs clearance, IGST refunds, and statutory foreign trade procedures.
              </p>
            </div>

            <div className="bg-[#111722] border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-file-invoice text-emerald-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Case-Specific Audit</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Recommendations are based on actual shipping bills, EDI logs, and GST concordance rather than generic theoretical advice.
              </p>
            </div>

            <div className="bg-[#111722] border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mb-4">
                <i className="fas fa-handshake text-emerald-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Transparent Engagement</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Understand the exact procedural viability, documentation feasibility, and agreed fee terms prior to initiating representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive FAQs */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-emerald-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-xs text-slate-400 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180 text-emerald-400" : ""
                    }`}
                  ></i>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA / Footer Action */}
      <section className="py-16 sm:py-20 relative bg-gradient-to-b from-slate-900 to-[#07090d]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Have You Been Waiting Months for Your Refund?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Don&apos;t assume the money is permanently blocked without examining the case error logs. Share your shipping bill details directly with our specialists.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-slate-950 font-extrabold text-base sm:text-lg py-4 px-8 rounded-full transition-all shadow-xl shadow-emerald-950/60 transform hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span>Discuss Your Case on WhatsApp</span>
            <i className="fas fa-arrow-up-right-from-square text-xs opacity-90"></i>
          </a>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>
              Y2K Exim Services Pvt Ltd • Head Office: Belapur, Navi Mumbai
            </span>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="hover:text-slate-300 transition-colors"
              >
                Phone: {phoneNumber}
              </a>
              <span>•</span>
              <a
                href="https://www.y2kexim.com"
                className="hover:text-slate-300 transition-colors"
              >
                y2kexim.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
