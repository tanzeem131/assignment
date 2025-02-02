import React from "react";

export default function Modal({
  title,
  subheading,
  onChange,
  handleSubmit,
  fields,
  formData,
  onClick,
}) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-[#212225] p-6 rounded-lg w-[400px] shadow-lg">
          <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
          <h2 className="text-white text-[12px] font-thin mb-1">
            {subheading}
          </h2>
          {fields.map((field) => (
            <input
              key={field}
              name={field}
              value={formData[field]}
              onChange={onChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full mb-3 p-2 rounded bg-[#2A2B2E] text-white"
            />
          ))}

          <div className="flex justify-between">
            <button
              onClick={onClick}
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
