"use client";

import React, { useEffect, useState, useRef } from "react";

const texts = [
  "DGFT Services",
  "Industrial Subsidies",
  "Taxation Services",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);

      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setOpacity(1);
      }, 500);

      return () => clearTimeout(timeout);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      
      const attemptPlay = () => {
        video.play().catch(() => {
          const forcePlay = () => {
            video.play().catch(() => {});
            document.removeEventListener("click", forcePlay);
            document.removeEventListener("touchstart", forcePlay);
            document.removeEventListener("scroll", forcePlay);
          };
          
          document.addEventListener("click", forcePlay, { passive: true });
          document.addEventListener("touchstart", forcePlay, { passive: true });
          document.addEventListener("scroll", forcePlay, { passive: true });
        });
      };

      const timer = setTimeout(attemptPlay, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:h-screen overflow-hidden flex items-center justify-center text-white bg-gradient-to-br from-slate-950 via-kc-navy-950 to-slate-900"
    >
      {/* Background Video - Loaded only on Desktop (md screens and up) with preload="none" */}
      <video
        ref={videoRef}
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        src="/ship-video.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-radial-dots opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-16 md:py-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 min-h-[70px] sm:min-h-[80px] flex items-center justify-center font-display tracking-tight">
            <span
              style={{ opacity }}
              className="inline-block text-white drop-shadow-lg transition-opacity duration-500"
            >
              {texts[currentIndex]}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Your trusted partner for DGFT, Industrial Subsidies, Customs, and
            Taxation Solutions Across INDIA.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href="/dgft-consultants"
              aria-label="Explore DGFT Services"
              className="bg-kc-orange hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md text-sm sm:text-base"
            >
              Our Services
            </a>

            <a
              href="/contact-us"
              aria-label="Contact Y2K Exim Team"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-kc-navy-900 font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}