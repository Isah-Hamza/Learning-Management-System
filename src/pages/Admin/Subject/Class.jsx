import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useCurriculum } from "../../../hooks/useCurriculum";
import Loader from "../../../components/Loader";
import { NoData } from "../Student";

const AdminClass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleGetSingleClass } = useCurriculum();

  const { id } = useLocation().state;

  const [classs, setClasss] = useState([]);

  const getSingleClass = () => {
    setLoading(true);
    handleGetSingleClass({ id })
      .then((res) => {
        setClasss(res.data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const handleAddSubject = () => {
    navigate("/admin/subject/add-new");
  };

  useEffect(() => {
    getSingleClass();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[800px]">
          <div className="flex justify-between mt-10">
            <p
              role="button"
              className="text-xl font-semibold text underline"
              onClick={() => navigate("/admin/subjects")}
            >
              subjects {" > "}{" "}
              <span className="text-base no-underline">{classs.name}</span>
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
          {classs?.subjects?.length ? (
            <div>
              <button
                onClick={handleAddSubject}
                className="mt-10 ml-auto text-sm border border-appcolor text-appcolor font-semibold px-5 py-1.5 rounded"
              >
                + Add New Subject
              </button>
              <div className="mt-7 grid grid-cols-4 gap-5">
                {classs?.subjects?.map((sub, idx) => (
                  <div key={idx} className="w-full">
                    <button
                      onClick={() =>
                        navigate("/admin/subject/topics", {
                          state: {
                            classId: id,
                            subjectId: sub.id,
                            class_level_id: sub.class_level_id,
                            name: sub.name
                          }
                        })
                      }
                      className="flex w-full gap-2 mb-7 items-center"
                    >
                      <input className="" type={"checkbox"} />
                      <p className="flex-1 text-left text-base bg-white py-2 px-3 rounded font-semibold">
                        {sub.name}{" "}
                      </p>
                    </button> 
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <NoData text={"Add new subject"} url={"/admin/subject/add-new"} />
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminClass;
