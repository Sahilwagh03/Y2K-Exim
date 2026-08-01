"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    // 1. Scroll reveal panel logic
    const panel = document.getElementById("kcRevealPanel");
    const spacer = document.getElementById("kcRevealSpacer");

    const updateReveal = () => {
      if (!panel || !spacer) return;
      const spacerRect = spacer.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const panelH = panel.offsetHeight;

      const raw = viewportH - spacerRect.top;
      let progress = raw / panelH;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (progress > 0) {
        panel.style.visibility = "visible";
        panel.style.opacity = String(progress);
        panel.style.pointerEvents = progress > 0.5 ? "auto" : "none";
      } else {
        panel.style.visibility = "hidden";
        panel.style.opacity = "0";
        panel.style.pointerEvents = "none";
      }
    };

    // 2. Scroll to top visibility logic
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
      updateReveal();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateReveal);

    // Run initial positioning
    updateReveal();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative w-full bg-[#ea580c] select-none">
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
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_100%] animate-kc-shimmer rounded-full mb-5"></div>
              <p className="text-sm leading-relaxed text-orange-50 max-w-xs">
                Y2k Exim simplifies DGFT, Subsidy, and Customs for global trade. Trusted for over 28 years in compliance and export-import solutions.
              </p>
              {/* Social row */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: "fab fa-facebook-f", link: "https://www.facebook.com/y2kexim" },
                  { icon: "fab fa-twitter", link: "https://x.com/y2kexim" },
                  { icon: "fab fa-instagram", link: "https://www.instagram.com/y2kexim/" },
                  { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/company/y2kexim" },
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
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_100%] animate-kc-shimmer rounded-full mb-5"></div>
              <ul className="list-none p-0 m-0 space-y-2.5 text-sm text-orange-100">
                {[
                  { text: "Home", link: "/" },
                  { text: "About Us", link: "/about-us" },
                  { text: "Services", link: "/dgft-consultants" },
                  { text: "Contact Us", link: "/contact-us" },
                  { text: "Career", link: "/career" },
                  { text: "Privacy Policy", link: "/policy" }
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="hover:text-white hover:pl-1 transition-all duration-200 block font-medium"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                Contact Us
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_100%] animate-kc-shimmer rounded-full mb-5"></div>
              <div className="space-y-3.5 text-sm text-orange-100 text-left">
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-white mt-1 w-4 text-center flex-shrink-0"></i>
                  <p className="leading-relaxed">
                    Flat No E-110, 1st Floor, SVSS Nivas, Opp Gokul Theatre, Street No 1, Czech Colony, Sanathnagar, <b className="text-white font-bold">Hyderabad - 500 018 (TG)</b>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-white w-4 text-center flex-shrink-0"></i>
                  <p className="font-medium">+91 91004 44999</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-white w-4 text-center flex-shrink-0"></i>
                  <p className="font-medium">+91 90834 44999</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-white w-4 text-center flex-shrink-0"></i>
                  <p className="break-all font-medium">info@y2kexim.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-white w-4 text-center flex-shrink-0"></i>
                  <p className="break-all font-medium">info2@y2kexim.com</p>
                </div>
                <div className="flex items-center gap-3 pt-1 border-t border-orange-400">
                  <i className="fas fa-clock text-white w-4 text-center flex-shrink-0"></i>
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    Mon - Sat: 9:30 AM - 6:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Location Map */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                Find Us
              </h3>
              <div className="h-[3px] w-10 bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_100%] animate-kc-shimmer rounded-full mb-5"></div>
              <div className="w-full h-[200px] rounded-xl overflow-hidden border border-white/20 shadow-sm relative bg-orange-700/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.686399436083!2d78.4356145!3d17.4544011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e6a7f99bf9%3A0x7903212b09d1a346!2sKireeti%20Consultants!5e1!3m2!1sen!2sin!4v1748514415531!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Y2k Exim Head Office Location"
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

      {/* Fly-away Reveal Spacer */}
      <div id="kcRevealSpacer" className="h-[260px] md:h-[340px] bg-[#ea580c] opacity-0 relative z-0 pointer-events-none" aria-hidden="true"></div>

      {/* Fly-away Fixed Reveal Panel */}
      <div
        id="kcRevealPanel"
        className="fixed left-0 right-0 bottom-0 h-[260px] md:h-[340px] z-0 flex flex-col items-center justify-center bg-gradient-to-tr from-[#ea580c] to-[#f97316] overflow-hidden pointer-events-none select-none opacity-0 invisible"
        aria-hidden="true"
      >
        <div className="flex items-center gap-4 select-none drop-shadow-[0_0_40px_rgba(255,255,255,0.22)]">
          <svg
            className="h-28 w-28 text-white fill-none stroke-current stroke-2 animate-pulse"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-5xl text-white leading-none tracking-wide">
              Y2k Exim
            </span>
            <span className="text-[14px] text-amber-200 font-bold tracking-[0.25em] uppercase mt-2">
              Group
            </span>
          </div>
        </div>
        <p className="absolute bottom-6 text-[10px] md:text-xs tracking-[0.08em] text-white/90 uppercase font-semibold">
          DGFT &middot; CUSTOMS &middot; TAXATION &middot; INDUSTRIAL SUBSIDIES
        </p>
      </div>

      {/* FLOATING WIDGETS */}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-12 right-6 w-14 h-14 rounded-full bg-white text-kc-orange shadow-lg flex items-center justify-center cursor-pointer hover:bg-orange-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 z-[999] ${
          scrollTopVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-label="Scroll to top of the page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* WhatsApp Floating Chat */}
      <a
        href="https://wa.me/919100444999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 left-6 z-[999] hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 block"
        aria-label="Chat with Y2k Exim on WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
            alt="WhatsApp Icon"
            className="w-7 h-7 invert"
          />
        </div>
      </a>

      {/* Sticky Enquiry Sidebar Button */}
      <a
        href="/contact-us"
        target="_blank"
        rel="noopener noreferrer"
        className="enquire-sidebar font-semibold text-xs tracking-wider"
      >
        ENQUIRE NOW
      </a>
    </div>
  );
}
