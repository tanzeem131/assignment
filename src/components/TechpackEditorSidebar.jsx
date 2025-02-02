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
    <div className="flex justify-center gap-6 max-h-[1000px]">
      <div className=" h-fit bg-[#18191B] shadow-custom-1 rounded-[16px] md:p-3 p-1 space-y-3">
        <div className="flex md:justify-between md:gap-4 gap-1 justify-center xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xs:flex-wrap flex-wrap">
          <div className="md:text-[16px] text-[14px] md:font-[600] font-[400] text-[#EDEEF0]">
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
            height="xs:h-[24px] sm:h-[24px] md:h-[28px] lg:h-[28px] xl:h-[28px]"
            buttonClass="bg-[#212225]"
          />
        </div>
        <div className="border-b-2 border-[#272A2D] h-[1px] w-full"></div>
        <div className="flex justify-center flex-col md:gap-4 gap-3">
          {navItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize="md:w-4 md:h-4 w-3 h-3"
                label={item.label}
                labeltextsize="lg:text-[14px] text-[10px] ml-2"
                containerClass="justify-center items-center"
                onClick={() => handleButtonClick(item.path)}
                iconColSpan="col-span-1 justify-self-start"
                textColSpan="col-span-11 justify-self-start"
                rounded="rounded-[8px]"
                gridcols="grid-cols-12 place-content-center"
                width="xl:w-[180px] lg:w-[150px] md:w-[130px] sm:w-[110px] w-[100px]"
                height="xs:h-[30px] sm:h-[32px] md:h-[32px] lg:h-[42px] xl:h-[42px]"
                buttonClass={`bg-[#212225] ${
                  activeButton === item.path
                    ? "border-[1px] border-[#003362] rounded-[8px]"
                    : ""
                }`}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-15">
          <Link to={"/techpack-editor"}>
            <Button
              iconSrc="/drive-icon.svg"
              imgsize="lg:w-4 lg:h-4 w-3 h-3"
              label="Load Techpack"
              labeltextsize="lg:text-[14px] text-[10px]"
              containerClass="justify-center items-center"
              iconColSpan="col-span-3 justify-self-center"
              textColSpan="col-span-9 justify-self-start"
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
