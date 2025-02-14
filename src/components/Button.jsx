import React from "react";

export default function Button({
  iconSrc,
  label,
  onClick,
  containerClass,
  buttonClass,
  iconClass,
  textClass,
  iconColSpan,
  textColSpan,
  width,
  height,
  gridcols,
  rounded,
  imgsize,
  labeltextsize,
}) {
  return (
    <div
      className={`flex items-center cursor-pointer ${containerClass}`}
      onClick={onClick}
    >
      <div
        className={`${width} ${height} ${rounded} sm:p-1 p-0 border-[0.4px] border-[#272A2D] shadow-custom-1 shadow-custom-2 bg-[#212225] grid ${gridcols} place-items-center ${buttonClass}`}
      >
        {iconSrc && (
          <div
            className={`${iconColSpan} flex justify-center items-center max-w-4 max-h-4 ${iconClass}`}
          >
            <img src={iconSrc} alt="Icon" className={`${imgsize}`} />
          </div>
        )}
        {label && (
          <div
            className={`${textColSpan} text-[#EDEEF0] ${labeltextsize} font-[500] flex items-center justify-center ${textClass}`}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
