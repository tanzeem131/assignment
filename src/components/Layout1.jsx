import React from "react";
import Heading from "./Heading";
import Library from "./Library";
import Search from "./Search";
import Techpack from "./Techpack";

const Layout1 = () => {
  return (
    <div className="space-y-[24px] py-[12px] px-[24px] m-0">
      <Heading />
      <Search />
      <Library />
      <Techpack />
    </div>
  );
};

export default Layout1;
