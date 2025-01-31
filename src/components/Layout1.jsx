import React, { useState } from "react";
import Heading from "./Heading";
import Library from "./Library";
import Search from "./Search";
import Techpack from "./Techpack";

export default function Layout1() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="space-y-[24px] sm:py-[12px] py-[2px] sm:px-[24px] px-[4px] m-0">
      <Heading />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Library />
      <Techpack searchTerm={searchTerm} />
    </div>
  );
}
