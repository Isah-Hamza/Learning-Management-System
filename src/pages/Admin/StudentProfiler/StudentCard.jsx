import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

const StudentCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded flex items-center justify-between">
      <div className="rounded-full w-10 h-10 bg-[#d9d9d9]"></div>
      <div className="flex gap-10">
        <p>Awwal Muhammad</p>
        <p>SSS3</p>
      </div>
      <div className="flex items-center gap-3">
        <p>Performance</p>
        <div className="w-10 h-10">
          <CircularProgressbar
            value={40}
            text={`40%`}
            styles={buildStyles({
              pathColor: `#F08C00`,
              textColor: "#F08C00",
              trailColor: "#fff7eb",
              textSize:'30px'
            })}
          />
        </div>
      </div>
      <button
        onClick={() => navigate("/admin/profiler/student-profile")}
        className="text-[13px] px-5 py-2 items-start rounded border border-appcolor text-appcolor font-medium"
      >
        View Activity
      </button>
    </div>
  );
};

export default StudentCard;
