import React from "react";
import { useSelector } from "react-redux";

export default function Techpack({ searchTerm }) {
  const datafromredux = useSelector(
    (store) => store.techpackData?.data?.items || []
  );

  const filteredData = datafromredux.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="flex flex-wrap lg:justify-start md:justify-start sm:justify-center justify-center gap-6 max-w-[1392px]">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="w-[212px] h-[200px] cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="border-[0.4px] border-[#272A2D] w-full h-[172px] rounded-[12px]"
              />
              <label className="w-full h-[28px] text-[#EDEEF0] font-[500] text-[14px]">
                {item.name}
              </label>
            </div>
          ))
        ) : (
          <p className="text-white">No results found</p>
        )}
      </div>
    </div>
  );
}
