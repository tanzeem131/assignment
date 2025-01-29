import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const TechpackEditorSidebar = () => {
  return (
    <div className="flex gap-6 justify-between">
      <div className="w-[300px] h-[736px] bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] p-3 space-y-3">
        <div className="flex justify-between">
          <div className="text-[16px] font-[600] text-[#EDEEF0]">Sections</div>
          <div className="flex justify-center items-center">
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/plus-icon.svg"
                imgsize={"w-[10px] h-[10px]"}
                label="Add new"
                labeltextsize={"text-[12px]"}
                containerClass={"justify-center"}
                onClick={() => {
                  return;
                }}
                gridcols={
                  "grid-cols-12 gap-1 place-content-center justify-self-center"
                }
                iconColSpan={"col-span-3"}
                textColSpan={"col-span-9"}
                rounded={"rounded-[8px]"}
                width={"w-96px"}
                height={"h-[28px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
          </div>
        </div>
        <div className="border-b-2 border-[#272A2D] h-[1px] w-full"></div>
        <div className="flex flex-col gap-48">
          <div className="flex flex-col gap-4 justify-center h-[428px]">
            <Link to={"/techpack-editor/coversheet"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                iconClass={""}
                labeltextsize={"text-[14px]"}
                label="Cover Sheet"
                containerClass={
                  "justify-start rounded-[8px] border-[1px] border-[#003362]"
                }
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor/bomsheet"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="BOM Sheet"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Callouts"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Construction Details"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Colorways"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Artwork"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Labels"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Packaging"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Folding Instructions"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/dot-icon.svg"
                imgsize={"w-4 h-4"}
                label="Measurement Specifications"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-1 justify-self-start"}
                textColSpan={"col-span-11 justify-self-start"}
                rounded={"rounded-[8px]"}
                gridcols={"grid-cols-12 place-content-start"}
                width={"w-full"}
                height={"h-[32px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
          </div>
          <div>
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/drive-icon.svg"
                imgsize={"w-4 h-4"}
                label="Load Techpack"
                labeltextsize={"text-[14px]"}
                containerClass={"justify-start"}
                onClick={() => {
                  return;
                }}
                iconColSpan={"col-span-4 justify-self-end"}
                textColSpan={"col-span-8 justify-self-start"}
                rounded={"rounded-[12px]"}
                gridcols={"grid-cols-12 gap-2"}
                width={"w-full"}
                height={"h-[36px]"}
                buttonClass={"bg-[#212225]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechpackEditorSidebar;
