import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useCurriculum } from "../../../hooks/useCurriculum";
import Loader from "../../../components/Loader";
import { NoData } from "../Student";

const AdminTopics = () => {
  const { handleGetTopics } = useCurriculum();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);

  const { classId, subjectId, class_level_id, name } = useLocation().state;

  const classes = {
    1: "JSS1",
    2: "JSS2",
    3: "JSS3",
    1: "JSS1",
    2: "JSS2",
    3: "JSS3"
  };

  const getTopics = () => {
    setLoading(true);
    handleGetTopics({ classId, subjectId })
      .then((res) => {
        setTopics(res.data.data.topics);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {topics.length ? (
            <div className="w-[800px]">
              <div className="flex justify-between mt-10">
                <p
                  role="button"
                  className="text-xl opacity-60 font-semibold text underline"
                  onClick={() =>
                    navigate("/admin/subject/class", { state: { id: classId } })
                  }
                >
                  subjects {" > "}{" "}
                  <span className="text-base no-underline">
                    {classes[class_level_id]} {" > "}{" "}
                  </span>
                  <span className="font-semibold !opacity-100">{name}</span>
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
              <button className="mt-10 ml-auto text-sm border border-appcolor text-appcolor font-semibold px-5 py-1.5 rounded">
                + Add New Topic
              </button>
              <div className="mt-7 grid grid-cols-4 gap-5">
                {topics.map((sub, idx) => (
                  <div key={idx} className="w-full">
                    <button
                      // onClick={() => navigate("/admin/subject/topics")}
                      className="w-full flex gap-2 mb-7 items-center"
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
            <NoData text={"No topic found for this subject"} />
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default AdminTopics;
