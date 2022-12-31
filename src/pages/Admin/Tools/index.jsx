import { useState } from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import curDev from "../../../assets/images/curr-dev.png";
import forInv from "../../../assets/images/for-inv.png";
import virExp from "../../../assets/images/vir-exp.png";
import learnerprofile from "../../../assets/images/profile-square.png";

const AdminTools = () => {
  const [freePlan, setFreePlan] = useState(true);
  const tools = [
    {
      name: "Curriculum Developer",
      imgUrl: curDev,
      color: "#FF8F0B"
    },
    {
      name: "Forensic Investigation",
      imgUrl: forInv,
      color: "#52A6FF"
    },
    {
      name: "Virtual Experiment",
      imgUrl: virExp,
      color: "#F44336"
    },
    {
      name: "Learner's Profile",
      imgUrl: learnerprofile,
      color: "#2F9E44"
    }
  ];
  return (
    <DashboardLayout>
      <div className="mt-12">
        <p className="font-semibold text-xl">Tools</p>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {tools.map((tool, idx) => (
            <button
              className="text-white rounded-xl p-10 text-center grid gap-3 place-content-center"
              style={{ backgroundColor: tool.color }}
              key={idx}
            >
              <p>{tool.name}</p>
              <img className="mx-auto" src={tool.imgUrl} />
            </button>
          ))}
        </div>
      </div>
      {freePlan && (
        <div className="fixed inset-0 bg-black/50 grid place-content-center text-center">
          <div className="bg-[#EBF5FF] p-10 rounded-md w-fit">
            <p className="text-lg leading-tight">
              Tools not availabe in free plan. <br />
              Please upgrade.
            </p>
            <button
              onClick={() => setFreePlan(false)}
              className="mt-7 transition-all hover:bg-blue-800 duration-500 ease-in-out text-white text-sm bg-appcolor rounded-md py-2 px-4"
            >
              {" "}
              Upgrade Plan
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminTools;
