import React, { useEffect, useState } from "react";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import book from "../../../assets/images/book.svg";
import { useCurriculum } from "../../../hooks/useCurriculum";
import { getSingleClass } from "../../../services/curriculum";
import Loader from "../../../components/Loader";
import { NoData } from "../../Admin/Student";
import { useUser } from "../../../hooks/useUser";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const { handleGetUserLevel } = useUser();
  const { handleGetSingleClass } = useCurriculum();
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const courseWithProgress = [
    {
      title: "English",
      status: "In progress",
      percentageCompleted: 50
    },
    {
      title: "Mathematics",
      status: "In progress",
      percentageCompleted: 75
    }
  ];
  const colors = ["#F08C00", "#0072EA", "#2F9E44", "#F44336"];

  const dummyAssignments = [
    {
      title: "Mathematics",
      color: "#F08C00"
    },
    {
      title: "English",
      color: "#0072EA"
    }
  ];

  const getSingleClass = ({ id }) => {
    setLoading(true);
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
        setId(res.data.classLevel.id);
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
        <>
          {subjects.length ? (
            <div className="mt-14">
              <p className="text-xl font-semibold">My Subject Progress</p>
              <div className="grid grid-cols-2 gap-4 max-w-[800px] mt-5">
                {courseWithProgress.map((course, idx) => (
                  <div
                    key={idx}
                    className="bg-white h-32 rounded-md flex items-center px-5"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-between">
                        <div className="flex justify-center bg-[#fff7eb] rounded items-center w-14 h-14">
                          <img src={book} />
                        </div>
                        <div className="flex flex-col justify-center ml-3">
                          <p className="font-semibold">{course.title}</p>
                          <p className="-mt-1 opacity-70">{course.status}</p>
                        </div>
                      </div>
                      <div className="w-16 h-16">
                        <CircularProgressbar
                          value={course.percentageCompleted}
                          text={`${course.percentageCompleted}%`}
                          styles={buildStyles({
                            pathColor: `#F08C00`,
                            textColor: "#F08C00",
                            trailColor: "#fff7eb"
                          })}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-14 flex gap-7">
                <div className="w-3/5">
                  <p className="text-xl font-semibold">My Subjects</p>
                  <div className="grid grid-cols-3 mt-4 gap-3">
                    {subjects.map((subject, idx) => (
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
                              state: { subjectId: subject.id, classId: id }
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
                <div className="w-2/5">
                  <p className="text-xl font-semibold">My Assignments</p>
                  <div className="grid grid-cols-2 mt-4 gap-3">
                    {dummyAssignments.map((subject, idx) => (
                      <div
                        style={{ backgroundColor: subject.color }}
                        key={idx}
                        className="text-center w-42 min-h-24 rounded p-5 bg-white"
                      >
                        <p className="text-white font-semibold opacity-90">
                          {subject.title}
                        </p>
                        <button className="text-white border px-4 py-1 rounded mt-8">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NoData />
          )}
        </>
      )}
    </StudentDashboardLayout>
  );
};

export default StudentDashboard;
