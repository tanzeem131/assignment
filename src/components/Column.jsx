import React from "react";

const Column = ({ title, data, isImage = false }) => {
  console.log(`Column: ${title} - Data Length:`, data.length);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-[#EDEEF0] text-center text-[14px] font-[500] mb-2">
        {title}
      </div>
      <div className="flex-1 flex flex-col w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center w-full p-2 my-1"
          >
            {isImage ? (
              <img
                src={item}
                alt="Item"
                className="w-16 h-16 object-cover rounded-md"
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
};

export default Column;
