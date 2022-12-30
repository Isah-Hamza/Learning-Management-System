import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";

const AdminSubject = () => {
  const navigate = useNavigate();
  const subjects = [
    {
      class: "JSS1",
      subjects: 40
    },
    {
      class: "JSS2",
      subjects: 24
    },
    {
      class: "JSS3",
      subjects: 62
    },
    {
      class: "SSS1",
      subjects: 104
    },
    {
      class: "SSS2",
      subjects: 77
    },
    {
      class: "SSS3",
      subjects: 51
    }
  ];

  return (
    <DashboardLayout>
      <div className="w-[800px]">
        <div className="flex justify-between mt-10">
          <p className="text-xl font-semibold text">Subjects</p>
          <div className="flex items-center gap-3">
            <input className="py-2 bg-transparent outline-none border text-sm p-3 rounded w-[300px]" />
            <button className="border px-5 py-1.5 border-appcolor">
              Filter
            </button>
            <button>
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        </div>
        <button className="mt-10 ml-auto text-sm border border-appcolor text-appcolor font-semibold px-5 py-1.5 rounded">
          + Add New Class
        </button>
        <div className="mt-7 grid grid-cols-4 gap-5">
          {subjects.map((sub, idx) => (
            <div
              key={idx}
              className=" flex flex-col text-center bg-white rounded p-5"
            >
              <div className="grid grid-cols-[.1fr,1fr] mb-7 items-center">
                <input className="" type={"checkbox"} />
                <p className="font-semibold text-lg">{sub.class} </p>
              </div>
              <p className="mb-3">{sub.subjects} Subjects</p>
              <button onClick={()=>navigate('/admin/subject/class')} className="border border-[coral] text-sm font-semibold py-2 px-5 rounded">
                View Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminSubject;
