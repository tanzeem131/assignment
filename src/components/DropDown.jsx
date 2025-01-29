import React, { useState } from "react";

const DropdownInput = ({
  label,
  placeholdertext,
  iconsource,
  options,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="flex flex-col w-[336px] gap-0 relative">
      <label className="w-fit h-[20px] text-[14px] font-[500] text-[#777B84]">
        {label}
      </label>
      <div className="relative w-[336px]" onClick={() => setIsOpen(!isOpen)}>
        <input
          type={type}
          className="w-full h-[40px] focus:ring-0 focus:outline-none p-[8px] pr-10 rounded-[12px] bg-[#212225] border border-[#272A2D] text-white cursor-pointer"
          placeholder={placeholdertext}
          value={selectedValue}
          readOnly
        />
        {iconsource && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src={iconsource} className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] w-[336px] bg-[#212225] border border-[#272A2D] rounded-[12px] shadow-lg max-h-[228px] overflow-auto z-10 scrollbar-hide">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 text-[14px] text-[#EDEEF0] cursor-pointer hover:bg-[#2A2B2E]"
              onClick={() => {
                setSelectedValue(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
