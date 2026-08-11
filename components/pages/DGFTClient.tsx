"use client";

import React, { useState, useEffect, useRef } from "react";
import { dgftServicesData, DGFTService } from "@/constants/dgft-consultants";

interface SubCategoryGroup {
  subCategoryName: string;
  services: DGFTService[];
}

interface CategoryGroup {
  categoryName: string;
  subCategories: SubCategoryGroup[];
}

export default function DGFTClient() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const groupedData: CategoryGroup[] = [];
  dgftServicesData.forEach((service) => {
    let cat = groupedData.find((c) => c.categoryName === service.category);
    if (!cat) {
      cat = { categoryName: service.category, subCategories: [] };
      groupedData.push(cat);
    }
    let subCat = cat.subCategories.find((s) => s.subCategoryName === service.subCategory);
    if (!subCat) {
      subCat = { subCategoryName: service.subCategory, services: [] };
      cat.subCategories.push(subCat);
    }
    subCat.services.push(service);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const exists = dgftServicesData.some((service) => service.id === id);
        
        if (exists) {
          setExpandedCards((prev) => ({
            ...prev,
            [id]: true,
          }));

          setTimeout(() => {
            const element = cardRefs.current[id];
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Certifications":
        return "fas fa-certificate";
      case "Duty Exemption":
        return "fas fa-file-signature";
      case "EPCG & Incentives":
        return "fas fa-cogs";
      case "Licences":
        return "fas fa-id-card";
      default:
        return "fas fa-briefcase";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none pb-20">
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-slate-50/50 py-16 px-6 md:px-12 border-b border-orange-100/50">
        <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/70 text-xs font-semibold text-kc-orange mb-5 shadow-2xs">
            <i className="fas fa-landmark text-xs text-kc-orange"></i>
            <span>EXIM Compliance & Policy Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-gray-900 mb-4">
            DGFT Consultants & <span className="text-kc-orange">EXIM Compliance Directory</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
            Explore Y2K Exim&apos;s unified database for Directorate General of Foreign Trade (DGFT) services. Learn about primary certifications, export incentives, custom duty exemptions, licenses, and compliance requirements on a single clean page.
          </p>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-6">
        <div className="space-y-12">
          {groupedData.map((categoryGroup) => (
            <div key={categoryGroup.categoryName} className="space-y-6">
              <div className="border-b border-slate-200 pb-3.5 mt-8">
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-950 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-kc-orange">
                    <i className={`${getCategoryIcon(categoryGroup.categoryName)} text-base`}></i>
                  </span>
                  {categoryGroup.categoryName}
                </h2>
              </div>

              <div className="space-y-8">
                {categoryGroup.subCategories.map((subGroup) => (
                  <div key={subGroup.subCategoryName} className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-kc-orange/70"></span>
                      {subGroup.subCategoryName}
                    </div>

                    <div className="space-y-4 pl-1">
                      {subGroup.services.map((service) => {
                        const isExpanded = !!expandedCards[service.id];

                        return (
                          <div
                            key={service.id}
                            id={service.id}
                            ref={(el) => {
                              cardRefs.current[service.id] = el;
                            }}
                            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden relative shadow-2xs ${
                              isExpanded 
                                ? "border-orange-200 shadow-xs" 
                                : "border-slate-200/80 hover:border-orange-200/60 hover:shadow-xs"
                            }`}
                          >
                            {isExpanded && (
                              <div className="absolute top-0 left-0 w-1 h-full bg-kc-orange" />
                            )}

                            <div
                              onClick={() => toggleCard(service.id)}
                              className="p-5 md:p-6 cursor-pointer flex justify-between items-start gap-4 hover:bg-slate-50/20 transition-all select-none pl-6"
                            >
                              <div className="space-y-2 flex-1">
                                {service.timeframe && (
                                  <div className="flex flex-wrap gap-2 items-center">
                                    <span className="text-[9px] font-bold text-amber-600 bg-amber-50/60 border border-amber-100/40 px-2 py-0.5 rounded flex items-center gap-1">
                                      <i className="far fa-clock"></i>{service.timeframe}
                                    </span>
                                  </div>
                                )}

                                <h3 className={`text-base md:text-lg font-bold font-display transition-colors duration-150 ${
                                  isExpanded ? "text-kc-orange" : "text-gray-900 hover:text-kc-orange"
                                }`}>
                                  {service.title}
                                </h3>

                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-5xl font-medium">
                                  {service.description}
                                </p>
                              </div>

                              <button
                                className={`w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 shrink-0 transition-all duration-200 ${
                                  isExpanded ? "bg-orange-50 border-orange-100 text-kc-orange rotate-180" : "bg-slate-50 hover:bg-slate-100"
                                }`}
                                aria-label={isExpanded ? "Collapse info" : "Expand info"}
                              >
                                <i className="fas fa-chevron-down text-[10px]"></i>
                              </button>
                            </div>

                            {isExpanded && (
                              <div className="border-t border-slate-100/80 bg-slate-50/10 p-5 md:p-6 pl-6 space-y-6 animate-popup-fade select-text">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  <div className="space-y-3 bg-white p-4.5 rounded-lg border border-slate-150 shadow-3xs">
                                    <h4 className="font-bold text-gray-800 text-xs flex items-center gap-2 border-b border-slate-100 pb-2">
                                      <i className="fas fa-star text-kc-orange text-[10px]"></i>
                                      Scheme Guidelines & Benefits
                                    </h4>
                                    <ul className="space-y-2">
                                      {service.keyPoints.map((point, index) => (
                                        <li key={index} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed items-start font-medium">
                                          <span className="text-kc-orange shrink-0">✓</span>
                                          <span>{point}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="space-y-3 bg-white p-4.5 rounded-lg border border-slate-150 shadow-3xs">
                                    <h4 className="font-bold text-gray-800 text-xs flex items-center gap-2 border-b border-slate-100 pb-2">
                                      <i className="fas fa-file-alt text-kc-orange text-[10px]"></i>
                                      Required Documentation
                                    </h4>
                                    <ul className="space-y-2">
                                      {service.documents.map((doc, index) => (
                                        <li key={index} className="flex gap-2 text-xs text-gray-600 leading-relaxed items-start font-medium">
                                          <span className="text-slate-400 mt-0.5 shrink-0 text-[10px]">•</span>
                                          <span>{doc}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="bg-white p-4.5 rounded-lg border border-slate-150 shadow-3xs space-y-3">
                                  <h4 className="font-bold text-gray-800 text-xs flex items-center gap-2 border-b border-slate-100 pb-2">
                                    <i className="fas fa-route text-kc-orange text-[10px]"></i>
                                    How to File & Process Steps
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.process.map((step, index) => (
                                      <div key={index} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed items-start font-medium">
                                        <span className="w-4.5 h-4.5 rounded bg-orange-50 border border-orange-100/50 text-kc-orange font-bold flex items-center justify-center shrink-0 text-[10px]">
                                          {index + 1}
                                        </span>
                                        <span>{step}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-xs pt-3 text-gray-500 border-t border-slate-100 justify-between items-center font-medium">
                                  <div className="flex flex-wrap gap-5">
                                    {service.timeframe && (
                                      <div>
                                        <span className="font-bold text-gray-700">Estimated Duration: </span>
                                        {service.timeframe}
                                      </div>
                                    )}
                                    {service.validity && (
                                      <div>
                                        <span className="font-bold text-gray-700">Validity Period: </span>
                                        {service.validity}
                                      </div>
                                    )}
                                  </div>
                                  <a
                                    href="https://dgft.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-kc-orange font-bold hover:underline flex items-center gap-1 hover:text-orange-600"
                                  >
                                    Visit Official Portal <i className="fas fa-external-link-alt text-[9px]"></i>
                                  </a>
                                </div>

                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
