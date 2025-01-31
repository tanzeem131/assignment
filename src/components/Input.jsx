import React from "react";

export default function Input({ label, placeholdertext, iconsource, type }) {
  return (
    <>
      <div className="flex justify-start items-start flex-col lg:w-[336px] md:w-[336px] sm:w-[280px] w-[200px] lg:h-[66px] md:h-[55px] sm:h-[50px] h-[40px] md:gap-[6px] gap-[3px]">
        <div className="w-fit h-[20px] text-[14px] font-[500] text-[#777B84]">
          {label}
        </div>
        <div className="relative xl:w-[336px] lg:w-[336px] md:w-[280px] sm:w-[220px] w-[200px]">
          <input
            id={type === "date" ? "customDateInput" : undefined}
            type={type}
            className="lg:w-full w-[1/2] lg:h-[40px] h-[40px] md:p-[8px] p-[2px] focus:ring-0 focus:outline-none rounded-[12px] bg-[#212225] border-[1px] border-[#272A2D] text-white"
            placeholder={placeholdertext}
          />
          {type === "date" && iconsource && (
            <div
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("customDateInput").showPicker();
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <img src={iconsource} className="w-4 h-4" />
            </div>
          )}
          {type !== "date" && iconsource && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src={iconsource} className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
