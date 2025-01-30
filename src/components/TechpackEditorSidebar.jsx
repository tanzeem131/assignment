import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const TechpackEditorSidebar = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  const navItems = [
    { label: "Cover Sheet", path: "/techpack-editor/coversheet" },
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
      <div className="w-[300px] h-[736px] bg-[#18191B] shadow-custom-1 rounded-[16px] p-3 space-y-3">
        <div className="flex justify-between">
          <div className="text-[16px] font-[600] text-[#EDEEF0]">Sections</div>
          <Link to={"/techpack-editor"}>
            <Button
              iconSrc="/plus-icon.svg"
              imgsize="w-[10px] h-[10px]"
              label="Add new"
              labeltextsize="text-[12px]"
              containerClass="justify-center"
              gridcols="grid-cols-12 gap-1 place-content-center"
              iconColSpan="col-span-3"
              textColSpan="col-span-9"
              rounded="rounded-[8px]"
              width="w-96px"
              height="h-[28px]"
              buttonClass="bg-[#212225]"
            />
          </Link>
        </div>
        <div className="border-b-2 border-[#272A2D] h-[1px] w-full"></div>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize="w-4 h-4"
                label={item.label}
                labeltextsize="text-[14px]"
                containerClass="justify-start"
                onClick={() => handleButtonClick(item.path)}
                iconColSpan="col-span-1 justify-self-start"
                textColSpan="col-span-11 justify-self-start"
                rounded="rounded-[8px]"
                gridcols="grid-cols-12 place-content-start"
                width="w-full"
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
        <div className="mt-40">
          <Link to={"/techpack-editor"}>
            <Button
              iconSrc="/drive-icon.svg"
              imgsize="w-4 h-4"
              label="Load Techpack"
              labeltextsize="text-[14px]"
              containerClass="justify-start"
              iconColSpan="col-span-4 justify-self-end"
              textColSpan="col-span-8 justify-self-start"
              rounded="rounded-[12px]"
              gridcols="grid-cols-12 gap-2"
              width="w-full"
              height="h-[36px]"
              buttonClass="bg-[#212225]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechpackEditorSidebar;
