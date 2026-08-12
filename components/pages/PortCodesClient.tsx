"use client";

import React, { useState, useMemo, useEffect } from "react";
import { portCodesData } from "@/constants/port-codes";

import PortCodesHeader from "@/components/port-codes/PortCodesHeader";
import PortCodesMetrics from "@/components/port-codes/PortCodesMetrics";
import PortCodesFilters from "@/components/port-codes/PortCodesFilters";
import PortCodesTable from "@/components/port-codes/PortCodesTable";
import PortCodesPagination from "@/components/port-codes/PortCodesPagination";
import PortCodesInfoGuide from "@/components/port-codes/PortCodesInfoGuide";

export interface PortCodesClientProps {
  showHeader?: boolean;
  showInfoGuide?: boolean;
  hideInfoGuide?: boolean;
  isEmbedded?: boolean;
}

export default function PortCodesClient({
  showHeader = true,
  showInfoGuide = true,
  hideInfoGuide = false,
  isEmbedded = false,
}: PortCodesClientProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedZone, setSelectedZone] = useState<string>("All");
  const [pageSize, setPageSize] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Extract unique states, types, and zones for filter options
  const uniqueStates = useMemo(() => {
    return Array.from(new Set(portCodesData.map((item) => item.state))).sort();
  }, []);

  const uniqueTypes = useMemo(() => {
    return Array.from(new Set(portCodesData.map((item) => item.type))).sort();
  }, []);

  const uniqueZones = useMemo(() => {
    return Array.from(new Set(portCodesData.map((item) => item.zone))).sort();
  }, []);

  // Compute metrics statistics
  const stats = useMemo(() => {
    const total = portCodesData.length;
    const ports = portCodesData.filter((i) => i.type === "Port").length;
    const acc = portCodesData.filter((i) => i.type === "ACC").length;
    const icd = portCodesData.filter((i) => i.type === "ICD").length;
    const cfs = portCodesData.filter((i) => i.type === "CFS").length;
    const lcs = portCodesData.filter((i) => i.type === "LCS" || i.type === "Rail").length;
    return { total, ports, acc, icd, cfs, lcs };
  }, []);

  // Filter dataset based on active filters & search query
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return portCodesData.filter((item) => {
      const matchesSearch =
        query === "" ||
        item.portCode.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query) ||
        item.zone.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query);

      const matchesState = selectedState === "All" || item.state === selectedState;
      const matchesType = selectedType === "All" || item.type === selectedType;
      const matchesZone = selectedZone === "All" || item.zone === selectedZone;

      return matchesSearch && matchesState && matchesType && matchesZone;
    });
  }, [searchQuery, selectedState, selectedType, selectedZone]);

  // Reset pagination on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedType, selectedZone, pageSize]);

  // Paginated dataset
  const totalPages = pageSize === -1 ? 1 : Math.ceil(filteredData.length / pageSize);

  const displayedData = useMemo(() => {
    if (pageSize === -1) return filteredData;
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  // Copy Port Code to Clipboard handler
  const handleCopyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2000);
    }
  };

  // Reset all filters handler
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedState("All");
    setSelectedType("All");
    setSelectedZone("All");
  };

  const shouldDisplayInfoGuide = showInfoGuide && !hideInfoGuide;

  const content = (
    <div className="space-y-8">
      {(!showHeader || isEmbedded) && (
        <div id="customs-port-codes" className="border-b border-slate-200 pb-3.5 mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-950 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-kc-orange">
              <i className="fas fa-compass text-base"></i>
            </span>
            Indian Customs Port Codes Directory (412 Locations)
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium">
            Searchable ICEGATE EDI directory of 412 official Indian Customs Ports, Airports (ACC), Inland Container Depots (ICD), and Container Freight Stations (CFS).
          </p>
        </div>
      )}

      <PortCodesMetrics stats={stats} />

      <PortCodesFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        pageSize={pageSize}
        setPageSize={setPageSize}
        uniqueStates={uniqueStates}
        uniqueTypes={uniqueTypes}
        uniqueZones={uniqueZones}
        totalRecords={portCodesData.length}
        filteredCount={filteredData.length}
        copiedCode={copiedCode}
        onResetFilters={handleResetFilters}
      />

      <div className="space-y-0">
        <PortCodesTable
          displayedData={displayedData}
          onCopyCode={handleCopyCode}
          onResetFilters={handleResetFilters}
        />

        <PortCodesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>

      {shouldDisplayInfoGuide && <PortCodesInfoGuide />}
    </div>
  );

  if (!showHeader || isEmbedded) {
    return content;
  }

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-20">
      <PortCodesHeader />
      <main className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-8">
        {content}
      </main>
    </div>
  );
}
