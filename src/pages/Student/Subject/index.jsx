import React from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";

const StudentSubject = () => {
  const navigate = useNavigate();
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
      color: "#2F9E44"
    },
    {
      title: "Agric",
      color: "#F44336"
    }
  ];

  return (
    <StudentDashboardLayout>
      <div className="">
        <div className="mt-14 flex gap-7">
          <div className="w-full">
            <p className="text-xl font-semibold">My Subjects</p>
            <div className="grid grid-cols-4 mt-4 gap-4 max-w-4xl">
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
        </div>
      </div>
    </StudentDashboardLayout>
  );
};

export default StudentSubject;
