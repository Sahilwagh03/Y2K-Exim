"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";

export default function PolicyClient() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-20">

      {/* Light Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-16 px-6 md:px-12 border-b border-orange-100/50">
        <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
            <i className="fas fa-shield-alt text-xs text-kc-orange"></i>
            <span>Security & Trust</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-kc-orange to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Your privacy and confidentiality are of utmost importance. Please read how we safeguard and manage your business information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full px-4 md:px-8 py-14">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xs space-y-8 text-gray-600 text-sm md:text-base leading-relaxed font-medium">

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">1. Introduction</h2>
            <p>
              Welcome to Y2K Exim Services. We are committed to protecting the privacy, confidentiality, and security of our clients' business documents and personal data. This Privacy Policy outlines how we collect, process, secure, and share information provided to us for customs clearance, DGFT licensing, and advisory services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">2. Information We Collect</h2>
            <p>
              To process import-export authorizations, registrations, and custom clearance transactions, we collect specific commercial, business, and contact details, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
              <li>Company name, corporate registration certificates, PAN details, and Importer-Exporter Code (IEC).</li>
              <li>Official contact information: names, emails, telephone numbers, and addresses.</li>
              <li>Import-export transactions documents: commercial invoices, packing lists, Bills of Lading, Airway Bills, and licensing certificates.</li>
              <li>Bank details and authorization codes (AD Codes, IFSC codes) required for ICEGATE filings and duty refund claims.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">3. How We Use Your Information</h2>
            <p>
              The information we collect is strictly used to fulfill our advisory and service commitments, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
              <li>Preparing and filing applications on the official DGFT portal for Advance Authorisation, EPCG, and export house registrations.</li>
              <li>Filing documents with customs authorities via ICEGATE to execute clearance, brand rate fixations, and duty refund operations.</li>
              <li>Coordinating transportation logistics by Sea, Air, and Land.</li>
              <li>Communicating compliance changes, regulatory updates, and status reports.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">4. Data Confidentiality & Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to prevent unauthorized access, alteration, disclosure, or destruction of your confidential trade documentation. Access to files is strictly limited to authorized personnel handling your specific filings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">5. Information Sharing & Third-Party Disclosure</h2>
            <p>
              We do not sell, rent, or lease your business or contact details to marketing agencies. Your information is shared only with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
              <li>Official government portals and departments (e.g. DGFT, Central Board of Indirect Taxes and Customs - CBIC, FSSAI) for compliance filings.</li>
              <li>Trusted logistical partners (such as port operators, shipping lines, and road carriers) required to transport your physical cargo.</li>
              <li>Judicial or regulatory authorities when compelled by law to comply with tax audits or court subpoenas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">6. Retention of Information</h2>
            <p>
              We retain business documents and transaction files for as long as required by customs regulations, indirect tax laws, and commercial record-retention statutes in India (typically up to five years post-clearance).
            </p>
          </section>

          <section className="space-y-3 font-semibold text-gray-800">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">7. Contact Our Compliance Team</h2>
            <p>
              If you have any questions, clarifications, or concerns regarding your business documentation and privacy, please contact our administrative desk:
            </p>
            <p className="mt-2 text-xs md:text-sm">
              Email:{" "}
              <Link href={COMPANY_CONTACT.mailto} className="text-kc-orange hover:underline">
                {COMPANY_CONTACT.email}
              </Link>
              <br />
              Phone:{" "}
              <Link href={COMPANY_CONTACT.tel} className="text-kc-orange hover:underline">
                {COMPANY_CONTACT.phone}
              </Link>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
