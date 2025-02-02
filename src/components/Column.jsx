import React from "react";

export default function Column({ title, data, isImage = false }) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-[#EDEEF0] whitespace-nowrap text-center text-[14px] font-[500] mb-2">
        {title}
      </div>
      <div className="flex-1 flex justify-center flex-col w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center w-full md:p-2 p-1 m-2"
          >
            {isImage ? (
              <img
                src={item}
                alt="Item"
                className="md:w-16 md:h-16 w-10 h-10 object-cover rounded-md"
              />
            ) : (
              <span className="text-[#EDEEF0] text-[12px] text-wrap">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
