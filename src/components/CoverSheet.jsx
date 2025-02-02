import React from "react";
import Input from "./Input";
import DropdownInput from "./DropDown";
import Button from "./Button";

export default function CoverSheet() {
  return (
    <>
      <div className="w-full min-h-fit bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] md:px-[16px] px-[4px] md:py-[12px] py-[6px] space-y-[16px]">
        <div className="h-[62px]">
          <div className="flex justify-between">
            <div className="md:space-y-[8px] space-y-0">
              <div className="sm:text-[16px] text-[14px] md:font-[600] font-[400] text-[#EDEEF0]">
                Cover Sheet
              </div>
              <div className="sm:text-[12px] text-[11px] md:font-[400] font-[300] text-[#EDEEF0]">
                Provide a detailed overview of the garment and essential
                metadata for quick reference.
              </div>
            </div>
            <div>
              <Button
                iconSrc="/plus-icon.svg"
                imgsize="w-[10px] h-[10px]"
                label="Add new"
                labeltextsize="md:text-[12px] text-[11px]"
                containerClass="justify-center"
                gridcols="grid-cols-12 md:gap-1 gap-0 place-content-center"
                iconColSpan="col-span-3"
                textColSpan="col-span-9"
                rounded="rounded-[8px]"
                width="md:w-[96px] w-[70px]"
                height="h-[28px]"
                buttonClass="bg-[#212225]"
              />
            </div>
          </div>
          <div className="border-b-2 border-[#272A2D] h-[16px] w-full"></div>
        </div>
        <div
          className="min-h-[246px] md:my-10 sm:my-10 my-5 lg:my-10 xl:my-10 flex flex-wrap md:justify-start justify-center 
          w-full gap-x-4 lg:gap-x-6 md:gap-y-6 gap-y-8 md:overflow-visible overflow-y-auto scrollbar-hide"
        >
          <Input
            label={"Brand"}
            type={"text"}
            placeholdertext={"Placeholder"}
            iconsource={""}
          />
          <Input
            label={"Designer"}
            type={"text"}
            placeholdertext={"Placeholder"}
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
        <div className="bg-[#18191B] space-x-4 space-y-4 md:my-8 my-2">
          <div className="w-fit h-[20px] sm:text-[14px] text-[12px] font-[500] text-[#777B84]">
            Upload Image/Sketch
          </div>
          <div className="flex flex-wrap sm:gap-6 gap-2">
            <div>
              <img
                src="/cover-sheet.png"
                className="md:w-[300px] md:h-[250px] w-[100px] h-[80px]"
              ></img>
            </div>
            <div>
              <img
                src="/cover-sheet-2.png"
                className="md:w-[300px] md:h-[250px] w-[100px] h-[80px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
