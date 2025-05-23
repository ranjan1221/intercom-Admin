import React from "react";

const TopBanner = () => (
  <div className="flex items-center justify-center px-6 py-3 bg-[#d7e6ff] rounded-2xl mx-4 mt-4 mb-2 border border-blue-200 min-h-[56px]">
    <span className="text-[16px]">
      You have <strong className="font-bold">10 days</strong> left in your Advanced trial
    </span>
    <button
      className="ml-6 bg-[#1a1a1a] text-white font-bold rounded-full px-6 py-2 text-[16px] leading-5 shadow-sm hover:bg-[#333] transition"
      style={{ marginLeft: "24px" }}
    >
      Buy Intercom
    </button>
    <button
      className="ml-4 bg-[#f0f3f7] text-[#1a1a1a] font-bold rounded-full px-6 py-2 text-[16px] leading-5 whitespace-nowrap shadow-sm hover:bg-[#e6e6e6] transition"
    >
      Apply for an Early Stage 90% discount
    </button>
  </div>
);

export default TopBanner;