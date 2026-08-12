import React from "react";

interface PortCodesFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedZone: string;
  setSelectedZone: (zone: string) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  uniqueStates: string[];
  uniqueTypes: string[];
  uniqueZones: string[];
  totalRecords: number;
  filteredCount: number;
  copiedCode: string | null;
  onResetFilters: () => void;
}

export default function PortCodesFilters({
  searchQuery,
  setSearchQuery,
  selectedState,
  setSelectedState,
  selectedType,
  setSelectedType,
  selectedZone,
  setSelectedZone,
  pageSize,
  setPageSize,
  uniqueStates,
  uniqueTypes,
  uniqueZones,
  totalRecords,
  filteredCount,
  copiedCode,
  onResetFilters,
}: PortCodesFiltersProps) {
  const isFiltered =
    searchQuery !== "" ||
    selectedState !== "All" ||
    selectedType !== "All" ||
    selectedZone !== "All";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Realtime Search Input */}
        <div className="relative flex-1">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          <input
            type="text"
            placeholder="Search by Port Code (e.g. INNSA1, INBOM4), Station Name, State, or Zone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-kc-orange focus:bg-white transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
              aria-label="Clear search"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Type Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer"
            >
              <option value="All">All Types ({totalRecords})</option>
              {uniqueTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* State Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">State:</span>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer max-w-[160px] truncate"
            >
              <option value="All">All States ({uniqueStates.length})</option>
              {uniqueStates.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* Zone Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Zone:</span>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer max-w-[160px] truncate"
            >
              <option value="All">All Zones ({uniqueZones.length})</option>
              {uniqueZones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Show:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer"
            >
              <option value={25}>25 rows</option>
              <option value={50}>50 rows</option>
              <option value={100}>100 rows</option>
              <option value={-1}>All ({filteredCount})</option>
            </select>
          </div>

          {/* Reset Button */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="px-3 py-2 bg-orange-50 text-kc-orange hover:bg-orange-100 border border-orange-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <i className="fas fa-undo text-[10px]"></i> Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Summary Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-slate-100 font-medium">
        <div>
          Showing <span className="font-bold text-gray-800">{filteredCount}</span> of{" "}
          <span className="font-bold text-gray-800">{totalRecords}</span> Customs Stations
        </div>
        {copiedCode && (
          <div className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold flex items-center gap-1.5 animate-popup-fade">
            <i className="fas fa-check-circle"></i>
            <span>Copied Code "{copiedCode}" to clipboard!</span>
          </div>
        )}
      </div>
    </div>
  );
}
