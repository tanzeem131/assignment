import React, { useState } from "react";

export default function DropdownInput({
  label,
  placeholdertext,
  iconsource,
  options,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(options);

  const handleSelect = (option) => {
    setSelectedValues([...selectedValues, option]);
    setAvailableOptions(availableOptions.filter((item) => item !== option));
    setIsOpen(false);
  };

  const handleRemove = (option) => {
    setSelectedValues(selectedValues.filter((item) => item !== option));
    setAvailableOptions([...availableOptions, option]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && selectedValues.length > 0) {
      const lastSelected = selectedValues[selectedValues.length - 1];
      handleRemove(lastSelected);
    }
  };

  return (
    <div className="gap-0 relative flex flex-col lg:w-[336px] md:w-[336px] sm:w-[280px] w-[200px]">
      <label className="w-fit h-[20px] text-[14px] font-[500] text-[#777B84]">
        {label}
      </label>
      <div
        className="relative xl:w-[336px] lg:w-[336px] md:w-[280px] sm:w-[220px] w-[200px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="lg:w-full w-[1/2] min-h-[40px] max-h-[80px] flex items-start flex-wrap focus:ring-0 focus:outline-none p-[8px] rounded-[12px] bg-[#212225] border border-[#272A2D] text-white cursor-pointer overflow-y-auto scrollbar-hide"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="w-full text-[14px] text-[#EDEEF0] whitespace-nowrap">
            {selectedValues.length > 0 ? (
              selectedValues.join(", ")
            ) : (
              <span className="text-[#777B84]">{placeholdertext}</span>
            )}
          </div>
        </div>
        {iconsource && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src={iconsource} className="w-4 h-4" alt="icon" />
          </div>
        )}
      </div>
      {isOpen && availableOptions.length > 0 && (
        <div className="absolute top-[70px] xl:w-[336px] lg:w-[336px] md:w-[280px] sm:w-[220px] w-[200px] bg-[#212225] border border-[#272A2D] rounded-[12px] shadow-lg max-h-[228px] overflow-auto z-10 scrollbar-hide">
          {availableOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 text-[14px] text-[#EDEEF0] cursor-pointer hover:bg-[#2A2B2E]"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
