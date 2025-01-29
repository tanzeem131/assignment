import React from "react";
import TechpackEditorSidebar from "./TechpackEditorSidebar";
import TechpackEditorBody from "./TechpackEditorBody";
import { Routes, Route } from "react-router-dom";
import CoverSheet from "./CoverSheet";
import BOMSheet from "./BOMSheet";

function Page2() {
  return (
    <div className="flex">
      <TechpackEditorSidebar />
      <div className="flex-1">
        <Routes>
          <Route index element={<TechpackEditorBody />} />
          <Route path="coversheet" element={<CoverSheet />} />
          <Route path="bomsheet" element={<BOMSheet />} />
        </Routes>
      </div>
    </div>
  );
}

export default Page2;
