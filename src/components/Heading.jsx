import React from "react";

export default function Heading() {
  return (
    <div className="text-center w-full h=[64px] space-y-[4px]">
      <div className="lg:text-[32px] md:text-[32px] sm:text-[26px] text-[20px] font-[600]">
        What do you want to <span className="text-[#0090ff]">explore?</span>
      </div>
      <div className="lg:text-[14px] md:text-[14px] sm:text-[10px] text-[10px]">
        Ask, get, edit, and create techpacks seamlessly
      </div>
    </div>
  );
}
