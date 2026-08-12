import React from "react";

interface PortCodesPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function PortCodesPagination({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
}: PortCodesPaginationProps) {
  if (pageSize === -1 || totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-slate-200 bg-slate-50/50 rounded-b-2xl gap-4 text-xs">
      <div className="text-gray-500 font-medium">
        Page <span className="font-bold text-gray-800">{currentPage}</span> of{" "}
        <span className="font-bold text-gray-800">{totalPages}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
          className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-gray-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition cursor-pointer"
        >
          <i className="fas fa-angles-left"></i> First
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-gray-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition cursor-pointer"
        >
          <i className="fas fa-chevron-left text-[10px]"></i> Prev
        </button>

        {/* Page Jump buttons */}
        <div className="flex items-center gap-1 px-2">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum = currentPage;
            if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            if (pageNum < 1 || pageNum > totalPages) return null;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-kc-orange text-white"
                    : "bg-white border border-slate-200 text-gray-700 hover:bg-slate-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-gray-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition cursor-pointer"
        >
          Next <i className="fas fa-chevron-right text-[10px]"></i>
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-gray-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition cursor-pointer"
        >
          Last <i className="fas fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
