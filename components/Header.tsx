import React from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";

export default function Header() {
  return (
    <header className="hidden md:block bg-white border-b border-gray-200 shadow-sm relative z-[999]">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex items-center justify-between py-2 gap-4">
          {/* Profile (left slot, replaces the logo in this top header bar) */}
          <div className="flex items-center flex-shrink-0 gap-3">
            <Link
              href="/about-us"
              aria-label="View Y2K Exim Corporate Profile"
              className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-xs rounded-full shadow-md hover:scale-105 transition-all duration-200"
            >
              <i className="fas fa-building"></i>
              <span>Corporate Profile</span>
            </Link>

            {/* Our Portals */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-medium text-gray-600 pl-2 border-l border-gray-200">
              <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider">Our Portals:</span>
              <Link
                href={COMPANY_CONTACT.websites.customDutyRefund}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-50 border border-orange-200/80 rounded-md text-kc-orange font-bold text-[11px] hover:bg-orange-100 transition"
              >
                <i className="fas fa-globe text-[10px] text-kc-orange"></i>
                <span>customdutyrefund.com</span>
              </Link>
              <Link
                href={COMPANY_CONTACT.websites.gstRefundIndia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-50 border border-orange-200/80 rounded-md text-kc-orange font-bold text-[11px] hover:bg-orange-100 transition"
              >
                <i className="fas fa-globe text-[10px] text-kc-orange"></i>
                <span>gstrefundindia.com</span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-5 flex-1 text-gray-700">
            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Emails */}
            <div className="flex flex-col text-xs leading-normal">
              <Link
                href={COMPANY_CONTACT.mailto}
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-envelope text-[10px] text-kc-navy-700 w-4 text-center"></i>
                {COMPANY_CONTACT.email}
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Phone */}
            <div className="flex flex-col text-xs leading-normal font-semibold">
              <Link
                href={COMPANY_CONTACT.tel}
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-phone-alt text-[10px] text-kc-navy-700 w-4 text-center"></i>
                {COMPANY_CONTACT.phone}
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <Link
                href={COMPANY_CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1877F2] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>

              <Link
                href={COMPANY_CONTACT.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </Link>

              <Link
                href={COMPANY_CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>

              <Link
                href={COMPANY_CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0077B5] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>

              <Link
                href={COMPANY_CONTACT.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FF0000] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
