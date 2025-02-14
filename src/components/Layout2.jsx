import React from "react";
import TechpackEditorSidebar from "./TechpackEditorSidebar";
import TechpackEditorBody from "./TechpackEditorBody";
import { Routes, Route } from "react-router-dom";
import CoverSheet from "./CoverSheet";
import BOMSheet from "./BOMSheet";
import TechpackEditorNavbar from "./TechpackEditorNavbar";

export default function Layout2() {
  return (
    <div className="grid grid-rows-12 h-[800px] w-full md:p-6 p-0">
      <div className="row-span-1 w-full">
        <TechpackEditorNavbar />
      </div>
      <div className="row-span-11 flex md:gap-4 gap-2">
        <TechpackEditorSidebar />
        <div className="flex w-full">
          <Routes>
            <Route index element={<TechpackEditorBody />} />
            <Route path="coversheet" element={<CoverSheet />} />
            <Route path="bomsheet" element={<BOMSheet />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
