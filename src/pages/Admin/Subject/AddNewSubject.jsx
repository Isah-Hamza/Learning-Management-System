import React from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomInput, CustomSelect } from "../Student";

const AddNewSubject = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <form className="mt-11 w-[650px]">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add New Subject</p>
          <button type="button"
            className="hover:font-semibold transition-all duration-500 ease-linear flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack />
            Go Back
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <CustomInput type="name" name="name" label="Name of Subject" />
          <CustomSelect
            name="class"
            label="Class"
            options={[
              { title: "SSS1", value: "ss1" },
              { title: "SSS2", value: "ss2" },
              { title: "SSS3", value: "ss3" }
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-6">
          <CustomSelect
            name="visibility"
            label="Visibility"
            options={[
              { title: "Shown", value: "shown" },
              { title: "Hidden", value: "hidden" }
            ]}
          />
          <CustomSelect
            name="teacher"
            label="Teacher"
            options={[
              { title: "Mr. Teacher A", value: "mr_a" },
              { title: "Mr. Teacher B", value: "mr_b" },
              { title: "Mr. Teacher C", value: "mr_c" }
            ]}
          />
        </div>
        <div className="mt-7">
          <p className="text-sm font-semibold mb-2">Upload Subject Folder</p>
          <div className="text-center text-sm border-2 border-dashed w-full h-52 grid place-content-center">
            <button type="button" className="text-appcolor mb-1 px-5 py-2 rounded-md">
              + Select Folder
            </button>
            <p className="text-xs">or drag and drop folder here.</p>
          </div>
        </div>
        <button type="button" className="bg-appcolor ml-auto mt-10 text-white text-sm flex items-center gap-2 px-5 py-2 rounded-md">
          <BsCloudArrowUp size={20} /> Upload Subject
        </button>
      </form>
    </DashboardLayout>
  );
};

export default AddNewSubject;
