import React from "react";
import { useSelector } from "react-redux";

// const data = [
//   { img: "/img1.png", title: "Teckpack - AB654321" },
//   { img: "/img2.png", title: "Teckpack - AB987654" },
//   { img: "/img3.png", title: "Teckpack - AB012345" },
//   { img: "/img4.png", title: "Teckpack - AB456789" },
//   { img: "/img5.png", title: "Teckpack - AB345678" },
//   { img: "/img6.png", title: "Teckpack - AB789012" },
//   { img: "/img7.png", title: "Teckpack - AB123456" },
//   { img: "/img8.png", title: "Teckpack - AB210987" },
//   { img: "/img9.png", title: "Teckpack - AB678901" },
//   { img: "/img10.png", title: "Teckpack - AB876543" },
//   { img: "/img11.png", title: "Teckpack - AB345678" },
// ];

const Techpack = ({ searchTerm }) => {
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
            <div
              key={index}
              className="sm:w-[212px] sm:h-[200px] w-[150px] h-[150px] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="border-[0.4px] border-[#272A2D] rounded-[12px]"
              />
              <label className="w-[212px] h-[20px] text-[#EDEEF0] font-[500] text-[14px]">
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
};

export default Techpack;
