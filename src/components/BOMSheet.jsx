import React, { useState } from "react";
import Button from "./Button";
import { BASE_URL } from "../utils/config";
import useFetchBomData from "../hooks/useFetchBom";
import Column from "./Column";
import Modal from "./Modal";

export default function BOMSheet() {
  const [dropdown, setDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    bomdata,
    loading,
    error,
    formData,
    columnData,
    fetchTableData,
    handleInputChange,
    handleColumnInputChange,
    addBomItem,
    addColumn,
    getColumnConfig,
  } = useFetchBomData(BASE_URL);

  const handleSubmit = async () => {
    const dataToSubmit = {
      ...formData,
      dynamicFields: formData.dynamicFields || {},
    };
    const success = await addBomItem(dataToSubmit);
    if (success) {
      setModalOpen(false);
    }
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSubmitColumn = async () => {
    console.log("Submitting column with data:", columnData);
    const success = await addColumn(columnData);
    if (success) {
      console.log("Column added successfully");
      setModalOpen(null);
      await fetchTableData();
    } else {
      console.error("Failed to add column");
    }
  };

  const { columns, gridTemplateColumns } = getColumnConfig();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[736px] bg-[#18191B] rounded-[16px]">
        <div className="text-[#EDEEF0]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[736px] bg-[#18191B] rounded-[16px]">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex md:w-[1250px] w-[310px]">
      <div className="max-w-[1250px] min-w-[250px] min-h-[736px] bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] md:px-[16px] px-[4px] md:py-[12px] py-[6px] space-y-[16px]">
        <div className="h-[62px]">
          <div className="flex justify-between max-w-[1250px] min-w-[250px] min-h-[736px] rounded-[16px] md:px-[16px] px-[4px] md:py-[12px] py-[6px] space-y-[16px]">
            <div className="md:space-y-[8px] space-y-0">
              <div className="sm:text-[16px] text-[14px] md:font-[600] font-[400] text-[#EDEEF0]">
                Bill of Materials (BOM)
              </div>
              <div className="sm:text-[12px] text-[11px] md:font-[400] font-[300] text-[#EDEEF0]">
                List all materials required for production, specifying color
                codes, quantities, and suppliers for accuracy.
              </div>
            </div>
            <div className="relative">
              <Button
                iconSrc="/plus-icon.svg"
                imgsize="w-[10px] h-[10px]"
                label="Add a column or row"
                labeltextsize="md:text-[12px] text-[8px]"
                containerClass="justify-center"
                onClick={handleDropdown}
                gridcols="grid-cols-12 md:gap-1 gap-0 place-content-center"
                iconColSpan="col-span-3"
                textColSpan="col-span-9"
                rounded="rounded-[8px]"
                width="md:w-[160px] w-[70px]"
                height="h-[28px]"
                buttonClass="bg-[#212225]"
              />
              {dropdown && (
                <div className="absolute mt-2 w-[150px] bg-[#212225] border border-[#272A2D] rounded-[8px] shadow-lg max-h-[228px] overflow-auto z-10 scrollbar-hide">
                  <div
                    className="p-2 text-[14px] text-[#EDEEF0] cursor-pointer hover:bg-[#2A2B2E]"
                    onClick={() => {
                      setDropdown(false);
                      setModalOpen("column");
                    }}
                  >
                    New Column
                  </div>
                  <div
                    className="p-2 text-[14px] text-[#EDEEF0] cursor-pointer hover:bg-[#2A2B2E]"
                    onClick={() => {
                      setDropdown(false);
                      setModalOpen(true);
                    }}
                  >
                    New Row
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-b-2 border-[#272A2D] h-[16px] w-full"></div>
        </div>
        <div
          style={{ gridTemplateColumns }}
          className="overflow-y-auto scrollbar-hide scrollbar-none overflow-auto h-[650px] grid gap-0 rounded-2xl md:mt-15 sm:mt-15 mt-15 lg:mt-0 xl:mt-0 bg-[#111113] md:p-2 p-1 text-center"
        >
          <Column title="Id" data={bomdata.map((_, index) => index + 1)} />

          {columns.map((column) => (
            <Column
              key={column}
              title={column}
              data={bomdata.map((item) => {
                let value = item[column];
                if (item.dynamicFields && column in item.dynamicFields) {
                  value = item.dynamicFields[column];
                }
                return typeof value === "object"
                  ? JSON.stringify(value)
                  : value;
              })}
              isImage={column.toLowerCase() === "image"}
            />
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#212225] p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-white text-xl font-bold mb-4">
              Add New BOM Item
            </h2>
            <h2 className="text-white text-[12px] font-thin mb-1">
              This is the default data for convenience,you can change the value
            </h2>
            {bomdata.length > 0 &&
              Object.keys(bomdata[0])
                .filter(
                  (field) =>
                    ![
                      "_id",
                      "createdAt",
                      "updatedAt",
                      "__v",
                      "dynamicFields",
                    ].includes(field)
                )
                .map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleInputChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full mb-3 p-2 rounded bg-[#2A2B2E] text-white"
                  />
                ))}

            {bomdata.length > 0 &&
              bomdata[0].dynamicFields &&
              Object.keys(bomdata[0].dynamicFields).map((field) => (
                <input
                  key={field}
                  name={field}
                  value={formData.dynamicFields[field] || ""}
                  onChange={handleInputChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full mb-3 p-2 rounded bg-[#2A2B2E] text-white"
                />
              ))}

            <div className="flex justify-between">
              <button
                onClick={() => setModalOpen(false)}
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
      )}
      {modalOpen === "column" && (
        <Modal
          title={"Add New Column"}
          subheading={
            "This is the default data for convenience,you can change the value"
          }
          fields={["columnName", "defaultValue"]}
          handleSubmit={handleSubmitColumn}
          onChange={handleColumnInputChange}
          formData={columnData}
          onClick={() => setModalOpen(null)}
        />
      )}
    </div>
  );
}
