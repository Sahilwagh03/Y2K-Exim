import React from "react";
import { CustomsPortCode } from "@/constants/port-codes";
import PortCodesTableRow from "./PortCodesTableRow";

interface PortCodesTableProps {
  displayedData: CustomsPortCode[];
  onCopyCode: (code: string) => void;
  onResetFilters: () => void;
}

export default function PortCodesTable({
  displayedData,
  onCopyCode,
  onResetFilters,
}: PortCodesTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto max-h-[680px] review-text-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-100 sticky top-0 z-20 border-b border-slate-200 text-xs font-extrabold uppercase tracking-wider text-gray-700 select-none">
            <tr>
              <th className="py-3.5 px-4 w-16 text-center">S.No.</th>
              <th className="py-3.5 px-4 w-32">Port Code</th>
              <th className="py-3.5 px-4">Station Name</th>
              <th className="py-3.5 px-4 w-28">Type</th>
              <th className="py-3.5 px-4 w-40">State</th>
              <th className="py-3.5 px-4 w-36">Zone</th>
              <th className="py-3.5 px-4 w-32 text-center">EDI Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-gray-700 font-medium">
            {displayedData.length > 0 ? (
              displayedData.map((item) => (
                <PortCodesTableRow key={item.sno} item={item} onCopyCode={onCopyCode} />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center gap-3">
                    <i className="fas fa-folder-open text-3xl text-gray-300"></i>
                    <p className="font-semibold text-sm">No Customs Stations match your search criteria.</p>
                    <button
                      onClick={onResetFilters}
                      className="px-4 py-2 bg-kc-orange text-white rounded-xl text-xs font-bold hover:bg-orange-600 transition cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
