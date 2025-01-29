import React from "react";

const data = [
  { img: "/img1.png", title: "Teckpack - AB654321" },
  { img: "/img2.png", title: "Teckpack - AB987654" },
  { img: "/img3.png", title: "Teckpack - AB012345" },
  { img: "/img4.png", title: "Teckpack - AB456789" },
  { img: "/img5.png", title: "Teckpack - AB345678" },
  { img: "/img6.png", title: "Teckpack - AB789012" },
  { img: "/img7.png", title: "Teckpack - AB123456" },
  { img: "/img8.png", title: "Teckpack - AB210987" },
  { img: "/img9.png", title: "Teckpack - AB678901" },
  { img: "/img10.png", title: "Teckpack - AB876543" },
  { img: "/img11.png", title: "Teckpack - AB345678" },
];

const Techpack = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-6 w-[1392px]">
        {data.map((item, index) => (
          <div key={index} className="w-[212px] h-[200px]  cursor-pointer">
            <img
              src={item.img}
              className="border-[0.4px] border-[#272A2D] rounded-[12px]"
            ></img>
            <label className="w-[212px] h-[20px] text-[#EDEEF0] font-[500] text-[14px]">
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techpack;
