import React from "react";

interface PortCodesMetricsProps {
  stats: {
    total: number;
    ports: number;
    acc: number;
    icd: number;
    cfs: number;
    lcs: number;
  };
}

export default function PortCodesMetrics({ stats }: PortCodesMetricsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-kc-orange flex items-center justify-center shrink-0">
          <i className="fas fa-map-location-dot text-lg"></i>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Stations</p>
          <h3 className="text-2xl font-extrabold text-gray-900 font-display">{stats.total}</h3>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <i className="fas fa-ship text-lg"></i>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Sea Ports</p>
          <h3 className="text-2xl font-extrabold text-gray-900 font-display">{stats.ports}</h3>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
          <i className="fas fa-plane-departure text-lg"></i>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Air Cargo (ACC)</p>
          <h3 className="text-2xl font-extrabold text-gray-900 font-display">{stats.acc}</h3>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
          <i className="fas fa-boxes-packing text-lg"></i>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">ICD & CFS</p>
          <h3 className="text-2xl font-extrabold text-gray-900 font-display">{stats.icd + stats.cfs}</h3>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4 col-span-2 sm:col-span-1">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <i className="fas fa-truck-ramp-box text-lg"></i>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Land Customs</p>
          <h3 className="text-2xl font-extrabold text-gray-900 font-display">{stats.lcs}</h3>
        </div>
      </div>
    </div>
  );
}
