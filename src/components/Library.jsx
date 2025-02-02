import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTechpack } from "../utils/techpackSlice";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import Modal from "./Modal";

export default function Library() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    image:
      "https://s3-alpha-sig.figma.com/img/5154/4878/e13724b0801750236f385ee133ddd835?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U4v~Orqsx9TyQSQpIduzTs-X~6BavqPFik5ZAdqhOSVE35sg3QsE4p2YOUPYsMuBYB0m7OaNK5pfA7oWaoz5P8yxz9aOQ-fSBZbqjP40eRMDg6GDQHUu3gqKvtDTHz0Jp0etUXDbIn~F~pvEBcMUxUSozEQY92Pycv1KHJvaUhX~CL7VgwymKSDxIGeWNaBP4jK8BTNAH0eGbLRkrijIOFhhSBp4J4npzBgNlzLJ2RfhCisMsLLHhRhfpwmzkW9-6DvsyEp7EfGyQcZgzDHpfbaJrhzAf0hZmkQQ9hBKIJux4UIK7iP0EVwyboq38b-VjK9BrySGajoYlnRH7iZSHA__",
    name: "Teckpack - AB456789",
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
      await axios.post(BASE_URL + "/add-techpackCatalogue", formData);
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
                <div className="col-span-4 text-[#EDEEF0] text-nowrap text-[12px] font-[500] flex items-center justify-start pl-2 w-[51px] h-[16px]">
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
                className="w-3 h-3"
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
        <Modal
          title={"Add New Techpack Item"}
          subheading={
            "This is the default data for convenience,you can change the value"
          }
          fields={["image", "name"]}
          onChange={handleInputChange}
          handleSubmit={handleSubmit}
          formData={formData}
          onClick={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
