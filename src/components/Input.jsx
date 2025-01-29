import React from "react";

const Input = ({ label, placeholdertext, iconsource, type }) => {
  return (
    <>
      <div className="flex justify-start items-start flex-col w-[336px] h-[66px] gap-[6px]">
        <div>
          <label className="w-fit h-[20px] text-[14px] font-[500] text-[#777B84]">
            {label}
          </label>
        </div>
        <div className="relative w-[336px]">
          <input
            id={type === "date" ? "customDateInput" : undefined}
            type={type}
            className="w-full h-[40px] p-[8px] focus:ring-0 focus:outline-none pr-10 rounded-[12px] bg-[#212225] border-[1px] border-[#272A2D] text-white"
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
};

export default Input;
