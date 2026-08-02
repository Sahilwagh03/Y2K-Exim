import React from "react";

export default function Header() {
  return (
    <header className="hidden md:block bg-white border-b border-gray-200 shadow-sm relative z-[999]">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex items-center justify-between py-2 gap-4">
          {/* Profile (left slot, replaces the logo in this top header bar) */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="/files/y2k-exim-group.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-xs rounded-full shadow-md hover:scale-105 transition-all duration-200"
            >
              <i className="fas fa-download"></i>
              <span>Profile</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-5 flex-1 text-gray-700">
            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Emails */}
            <div className="flex flex-col text-xs leading-normal">
              <a
                href="mailto:info@y2kexim.com"
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-envelope text-[10px] text-kc-navy-700 w-4 text-center"></i>
                info@y2kexim.com
              </a>
              <a
                href="mailto:info2@y2kexim.com"
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-envelope text-[10px] text-kc-navy-700 w-4 text-center"></i>
                info2@y2kexim.com
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Phones */}
            <div className="flex flex-col text-xs leading-normal font-semibold">
              <a
                href="tel:9870009170"
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-phone-alt text-[10px] text-kc-navy-700 w-4 text-center"></i>
                +91 98700 09170
              </a>
              <a
                href="tel:9588630064"
                className="flex items-center gap-1.5 hover:text-kc-navy-700 transition duration-200"
              >
                <i className="fas fa-phone-alt text-[10px] text-kc-navy-700 w-4 text-center"></i>
                +91 95886 30064
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-8 bg-gray-300"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/y2kexim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1877F2] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://x.com/y2kexim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/y2keximofficial?igsh=MW53eHV4dGp5d2RkZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/y2k-exim-0b9b25423?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0077B5] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.youtube.com/@y2kexim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FF0000] text-white text-[11px] shadow-sm hover:-translate-y-0.5 transition duration-200"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
