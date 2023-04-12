import React, { useState } from "react";
import TeacherDashboardLayout from "../../../Layout/TeacherDashboardLayout";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const colors = ["#F08C00", "#0072EA", "#2F9E44", "#F44336"];
  const analytics = [
    {
      title: "Total Number of Students",
      value: 20
    },
    {
      title: "Total Number of Subjects",
      value: 12
    }
  ];

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
      name: "Phsics",
      id: 3
    },
    {
      name: "Chemistry",
      id: 4
    },
  ]);

  return (
    <div>
      <TeacherDashboardLayout>
        <div className="mt-5">
          <div className="flex gap-4">
            <p className="text-xl font-semibold">My Students Information</p>
            <div className="bg-blue-200 text-base px-3 py-1">JSS2</div>
          </div>
          <div className="bg-white p-10 px-16 mt-6 grid grid-cols-2 w-fit gap-4">
            {analytics.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#EBF5FF] rounded p-5 py-10 grid place-content-center text-center w-80"
              >
                <p className="opacity-80">{item.title}</p>
                <p className="font-semibold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="w-full mt-20">
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
      </TeacherDashboardLayout>
    </div>
  );
};

export default TeacherDashboard;
