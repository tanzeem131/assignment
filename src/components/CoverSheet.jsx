import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import DropdownInput from "./DropDown";
import Button from "./Button";

const CoverSheet = () => {
  return (
    <>
      <div className="max-w-[1150px] h-[736px] bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] px-[16px] py-[12px] space-y-[16px]">
        <div className="h-[62px">
          <div className="flex justify-between">
            <div className="space-y-[8px]">
              <div className="text-[16px] font-[600] text-[#EDEEF0]">
                Cover Sheet
              </div>
              <div className="text-[12px] font-[400] text-[#EDEEF0]">
                Provide a detailed overview of the garment and essential
                metadata for quick reference.
              </div>
            </div>
            <div>
              <Link to={"/techpack-editor"}>
                <Button
                  iconSrc="/plus-icon.svg"
                  imgsize={"w-[10px] h-[10px]"}
                  label="Add new"
                  labeltextsize={"text-[12px]"}
                  containerClass={"justify-center"}
                  onClick={() => console.log("Create new clicked")}
                  gridcols={
                    "grid-cols-12 gap-1 place-content-center justify-self-center"
                  }
                  iconColSpan={"col-span-3"}
                  textColSpan={"col-span-9"}
                  rounded={"rounded-[8px]"}
                  width={"w-[96px]"}
                  height={"h-[28px]"}
                  buttonClass={"bg-[#212225]"}
                />
              </Link>
            </div>
          </div>
          <div className="border-b-2 border-[#272A2D] h-[16px] w-full"></div>
        </div>
        <div className="h-[246px] flex flex-wrap w-[1200px] space-x-14 space-y-6">
          <Input
            label={"Brand"}
            type={"text"}
            placeholdertext={"Placeholder"}
            iconsource={""}
          />
          <Input
            label={"Designer"}
            type={"text"}
            placeholderte
            xt={"Placeholder"}
            iconsource={""}
          />
          <Input
            label={"Description"}
            type={"text"}
            placeholdertext={"Placeholder"}
            iconsource={""}
          />
          <Input
            label={"Style Name"}
            type={"text"}
            placeholdertext={"Placeholder"}
            iconsource={""}
          />
          <Input
            label={"Style Code"}
            type={"text"}
            placeholdertext={"Placeholder"}
            iconsource={""}
          />
          <DropdownInput
            label={"Season"}
            type={"select"}
            placeholdertext={"Placeholder"}
            iconsource={"/down-key-grey.svg"}
            options={[
              "S/S 2024",
              "Spring/Summer 2025",
              "Resort 2025",
              "Fall/Winter 2025",
              "Pre-Fall 2025",
              "Cruise 2025",
            ]}
          />
          <DropdownInput
            label={"Size Range"}
            type={"select"}
            placeholdertext={"Placeholder"}
            iconsource={"/down-key-grey.svg"}
            options={["XS", "S", "M", "L", "XL"]}
          />
          <Input
            label={"Date Created"}
            type={"date"}
            placeholdertext={"Placeholder"}
            iconsource={"/calendar_icon.svg"}
          />
        </div>
        <div className="h-[308px] space-x-4 space-y-4 mt-8">
          <div>
            <div className="w-fit h-[20px] text-[14px] font-[500] text-[#777B84]">
              Upload Image/Sketch
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/cover-sheet.png" className="w-[336px] h-[280px]"></img>
            <img src="/cover-sheet-2.png" className="w-[336px] h-[280px]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverSheet;
