import React from "react";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import book from "../../../assets/images/book.svg";

const StudentDashboard = () => {
  const navigate = useNavigate();
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
  const dummySubjects = [
    {
      title: "Mathematics",
      color: "#F08C00"
    },
    {
      title: "English",
      color: "#0072EA"
    },
    {
      title: "Physics",
      color: "#2F9E44"
    },
    {
      title: "Chemistry",
      color: "#F44336"
    },
    {
      title: "Biology",
      color: "#F08C00"
    },
    {
      title: "Agric",
      color: "#0072EA"
    }
  ];

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

  return (
    <StudentDashboardLayout>
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
              {dummySubjects.map((subject, idx) => (
                <div
                  style={{ backgroundColor: subject.color }}
                  key={idx}
                  className="text-center w-42 min-h-24 rounded p-5 bg-white"
                >
                  <p className="text-white font-semibold opacity-90">
                    {subject.title}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/student/subject/${subject.title}`)
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
    </StudentDashboardLayout>
  );
};

export default StudentDashboard;
