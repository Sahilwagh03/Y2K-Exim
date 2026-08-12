import React from "react";

interface PortCodesInfoGuideProps {
  hide?: boolean;
  show?: boolean;
}

export default function PortCodesInfoGuide({ hide = false, show = true }: PortCodesInfoGuideProps) {
  if (hide || !show) return null;
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-2xs space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-kc-orange">
          <i className="fas fa-circle-info text-base"></i>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 font-display">
            Understanding Indian Customs Location Codes (UN/LOCODE)
          </h3>
          <p className="text-xs text-gray-500 font-medium">
            Standard 6-character location identifiers used in ICEGATE electronic filings
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600 leading-relaxed font-medium">
        <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
          <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <i className="fas fa-barcode text-kc-orange text-xs"></i> Port Code Structure
          </h4>
          <p>
            Indian Customs Port Codes follow the UN/LOCODE standard format starting with country prefix{" "}
            <strong>IN</strong> followed by a 3-character location code and numeric station type (e.g.,{" "}
            <strong>INNSA1</strong> for Nhava Sheva Sea Port, <strong>INBOM4</strong> for Sahar Air Cargo).
          </p>
        </div>

        <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
          <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <i className="fas fa-network-wired text-kc-orange text-xs"></i> ICEGATE EDI Integration
          </h4>
          <p>
            All 412 customs stations listed in this official directory are <strong>EDI-enabled</strong>.
            Exporters and importers must specify the correct Port Code on Shipping Bills, Bills of Entry, AD Code
            registrations, and GST refunds.
          </p>
        </div>

        <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
          <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <i className="fas fa-handshake text-kc-orange text-xs"></i> Customs Clearance Assistance
          </h4>
          <p>
            As a premier Customs House Agent (CHA) and EXIM consultancy, Y2K Exim handles customs clearance, AD code
            registration, ICEGATE mapping, and shipping bill error resolutions across major Indian ports.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-slate-100 text-xs">
        <span className="text-gray-500 font-medium">
          Need professional assistance with Customs Clearance or ICEGATE registration?
        </span>
        <a
          href="/Customs-House-Agent-Services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-kc-orange text-white font-bold hover:bg-orange-600 transition shadow-sm"
        >
          <span>Explore Customs House Agent Services</span>
          <i className="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
    </div>
  );
}
