import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-24 w-[1392px] h-[36px]">
        <div className="col-span-18 flex justify-start items-center">
          <div className="flex gap-2 items-center h-full">
            <div className="font-[500] text-[18px] text-[#EDEEF0] w-[60px] h-[28px]">
              Library
            </div>
            <div className="w-[91px] h-[24px] border-[0.4px] border-[#272A2D] shadow-custom-1 shadow-custom-2 bg-[#212225] rounded-[40px] grid grid-cols-6 items-center">
              <div className="col-span-2 flex justify-center items-center rounded-full bg-[#0090FF] w-[22px] h-[22px]">
                <img
                  src="/drive-icon.svg"
                  alt="Drive-Icon"
                  className="w-4 h-4"
                />
              </div>
              <div className="col-span-4 text-[#EDEEF0] text-[12px] font-[500] flex items-center justify-start pl-2 w-[51px] h-[16px]">
                120/500
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <button className="bg-[#212225] w-[36px] h-[36px] rounded-xl shadow-custom-1 shadow-custom-2 flex justify-center items-center">
            <img
              src="/filter-btn.svg"
              className="w-4 h-4"
              alt="Filter-Button"
            />
          </button>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img src="/vertical-line.svg" className="h-[24px]"></img>
        </div>
        <div className="col-span-2 flex justify-start items-center">
          <Button
            iconSrc="/upload-icon.svg"
            imgsize={"w-4 h-4"}
            label="Upload"
            labeltextsize={"text-[14px]"}
            containerClass={"col-span-2 justify-start"}
            onClick={() => console.log("Upload clicked")}
            gridcols={"grid-cols-6"}
            iconColSpan={"col-span-2"}
            textColSpan={"col-span-4"}
            rounded={"rounded-[12px]"}
            width={"w-[96px]"}
            height={"h-[36px]"}
            buttonClass={"bg-[#212225]"}
          />
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <Link to={"/techpack-editor"}>
            <Button
              iconSrc="/plus-icon.svg"
              imgsize={"w-4 h-4"}
              label="Create new"
              labeltextsize={"text-[14px]"}
              containerClass={"col-span-2 justify-end"}
              onClick={() => {
                return;
              }}
              gridcols={"grid-cols-6"}
              iconColSpan={"col-span-1"}
              textColSpan={"col-span-5"}
              rounded={"rounded-[12px]"}
              width={"w-full"}
              height={"h-[36px]"}
              buttonClass={"bg-blue-500"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Library;
