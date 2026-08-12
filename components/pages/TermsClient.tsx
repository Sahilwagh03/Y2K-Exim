"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";

export default function TermsClient() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-20">

      {/* Light Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-16 px-6 md:px-12 border-b border-orange-100/50">
        <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
            <i className="fas fa-file-contract text-xs text-kc-orange"></i>
            <span>Legal Agreement</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
            Terms & <span className="text-kc-orange">Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-kc-orange to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Please read these Terms and Conditions carefully before accessing or using our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full px-4 md:px-8 py-14">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xs space-y-8 text-gray-600 text-sm md:text-base leading-relaxed font-medium">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">1. Introduction</h2>
            <p>
              Welcome to <strong>Y2K EXIM SERVICES</strong>. By accessing our services, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">2. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
              <li>
                <strong>&quot;Services&quot;</strong> refers to the courier booking and shipping solutions provided by Y2K EXIM SERVICES.
              </li>
              <li>
                <strong>&quot;User&quot;</strong> refers to any individual or entity that accesses or uses our services.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">3. Acceptance of Terms</h2>
            <p>
              By using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">4. Service Description</h2>
            <p>
              Y2K EXIM SERVICES provides a platform for users to book courier services at wholesale rates. We strive to offer accurate information, but we do not guarantee the availability of specific services.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">5. User Responsibilities</h2>
            <p>Users agree to:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
              <li>Provide accurate and complete information during registration and booking.</li>
              <li>Use the services only for lawful purposes.</li>
              <li>Ensure that all shipments comply with applicable laws and regulations.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">6. Payment Terms</h2>
            <p>
              Users are responsible for all charges associated with their bookings. Payments must be made in accordance with the pricing information provided on our platform.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">7. Cancellation and Refund Policy</h2>
            <p>
              Users may cancel bookings in accordance with our cancellation policy, which is available on our website. Refunds will be processed as outlined in that policy.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">8. Limitation of Liability</h2>
            <p>
              Y2K EXIM SERVICES is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of <strong>India (State of Maharashtra)</strong>.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 font-semibold text-gray-800">
            <h2 className="text-lg md:text-xl font-bold text-[#1a2d54]">11. Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms and Conditions, please contact us at:
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
