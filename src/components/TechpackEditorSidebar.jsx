import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function TechpackEditorSidebar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  const navItems = [
    {
      label: "Cover Sheet",
      path: "/techpack-editor/coversheet" && "/techpack-editor",
    },
    { label: "BOM Sheet", path: "/techpack-editor/bomsheet" },
    { label: "Callouts", path: "/techpack-editor/callouts" },
    {
      label: "Construction Details",
      path: "/techpack-editor/construction-details",
    },
    { label: "Colorways", path: "/techpack-editor/colorways" },
    { label: "Artwork", path: "/techpack-editor/artwork" },
    { label: "Labels", path: "/techpack-editor/labels" },
    { label: "Packaging", path: "/techpack-editor/packaging" },
    {
      label: "Folding Instructions",
      path: "/techpack-editor/folding-instructions",
    },
    {
      label: "Measurement Specifications",
      path: "/techpack-editor/measurement-specifications",
    },
  ];

  return (
    <div className="flex gap-6 justify-between">
      <div className="md:w-[300px] w-[150px] h-[736px] bg-[#18191B] shadow-custom-1 rounded-[16px] md:p-3 p-1 space-y-3">
        <div className="flex justify-between">
          <div className="text-[16px] md:font-[600] font-[400] text-[#EDEEF0]">
            Sections
          </div>
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
        <div className="border-b-2 border-[#272A2D] h-[1px] w-full"></div>
        <div className="flex flex-col md:gap-4 gap-3">
          {navItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize="md:w-4 md:h-4 w-3 h-3"
                label={item.label}
                labeltextsize="lg:text-[14px] text-[12px]"
                containerClass="justify-start"
                onClick={() => handleButtonClick(item.path)}
                iconColSpan="col-span-1 justify-self-start"
                textColSpan="col-span-11 justify-self-start"
                rounded="rounded-[8px]"
                gridcols="grid-cols-12 place-content-center"
                width="xl:w-full lg:w-full md:w-20px sm:w-20px w-14px"
                height="h-[32px]"
                buttonClass={`bg-[#212225] ${
                  activeButton === item.path
                    ? "border-[1px] border-[#003362] rounded-[8px]"
                    : ""
                }`}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <Link to={"/techpack-editor"}>
            <Button
              iconSrc="/drive-icon.svg"
              imgsize="lg:w-4 lg:h-4 w-3 h-3"
              label="Load Techpack"
              labeltextsize="lg:text-[14px] text-[12px]"
              containerClass="justify-start"
              iconColSpan="lg:col-span-4 col-span-2 justify-self-end"
              textColSpan="lg:col-span-8 col-span-10 justify-self-start"
              rounded="rounded-[12px]"
              gridcols="grid-cols-12 gap-2"
              width="xl:w-full lg:w-full md:w-20px sm:w-20px w-16px"
              height="h-[36px]"
              buttonClass="bg-[#212225]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
