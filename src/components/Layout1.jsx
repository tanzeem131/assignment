import React, { useState } from "react";
import Heading from "./Heading";
import Library from "./Library";
import Search from "./Search";
import Techpack from "./Techpack";

const Layout1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="space-y-[24px] py-[12px] px-[24px] m-0">
      <Heading />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Library />
      <Techpack searchTerm={searchTerm} />
    </div>
  );
};

export default Layout1;
