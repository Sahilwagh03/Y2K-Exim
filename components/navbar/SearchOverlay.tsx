"use client";

import React from "react";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-[99999] animate-popup-fade select-none">
      <div className="w-[900px] max-w-[90%] bg-white p-[30px] rounded-lg relative">
        {/* Close Search Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white border-none bg-transparent text-3xl cursor-pointer hover:scale-110 transition duration-200"
          aria-label="Close search overlay"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Embedded Google GCSE */}
        <div className="w-full">
          <iframe
            src="https://cse.google.com/cse.js?cx=048b28fae166745ae"
            className="hidden"
            title="GCSE Loader"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://cse.google.com/cse.js?cx=048b28fae166745ae"></script>
              <div class="gcse-search"></div>
            `,
            }}
          />
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Type your search query and press Enter
        </p>
      </div>
    </div>
  );
}
