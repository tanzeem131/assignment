import React from "react";
import TechpackEditorSidebar from "./TechpackEditorSidebar";
import TechpackEditorBody from "./TechpackEditorBody";
import { Routes, Route } from "react-router-dom";
import CoverSheet from "./CoverSheet";
import BOMSheet from "./BOMSheet";
import TechpackEditorNavbar from "./TechpackEditorNavbar";

function Layout2() {
  return (
    <div className="grid grid-rows-12 h-[800px] p-6">
      <div className="row-span-1">
        <TechpackEditorNavbar />
      </div>
      <div className="row-span-11 flex gap-4 overflow-hidden">
        <TechpackEditorSidebar />
        <div className="flex">
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

export default Layout2;
