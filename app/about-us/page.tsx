"use client";

import React, { useState } from "react";
import {
  heroContent,
  storyContent,
  missionVisionContent,
  leadershipContent,
  journeyTimeline,
  workflowContent,
  qualityServices,
  achievementsContent
} from "../../constants/about-us";

export default function AboutUsPage() {
  // Bio expand state map
  const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});

  const toggleBio = (idx: number) => {
    setExpandedBios((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none pb-20">
      
      {/* Light Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-20 px-6 md:px-12 border-b border-orange-100/50">
        <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
            <i className="fas fa-info-circle text-xs text-kc-orange"></i>
            <span>{heroContent.eyebrow}</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
            {heroContent.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-kc-orange to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            {heroContent.description}
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-14 space-y-24">
        
        {/* Our Story Section */}
        <section id="story" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img 
                src={storyContent.imageSrc} 
                alt={storyContent.imageAlt} 
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Founded Badge */}
            <div className="absolute -left-6 -bottom-6 bg-[#1a2d54] border border-orange-300/35 text-white p-5 rounded-2xl shadow-xl text-center">
              <div className="text-2xl font-extrabold text-kc-orange">{storyContent.foundedYear}</div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 mt-1">{storyContent.foundedLabel}</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pl-6 border-l-4 border-kc-orange">
            <span className="text-xs font-bold text-kc-orange tracking-widest uppercase">{storyContent.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{storyContent.title}</h2>
            <div className="space-y-4">
              {storyContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-gray-600 text-sm leading-relaxed font-medium">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xs">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{missionVisionContent.title}</h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">{missionVisionContent.subtitle}</p>
            <div className="w-16 h-1 bg-kc-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mission Box */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-200/80 p-8 relative overflow-hidden group hover:border-orange-200/70 hover:shadow-xs transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-kc-orange group-hover:scale-105 transition">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{missionVisionContent.missionTitle}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                {missionVisionContent.missionText}
              </p>
              <ul className="space-y-3">
                {missionVisionContent.missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-orange-100/70 flex-shrink-0 flex items-center justify-center text-kc-orange">
                      <i className="fas fa-check text-[10px]"></i>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Box */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-200/80 p-8 relative overflow-hidden group hover:border-orange-200/70 hover:shadow-xs transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-kc-orange group-hover:scale-105 transition">
                <i className="fas fa-eye text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{missionVisionContent.visionTitle}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                {missionVisionContent.visionText}
              </p>
              <ul className="space-y-3">
                {missionVisionContent.visionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-orange-100/70 flex-shrink-0 flex items-center justify-center text-kc-orange">
                      <i className="fas fa-check text-[10px]"></i>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-kc-orange tracking-widest uppercase">{leadershipContent.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">{leadershipContent.title}</h2>
            <p className="text-gray-500 text-sm mt-3 font-medium">{leadershipContent.subtitle}</p>
            <div className="w-16 h-1 bg-kc-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {leadershipContent.members.map((member, idx) => {
              const isExpanded = !!expandedBios[idx];
              const isMd = idx === 0; // Managing Director is featured larger

              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xs transition duration-300 ${
                    isMd ? "grid grid-cols-1 lg:grid-cols-12" : "grid grid-cols-1 lg:grid-cols-12 border-t-4 border-t-kc-orange"
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`${isMd ? "lg:col-span-4" : "lg:col-span-3"} relative overflow-hidden bg-slate-900 h-96 lg:h-full min-h-[380px]`}>
                    <img 
                      src={member.imageSrc} 
                      alt={member.imageAlt} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 text-white z-10">
                      <div className="text-xs text-orange-400 font-bold tracking-widest uppercase mb-1">{member.role}</div>
                      <h4 className="text-lg font-bold">{member.name}</h4>
                    </div>
                  </div>

                  {/* Body Column */}
                  <div className={`${isMd ? "lg:col-span-8" : "lg:col-span-9"} p-8 md:p-10 flex flex-col justify-between`}>
                    <div>
                      <div className="text-xs text-kc-orange font-bold uppercase tracking-wide mb-2">{member.role}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      
                      {/* Qualifications */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.quals.map((qual, qidx) => (
                          <span key={qidx} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                            {qual}
                          </span>
                        ))}
                      </div>

                      {/* Stat Strip */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-slate-200/80 py-4 mb-6">
                        {member.stats.map((stat, sidx) => (
                          <div key={sidx} className="text-center sm:text-left">
                            <span className="block text-lg font-extrabold text-[#1a2d54]">{stat.value}</span>
                            <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bios content */}
                      <div className="text-gray-600 text-sm leading-relaxed space-y-3 font-medium">
                        <p>{member.bio[0]}</p>
                        
                        {/* Expanded details */}
                        {member.bio.length > 1 && (
                          <div className={`space-y-3 transition-all duration-500 overflow-hidden ${
                            isExpanded ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                          }`}>
                            {member.bio.slice(1).map((para, pidx) => (
                              <p key={pidx}>{para}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Toggle Button */}
                    {member.bio.length > 1 && (
                      <div className="mt-6">
                        <button 
                          onClick={() => toggleBio(idx)} 
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-kc-orange hover:text-orange-600 transition"
                        >
                          <span>{isExpanded ? "Show Less" : "Read Full Profile"}</span>
                          <i className={`fas fa-chevron-down text-[10px] transition-transform ${isExpanded ? "rotate-180" : ""}`}></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Quality Services */}
        <section id="services" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our Quality Services</h2>
            <p className="text-gray-500 text-sm mt-3 font-medium">Comprehensive solutions tailored to your needs</p>
            <div className="w-16 h-1 bg-kc-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-orange-200 hover:shadow-xs transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-kc-orange flex-shrink-0">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-kc-orange text-[8px]">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
