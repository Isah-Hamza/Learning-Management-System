import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useCurriculum } from "../../../hooks/useCurriculum";
import Loader from "../../../components/Loader";

const AdminSubject = () => {
  const { handleGetAllClass } = useCurriculum();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  const getAllClass = () => {
    setLoading(true);
    handleGetAllClass()
      .then((res) => {
        setSubjects(res.data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllClass();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
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
            {subjects?.map((sub, idx) => (
              <div
                key={idx}
                className=" flex flex-col text-center bg-white rounded p-5"
              >
                <div className="grid grid-cols-[.1fr,1fr] mb-7 items-center">
                  <input className="" type={"checkbox"} />
                  <p className="font-semibold text-lg">{sub.name} </p>
                </div>
                <p className="mb-3">{sub.subjects.length} Subjects</p>
                <button
                  onClick={() =>
                    navigate("/admin/subject/class", {
                      state: { id: sub.id }
                    })
                  }
                  className="border border-[coral] text-sm font-semibold py-2 px-5 rounded"
                >
                  View Class
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminSubject;
