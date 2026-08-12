"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";

export default function Footer() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    // Scroll to top visibility logic
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative w-full bg-[#ea580c]">
      {/* Spacer and fly-away panel container */}
      <div className="relative z-10 bg-gradient-to-tr from-[#ea580c] via-[#f97316] to-[#ea580c] text-white overflow-hidden border-t border-orange-600">
        {/* Decorative blur graphics */}
        <div className="absolute w-[380px] h-[380px] rounded-full bg-white/10 blur-[100px] top-[-120px] left-[-100px] pointer-events-none z-0"></div>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-white/10 blur-[100px] bottom-[-150px] right-[-120px] pointer-events-none z-0"></div>

        {/* Footer content */}
        <footer id="contact" className="relative z-10 max-w-[1400px] mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                About Us
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white rounded-full mb-5"></div>
              <p className="text-sm leading-relaxed text-orange-50 max-w-xs">
                Y2k Exim simplifies DGFT, Subsidy, and Customs for global trade. Trusted for over 28 years in compliance and export-import solutions.
              </p>
              {/* Social row */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: "fab fa-facebook-f", link: "https://www.facebook.com/y2kexim" },
                  { icon: "fab fa-twitter", link: "https://x.com/y2kexim" },
                  { icon: "fab fa-instagram", link: "https://www.instagram.com/y2keximofficial?igsh=MW53eHV4dGp5d2RkZA%3D%3D&utm_source=qr" },
                  { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/y2k-exim-0b9b25423?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
                  { icon: "fab fa-youtube", link: "https://www.youtube.com/@y2kexim" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9.5 h-9.5 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-sm transition-all duration-255 hover:bg-white hover:text-kc-orange hover:border-white hover:-translate-y-0.5"
                    aria-label={`Footer Social ${i}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                Quick Links
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white rounded-full mb-5"></div>
              <ul className="list-none p-0 m-0 space-y-2.5 text-sm text-orange-100">
                {[
                  { text: "Home", link: "/" },
                  { text: "About Us", link: "/about-us" },
                  { text: "Services", link: "/dgft-consultants" },
                  { text: "Port Codes Directory", link: "/customs-port-codes" },
                  { text: "Contact Us", link: "/contact-us" },
                  { text: "Privacy Policy", link: "/policy" },
                  { text: "Terms & Conditions", link: "/terms-and-conditions" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-white hover:pl-1 transition-all duration-200 block font-medium"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Associated Websites */}
              <div className="mt-4 pt-3 border-t border-white/20 w-full text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white block mb-2">
                  Our Associated Portals
                </span>
                <div className="flex flex-col space-y-1.5 text-xs text-orange-100 font-medium">
                  <Link
                    href={COMPANY_CONTACT.websites.customDutyRefund}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline flex items-center gap-1.5"
                  >
                    <i className="fas fa-globe text-[10px] text-orange-200"></i>
                    <span>www.customdutyrefund.com</span>
                  </Link>
                  <Link
                    href={COMPANY_CONTACT.websites.gstRefundIndia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline flex items-center gap-1.5"
                  >
                    <i className="fas fa-globe text-[10px] text-orange-200"></i>
                    <span>www.gstrefundindia.com</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                Contact Us
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white rounded-full mb-5"></div>
              <div className="space-y-3.5 text-sm text-orange-100 text-left">
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-white mt-1 w-4 text-center flex-shrink-0"></i>
                  <p className="leading-relaxed">
                    {COMPANY_CONTACT.headOfficeAddress}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-white w-4 text-center flex-shrink-0"></i>
                  <Link href={COMPANY_CONTACT.tel} className="font-medium hover:text-white hover:underline">
                    {COMPANY_CONTACT.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-white w-4 text-center flex-shrink-0"></i>
                  <Link href={COMPANY_CONTACT.mailto} className="break-all font-medium hover:text-white hover:underline">
                    {COMPANY_CONTACT.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3 pt-1 border-t border-orange-400">
                  <i className="fas fa-clock text-white w-4 text-center flex-shrink-0"></i>
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    {COMPANY_CONTACT.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Location Map */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                Find Us
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white rounded-full mb-5"></div>
              <div className="w-full h-[200px] rounded-xl overflow-hidden border border-white/20 shadow-sm relative bg-orange-700/30">
                <iframe
                  src="https://maps.google.com/maps?q=150-A%20Wing,%20Balaji%20Bhavan,%20Near%20Railway%20Station,%20Belapur,%20Navi%20Mumbai%20%E2%80%93%20400614&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Y2k Exim Head Office Location - Balaji Bhavan, Belapur"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-orange-100">
            <p>&copy; 2026 Y2k Exim Indenting and Services Pvt Ltd. All Rights Reserved.</p>
          </div>
        </footer>
      </div>


      {/* FLOATING WIDGETS */}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-12 right-6 w-14 h-14 rounded-full bg-white text-kc-orange shadow-lg flex items-center justify-center cursor-pointer hover:bg-orange-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 z-[999] ${scrollTopVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        aria-label="Scroll to top of the page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* WhatsApp Floating Chat */}
      <Link
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 left-6 z-[999] hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 block"
        aria-label="Chat with Y2k Exim on WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
          <img
            src="/img/whatsapp.svg"
            alt="WhatsApp Icon"
            className="w-7 h-7"
          />
        </div>
      </Link>

      {/* Sticky Enquiry Sidebar Button */}
      <Link
        href="/contact-us"
        target="_blank"
        rel="noopener noreferrer"
        className="enquire-sidebar font-semibold text-xs tracking-wider"
      >
        ENQUIRE NOW
      </Link>
    </div>
  );
}
