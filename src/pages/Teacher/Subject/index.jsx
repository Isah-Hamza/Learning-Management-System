import React, { useState } from "react";
import TeacherDashboardLayout from "../../../Layout/TeacherDashboardLayout";
import { useNavigate } from "react-router-dom";

const TeacherSubject = () => {
  const navigate = useNavigate();
  const colors = ["#F08C00", "#0072EA", "#2F9E44", "#F44336"];

  const [subjects, setSubjects] = useState([
    {
      name: "Mathematics",
      id: 1
    },
    {
      name: "English Lang.",
      id: 2
    },
    {
      name: "Physics",
      id: 3
    },
    {
      name: "Chemistry",
      id: 4
    }
  ]);

  return (
    <TeacherDashboardLayout>
      <div className="w-full mt-10 max-w-[1000px]">
        <div className="mb-4 max-w-[900px] flex items-baseline justify-between">
          <p className="text-xl font-semibold">My Subjects</p>
          <button onClick={() => navigate('/teacher/new-subject')} className="text-white border px-4 py-1.5 rounded mt-8 bg-appcolor">
            + Add New Subject
          </button>
        </div>
        <div className="grid grid-cols-4 mt-6 gap-4 max-w-4xl">
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
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </TeacherDashboardLayout>
  );
};

export default TeacherSubject;
