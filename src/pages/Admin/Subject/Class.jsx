import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";

const AdminClass = () => {
  const navigate = useNavigate();
  const subjects = [
    "English",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Agric. Science",
    "Futh. Math",
    "Literature Sci.",
    "Computer Sci.",
    "Religious Study"
  ];

  const handleAddSubject = () => {
    navigate('/admin/subject/add-new');
  };

  return (
    <DashboardLayout>
      <div className="w-[800px]">
        <div className="flex justify-between mt-10">
          <p
            role="button"
            className="text-xl font-semibold text underline"
            onClick={() => navigate("/admin/subjects")}
          >
            subjects {" > "}{" "}
            <span className="text-base no-underline">SSS1</span>
          </p>
          <div className="flex items-center gap-3">
            <input className="py-2 bg-transparent outline-none border text-sm p-3 rounded w-[300px]" />
            <button className="border px-5 py-1.5 border-appcolor">
              Filter
            </button>
            <button>
              <RiDeleteBin6Line color="red" size={20} />
            </button>
          </div>
        </div>
        <button
          onClick={handleAddSubject}
          className="mt-10 ml-auto text-sm border border-appcolor text-appcolor font-semibold px-5 py-1.5 rounded"
        >
          + Add New Subject
        </button>
        <div className="mt-7 grid grid-cols-4 gap-5">
          {subjects.map((sub, idx) => (
            <div key={idx} className="">
              <button
                onClick={() => navigate("/admin/subject/topics")}
                className="flex gap-2 mb-7 items-center"
              >
                <input className="" type={"checkbox"} />
                <p className="text-base bg-white py-2 px-3 rounded font-semibold">
                  {sub}{" "}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminClass;
