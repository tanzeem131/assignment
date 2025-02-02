import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function TechpackEditorNavbar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <div>
            <Link to={"/"}>
              <Button
                iconSrc="/left-key.svg"
                imgsize={"w-3 h-3"}
                label=""
                labeltextsize={"md:text-[14px] text-[12px]"}
                containerClass={"col-span-2 justify-end"}
                onClick={() => {
                  return;
                }}
                gridcols={"grid-cols-1"}
                iconColSpan={"col-span-1"}
                textColSpan={""}
                rounded={"rounded-[8px]"}
                width={"w-[28px]"}
                height={"h-[28px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
          </div>
          <div>
            <div className="md:text-[18px] text-[14px] text-[#EDEEF0] font-[500]">
              Techpack Editor
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc=""
                imgsize={""}
                label="Preview"
                labeltextsize={"md:text-[14px] text-[12px]"}
                containerClass={"col-span-2 justify-end"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1"}
                textColSpan={"col-span-5"}
                rounded={"rounded-[12px]"}
                gridcols={""}
                width={"md:w-[77px] w-[60px]"}
                height={"md:h-[36px] h-[28px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
          </div>
          <div>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc=""
                imgsize={""}
                label="Save"
                containerClass={"col-span-2 justify-end"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1"}
                textColSpan={"col-span-5"}
                rounded={"rounded-[12px]"}
                gridcols={""}
                width={"md:w-[57px] w-[45px]"}
                height={"md:h-[36px] h-[28px]"}
                buttonClass={"bg-blue-500"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
