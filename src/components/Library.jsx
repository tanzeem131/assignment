import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTechpack } from "../utils/techpackSlice";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const Library = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
  });

  const dispatch = useDispatch();

  const handleProduct = async () => {
    try {
      const res = await axios.get(BASE_URL + "/get-techpackCatalogue");
      dispatch(setTechpack(res.data));
      setData(res.data.items);
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
      await axios.post(`${BASE_URL}/add-techpackCatalogue`, formData);
      handleProduct();
      setModalOpen(false);
      setFormData({
        image: "",
        item: "",
      });
    } catch (error) {
      console.error("Error adding Techpack item:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-full h-[36px]">
        <div className="lg:col-span-9 md:col-span-8 sm:col-span-6 col-span-5 flex justify-start items-center">
          <div className="flex justify-start items-center">
            <div className="flex flex-wrap sm:gap-2 gap-0 items-center h-full">
              <div className="font-[500] sm:text-[18px] text-[14px] text-[#EDEEF0] w-[60px] h-[28px]">
                Library
              </div>
              <div className="max-w-[91px] h-[24px] border-[0.4px] border-[#272A2D] shadow-custom-1 shadow-custom-2 bg-[#212225] rounded-[40px] grid grid-cols-6 items-center">
                <div className="col-span-2 flex justify-center items-center rounded-full bg-[#0090FF] max-w-[22px] h-[22px]">
                  <img
                    src="/drive-icon.svg"
                    alt="Drive-Icon"
                    className="w-4 h-4"
                  />
                </div>
                <div className="col-span-4 text-[#EDEEF0] text-[12px] font-[500] flex items-center justify-start pl-2 max-w-[51px] h-[16px]">
                  {data && data.length} / 500
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-7 flex justify-between">
          <div className="flex justify-center items-center">
            <button className="bg-[#212225] sm:w-[36px] w-[24px] sm:h-[36px] h-[24px] sm:rounded-xl rounded-sm shadow-custom-1 shadow-custom-2 flex justify-center items-center">
              <img
                src="/filter-btn.svg"
                className="w-4 h-4"
                alt="Filter-Button"
              />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img src="/vertical-line.svg" className="h-[24px]"></img>
          </div>
          <div className="flex justify-center items-center">
            <Button
              iconSrc="/upload-icon.svg"
              imgsize={"w-4 h-4"}
              label="Upload"
              labeltextsize={"sm:text-[14px] text-[10px]"}
              containerClass={"col-span-2 justify-start"}
              onClick={() => setModalOpen(true)}
              gridcols={"grid-cols-6"}
              iconColSpan={"col-span-2"}
              textColSpan={"col-span-4"}
              rounded={"rounded-[12px]"}
              width={"max-w-[96px]"}
              height={"h-[36px]"}
              buttonClass={"bg-[#212225]"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Link to={"/techpack-editor"}>
              <Button
                iconSrc="/plus-icon.svg"
                imgsize={"w-4 h-4"}
                label="Create new"
                labeltextsize={"sm:text-[14px] text-[10px]"}
                containerClass={"col-span-2 justify-center"}
                onClick={() => {
                  return;
                }}
                gridcols={"grid-cols-6"}
                iconColSpan={"sm:col-span-1 col-span-2"}
                textColSpan={"sm:col-span-5 col-span-4"}
                rounded={"rounded-[12px]"}
                width={"w-full"}
                height={"h-[36px]"}
                buttonClass={"bg-blue-500"}
              />
            </Link>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#212225] p-6 rounded-lg w-[400px] shadow-lg">
            <h2 className="text-white text-xl font-bold mb-4">
              Add New Techpack Item
            </h2>

            {/* Form Fields */}
            {["image", "name"].map((field) => (
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

export default Library;
