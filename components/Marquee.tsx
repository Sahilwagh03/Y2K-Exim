import React from "react";

export default function Marquee() {
  const updates = [
    "Inviting TRQ Applications under India–UK CETA for Calendar year 2026 under DGFT Public Notice No. 22/2026-27 dated 20 July 2026",
    "DGFT Notification No. 66/2025 - 26 Dated: 23-03-2026 Full RoDTEP rates restored as on 22-02-2026; earlier 50% cap withdrawn (Notification No. 60/2025 - 26). Hereby restored with effect from 23-03-2026 to 31-03-2026 for all eligible export products.",
    "New Update from Food Safety and Standards Authority of India (FSSAI) | Effective April 1, 2026 | Registration limit increased to ₹1.5 Crore | State Licence up to ₹50 Crore | Central Licence only above ₹50 Crore | No more renewals | Easier compliance.",
    "DGFT Notification dated 06-03-2026: Export Obligation (EO) period for Advance Authorisation (AA) and EPCG Authorisations expiring between 01-03-2026 and 31-05-2026 has been automatically extended up to 31-08-2026.",
    "RoDTEP rates for all HS lines (Appendix 4R & 4RE) are reduced to 50% of the existing rates, including value caps, with immediate effect.",
    "The reduced RoDTEP rates and value caps (50%) will NOT apply to exports under ITC HS Chapter 01 to 24.",
    "Export of wheat flour and related products under ITC(HS) 1101 remains prohibited, except up to 5 LMT permitted against DGFT Export Authorisation as per DGFT Notification No. 55/2025-26 Date: 16-01-2026",
    "ICC - Multi-Product Food Irradiation Units under PMKSY - last date for online submission is 28-02-2026 (5:00 PM)",
    "Non-Basmati Rice exports now require APEDA contract registration (RCAC) as per DGFT Notification No. 33 Date: 29-09-2025.",
    "The EOU against the import of the chemical products under AA has been extended from 6 months to 18 months. Henceforth, EO period for all AA holders shall be as per Para 4.40 of Handbook of Procedures.",
    "Restoration of RoDTEP for Advance Authorisations (AAs) holders, Special Economic Zones (SEZs) and Export-Oriented Units (EOUs) from 01.06.2025"
  ];

  return (
    <div className="bg-kc-orange text-white py-3 flex items-center overflow-hidden z-20 relative">
      <span className="font-semibold px-4 z-30 bg-kc-orange whitespace-nowrap flex items-center gap-1.5 shadow-[5px_0_15px_rgba(234,88,12,0.5)]">
        <span>🔔</span> Latest Updates:
      </span>

      <div className="relative overflow-hidden flex-1 w-full">
        <div className="updates-marquee whitespace-nowrap text-sm font-medium tracking-wide">
          {updates.map((update, idx) => (
            <span key={idx} className="inline-flex items-center mx-10">
              <span className="text-[#34D399] mr-2">✔</span> {update}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
