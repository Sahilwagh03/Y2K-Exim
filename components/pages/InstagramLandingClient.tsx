"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface InstagramLandingClientProps {
  whatsappUrl: string;
  phoneNumber: string;
}

export default function InstagramLandingClient({
  whatsappUrl,
  phoneNumber,
}: InstagramLandingClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="h-screen max-h-screen w-full bg-black text-white flex flex-col justify-between items-center px-4 py-3 sm:py-4 antialiased selection:bg-emerald-500 selection:text-white overflow-hidden">
      {/* Top Header & Copy Section */}
      <div className="w-full max-w-[620px] flex flex-col items-center flex-shrink-0">
        {/* Brand Eyebrow */}
        <div className="flex items-center gap-1.5 mb-1">
          <Image
            src="/img/y2k-logo.webp"
            alt="Y2K Exim Logo"
            width={20}
            height={20}
            className="rounded-full object-contain"
          />
          <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
            Y2K EXIM SERVICES
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-lg sm:text-2xl font-extrabold text-center text-white tracking-wide uppercase leading-tight">
          EXPORT IGST REFUND STILL PENDING?
        </h1>

        {/* Subtitles */}
        <p className="text-xs sm:text-sm text-center text-gray-300 font-medium mt-1 leading-snug">
          Shipping Bill Mismatch, EGM, DGARM or Documentation Issues?
        </p>
        <p className="text-xs sm:text-sm text-center text-gray-300 font-medium leading-snug">
          Let Y2K Exim Review Your Case.
        </p>

        {/* Benefit Highlight Row */}
        <div className="w-full flex items-center justify-start gap-2.5 mt-2.5 sm:mt-3 px-1">
          <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0 text-[10px] text-gray-300">
            <i className="fas fa-check"></i>
          </div>
          <div className="text-left">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase block leading-tight">
              NO ADVANCE PAYMENT*
            </span>
            <span className="text-[11px] text-gray-400 font-normal block leading-tight">
              Transparent service terms
            </span>
          </div>
        </div>
      </div>

      {/* Video Container - dynamically fits remaining viewport height */}
      <div className="w-full max-w-[620px] flex-1 flex items-center justify-center my-2 min-h-0">
        <div
          onClick={handlePlayToggle}
          className="relative w-full h-full max-h-[46vh] sm:max-h-[50vh] aspect-[16/9] bg-[#141414] rounded-xl sm:rounded-2xl border border-[#2a2a2a] flex items-center justify-center overflow-hidden cursor-pointer group shadow-lg transition-colors hover:border-[#3d3d3d]"
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? "Pause Video" : "Play Founder Introduction Video"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handlePlayToggle();
            }
          }}
        >
          <video
            ref={videoRef}
            src="/ship-video.mp4"
            playsInline
            onEnded={() => setIsPlaying(false)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? "opacity-100" : "opacity-35"
            }`}
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/80 flex items-center justify-center text-white text-base sm:text-xl group-hover:scale-110 group-hover:border-white transition-all duration-200 bg-black/40 backdrop-blur-xs">
                <i className="fas fa-play ml-0.5"></i>
              </div>
              <span className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-medium text-gray-200 text-center tracking-wide drop-shadow-md">
                Founder Introduction Video • 30 sec
              </span>
            </div>
          )}

          {isPlaying && (
            <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] text-gray-300 flex items-center gap-1.5 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Playing</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Area (Always pinned within 100vh) */}
      <div className="w-full max-w-[620px] flex flex-col items-center flex-shrink-0 pb-1">
        {/* WhatsApp Call to Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] text-white font-bold text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg hover:shadow-emerald-900/40 text-center"
        >
          <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
          <span>Discuss Your Case on WhatsApp</span>
          <i className="fas fa-arrow-up-right-from-square text-xs opacity-90"></i>
        </a>

        {/* Contact Line */}
        <p className="mt-2 text-xs font-semibold text-gray-300 tracking-wide text-center">
          Y2K Exim |{" "}
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="hover:text-white underline underline-offset-2 transition-colors"
          >
            {phoneNumber}
          </a>
        </p>

        {/* Terms Disclaimer */}
        <p className="mt-1 text-[10px] text-gray-400 text-center leading-tight">
          *No-advance-payment claim subject to verified terms. Layout preview only; video is not embedded.
        </p>
      </div>
    </div>
  );
}
