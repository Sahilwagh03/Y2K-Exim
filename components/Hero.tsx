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
        video.play().catch(error => {
          console.log("Playback prevented, binding to interaction listeners:", error);
          
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

      const timer = setTimeout(attemptPlay, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/ship-video.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[80px] flex items-center justify-center font-display tracking-tight">
            <span
              style={{ opacity }}
              className="inline-block text-white drop-shadow-lg transition-opacity duration-500"
            >
              {texts[currentIndex]}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for DGFT, Industrial Subsidies, Customs, and
            Taxation Solutions Across INDIA.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href="/dgft-consultants"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Our Services
            </a>

            <a
              href="/contact-us"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}