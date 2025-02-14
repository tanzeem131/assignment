import React from "react";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="h-[100px]">
      <div className="max-w-[640px] max-h-full mx-auto border-[0.4px] border-[#003362] bg-[#18191B] rounded-2xl shadow-custom-1 shadow-custom-2">
        <div className="py-[12px] px-[16px] flex flex-col gap-[10px]">
          <div className="h-[40px] flex justify-between">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for..."
              className="text-[14px] text-[#777B84] ml-2 mt-2 max-w-[70%] focus:outline-none"
            ></input>
            <div className="text-[#777B84]">
              <img src="/photo-upload.svg"></img>
            </div>
          </div>
          <div className="flex items-center justify-between text-2xl text-[#EDEEF0] w-[100px] h-[24px] rounded-[8px] py-[4px] px-[8px] text-[12px] bg-[#212225] cursor-pointer shadow-custom-1 shadow-custom-2">
            <div className="">Select Source</div>
            <div>
              <img src="/down-key.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
