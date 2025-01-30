import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBom } from "../utils/bomSlice";
import { BASE_URL } from "../utils/config";
import Column from "./Column";

const BOMSheet = () => {
  const [dropdown, setDropdown] = useState(false);
  const [bomdata, setBomData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    item: "",
    description: "",
    quantity: "",
    quality: "",
    colorCode: "",
    supplier: "",
  });

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const dispatch = useDispatch();

  const handleProduct = async () => {
    try {
      const res = await axios.get(BASE_URL + "/get-bom");
      dispatch(setBom(res.data));
      setBomData(res.data.items);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleProduct();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${BASE_URL}/add-bom`, formData);
      handleProduct();
      setModalOpen(false);
      setFormData({
        image: "",
        item: "",
        description: "",
        quantity: "",
        quality: "",
        colorCode: "",
        supplier: "",
      });
    } catch (error) {
      console.error("Error adding BOM item:", error);
    }
  };

  return (
    <div>
      <div className="w-[1150px] h-[736px] bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] px-[16px] py-[12px] space-y-[16px]">
        <div className="h-[62px]">
          <div className="flex justify-between">
            <div className="space-y-[8px]">
              <div className="text-[16px] font-[600] text-[#EDEEF0]">
                Bill of Materials (BOM)
              </div>
              <div className="text-[12px] font-[400] text-[#EDEEF0]">
                List all materials required for production, specifying color
                codes, quantities, and suppliers for accuracy.
              </div>
            </div>
            <div className="relative">
              <Button
                iconSrc="/plus-icon.svg"
                imgsize={"w-[10px] h-[10px]"}
                label="Add a column or row"
                labeltextsize={"text-[12px]"}
                containerClass={"justify-center"}
                onClick={handleDropdown}
                gridcols={
                  "grid-cols-12 gap-1 place-content-center justify-self-center"
                }
                iconColSpan={"col-span-2"}
                textColSpan={"col-span-10"}
                rounded={"rounded-[8px]"}
                width={"w-[150px]"}
                height={"h-[36px]"}
                buttonClass={"bg-[#212225]"}
              />
              {dropdown && (
                <div className="absolute mt-2 w-[150px] bg-[#212225] border border-[#272A2D] rounded-[8px] shadow-lg max-h-[228px] overflow-auto z-10 scrollbar-hide">
                  <div
                    className="p-2 text-[14px] text-[#EDEEF0] cursor-pointer hover:bg-[#2A2B2E]"
                    onClick={() => {
                      setDropdown(false);
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
        {/* <div className="h-[90%] grid grid-cols-7 gap-0 w-full rounded-2xl bg-[#111113] p-2 overflow-y-auto scrollbar-hide scrollbar-none">
          <Column
            title="Image"
            data={bomdata.map((item) => item.image)}
            isImage={true}
          />
          <Column
            title="Image"
            data={bomdata.map((item) => item.image)}
            isImage={true}
          />
          <Column
            title="Image"
            data={bomdata.map((item) => item.image)}
            isImage={true}
          />
          <Column title="Item" data={bomdata.map((item) => item.item)} />
          <Column
            title="Description"
            data={bomdata.map((item) => item.description)}
          />
          <Column
            title="Quantity"
            data={bomdata.map((item) => item.quantity)}
          />
          <Column title="Quality" data={bomdata.map((item) => item.quality)} />
          <Column
            title="Color Code"
            data={bomdata.map((item) => item.colorCode)}
          />
          <Column
            title="Supplier"
            data={bomdata.map((item) => item.supplier)}
          />
        </div> */}
        <div className="h-[90%] flex flex-row justify-evenly gap-0 w-full rounded-2xl bg-[#111113] p-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <Column title="Id" data={bomdata.map((item) => item.id)} />
          <Column
            title="Image"
            data={bomdata.map((item) => item.image)}
            isImage={true}
          />
          <Column title="Item" data={bomdata.map((item) => item.item)} />
          <Column
            title="Description"
            data={bomdata.map((item) => item.description)}
          />
          <Column
            title="Quantity"
            data={bomdata.map((item) => item.quantity)}
          />
          <Column title="Quality" data={bomdata.map((item) => item.quality)} />
          <Column
            title="Color Code"
            data={bomdata.map((item) => item.colorCode)}
          />
          <Column
            title="Supplier"
            data={bomdata.map((item) => item.supplier)}
          />
        </div>
      </div>

      {/* Modal for Adding BOM Entry */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#212225] p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-white text-xl font-bold mb-4">
              Add New BOM Item
            </h2>

            {/* Form Fields */}
            {[
              "image",
              "item",
              "description",
              "quantity",
              "quality",
              "colorCode",
              "supplier",
            ].map((field) => (
              <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full mb-3 p-2 rounded bg-[#2A2B2E] text-white"
              />
            ))}

            {/* Buttons */}
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
    </div>
  );
};

export default BOMSheet;
