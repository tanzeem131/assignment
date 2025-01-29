import React from "react";

const Button = ({
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
}) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${containerClass}`}
      onClick={onClick}
    >
      <div
        className={`${width} ${height} ${rounded} p-1 border-[0.4px] border-[#272A2D] shadow-custom-1 shadow-custom-2 bg-[#212225] grid ${gridcols} place-items-center ${buttonClass}`}
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
};

export default Button;
