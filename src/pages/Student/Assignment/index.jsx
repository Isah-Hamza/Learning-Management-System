import React from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";

const StudentAssignment = () => {
  const navigate = useNavigate();
  const dummyAssignments = [
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
  ];

  return (
    <StudentDashboardLayout>
      <div className="">
        <div className="mt-14 flex gap-7">
          <div className="w-full">
            <p className="text-xl font-semibold">Your Assignments</p>
            <div className="grid grid-cols-4 mt-4 gap-4 max-w-4xl">
              {dummyAssignments.map((assignment, idx) => (
                <div
                  style={{ backgroundColor: assignment.color }}
                  key={idx}
                  className="text-center w-42 min-h-24 rounded p-5 bg-white"
                >
                  <p className="text-white font-semibold opacity-90">
                    {assignment.title}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/student/assignment/${assignment.title}`)
                    }
                    className="text-white border px-4 py-1 rounded mt-8"
                  >
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

export default StudentAssignment;
