import React from "react";
import { CustomsPortCode } from "@/constants/port-codes";

interface PortCodesTableRowProps {
  item: CustomsPortCode;
  onCopyCode: (code: string) => void;
}

export default function PortCodesTableRow({ item, onCopyCode }: PortCodesTableRowProps) {
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "Port":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "ACC":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "ICD":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "CFS":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "LCS":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <tr className="hover:bg-orange-50/40 transition-colors duration-150 group">
      <td className="py-3 px-4 text-center text-gray-400 font-semibold">{item.sno}</td>

      {/* Port Code with Copy Button */}
      <td className="py-3 px-4 font-mono font-bold text-kc-orange">
        <button
          onClick={() => onCopyCode(item.portCode)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-100/80 hover:bg-kc-orange hover:text-white transition duration-150 cursor-pointer shadow-3xs"
          title="Click to copy Port Code"
        >
          <span>{item.portCode}</span>
          <i className="far fa-copy text-[10px] opacity-70 group-hover:opacity-100"></i>
        </button>
      </td>

      {/* Station Name */}
      <td className="py-3 px-4 font-semibold text-gray-900 leading-snug">
        {item.name}
      </td>

      {/* Station Type Badge */}
      <td className="py-3 px-4">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-md border text-[10px] font-extrabold uppercase tracking-wider ${getTypeBadgeStyle(
            item.type
          )}`}
        >
          {item.type}
        </span>
      </td>

      {/* State */}
      <td className="py-3 px-4 font-semibold text-gray-800">{item.state}</td>

      {/* Zone */}
      <td className="py-3 px-4 text-gray-600 font-medium">{item.zone}</td>

      {/* EDI Status */}
      <td className="py-3 px-4 text-center">
        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {item.status}
        </span>
      </td>
    </tr>
  );
}
