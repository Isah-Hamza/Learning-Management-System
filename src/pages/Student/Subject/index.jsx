import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import { useStudent } from "../../../hooks/useStudent";
import Loader from "../../../components/Loader";
import { useCurriculum } from "../../../hooks/useCurriculum";
import { useUser } from "../../../hooks/useUser";

const StudentSubject = () => {
  const navigate = useNavigate();
  const colors = ["#F08C00", "#0072EA", "#2F9E44", "#F44336"];

  const { handleGetSingleClass } = useCurriculum();
  const { handleGetUserLevel } = useUser();
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [userLevelId, setUserLevelId] = useState("");

  const getSingleClass = ({ id }) => {
    setLoading(true);
    console.log(userLevelId);
    handleGetSingleClass({ id })
      .then((res) => {
        setSubjects(res.data.data.subjects);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const getClassLevel = () => {
    setLoading(true);
    handleGetUserLevel()
      .then((res) => {
        setUserLevelId(res.data.classLevel.id);
        getSingleClass({ id: res.data.classLevel.id });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getClassLevel();
  }, []);

  return (
    <StudentDashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="mt-14 flex gap-7">
            <div className="w-full">
              <p className="text-xl font-semibold">My Subjects</p>
              <div className="grid grid-cols-4 mt-4 gap-4 max-w-4xl">
                {subjects?.map((subject, idx) => (
                  <div
                    style={{ backgroundColor: colors[idx % colors.length] }}
                    key={idx}
                    className="text-center w-42 min-h-24 rounded p-5 bg-white"
                  >
                    <p className="text-white font-semibold opacity-90">
                      {subject.name}
                    </p>
                    <button
                      onClick={() =>
                        navigate(`/student/subject/${subject.name}`, {
                          state: { subjectId: subject.id, classId: userLevelId }
                        })
                      }
                      className="text-white border px-4 py-1 rounded mt-8"
                    >
                      Start Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </StudentDashboardLayout>
  );
};

export default StudentSubject;
