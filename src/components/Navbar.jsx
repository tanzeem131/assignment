import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full md:py-[12px] py-[2px] md:px-[24px] px-[4px] m-0 h-14">
      <div className="w-8 h-8">
        <img src="/left-icon.svg"></img>
      </div>
      <div className="w-8 h-8">
        <img src="/right-icon.svg"></img>
      </div>
    </div>
  );
}
