import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBom } from "../utils/bomSlice";
import { BASE_URL } from "../utils/config";
import Column from "./Column";

export default function BOMSheet() {
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
    cost: "",
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
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(BASE_URL + "/add-bom", formData);
      setModalOpen(false);
      setFormData({
        image: "",
        item: "",
        description: "",
        quantity: "",
        quality: "",
        colorCode: "",
        supplier: "",
        cost: "",
      });
    } catch (error) {
      console.error("Error adding BOM item:", error);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [modalOpen]);

  return (
    <>
      <div className="max-w-[1150px] min-w-[250px] min-h-[736px] bg-[#18191B] shadow-custom-1 shadow-custom-1 rounded-[16px] md:px-[16px] px-[4px] md:py-[12px] py-[6px] space-y-[16px]">
        <div className="h-[62px]">
          <div className="flex justify-between">
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
          style={{
            gridTemplateColumns: "0.3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          }}
          className="h-[90%] grid gap-0 rounded-2xl md:mt-15 sm:mt-15 mt-15 lg:mt-0 xl:mt-0 bg-[#111113] md:p-2 p-1 overflow-y-auto scrollbar-hide scrollbar-none"
        >
          <Column title="Id" data={bomdata.map((_, index) => index + 1)} />
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
          <Column title="cost" data={bomdata.map((item) => item.cost)} />
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#212225] p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-white text-xl font-bold mb-4">
              Add New BOM Item
            </h2>
            {[
              "image",
              "item",
              "description",
              "quantity",
              "quality",
              "colorCode",
              "supplier",
              "cost",
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
    </>
  );
}
