import { useState } from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ActivityCard from "../../../components/ActivityCard";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomSelect } from "../Student";

const ForensicInvestigator = () => {
  const paginations = ["1", "2", "3", "4", "5"];
  const [activities, setActivities] = useState([1, 2, 3, 4, 5, 6, 7]);
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="mt-14 flex flex-col gap-7">
        <div className="w-full flex justify-between items-end">
          <p className="text-xl font-semibold">
            Forensic Investigator (Activity Log)
          </p>
          <div className="flex items-center gap-2">
            <button className="max-h-[52px] font-semibold border text-appcolor flex items-center gap-2 py-2.5 px-5 text-sm rounded">
              <IoMdCloudDownload size={18} />
              Download Log
            </button>{" "}
            <CustomSelect
              aClass={"w-28 py-1 max-h-[50px] -mt-3"}
              options={[
                { value: "", title: "All Month" },
                { value: "2020", title: "2020" },
                { value: "2021", title: "2021" },
                { value: "2022", title: "2022" }
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5 max-w-[950px]">
          {activities.map((item, idx) => (
            <ActivityCard
              key={idx}
              item={item}
              clickHanldler={() => navigate("/admin/forensic-investigator/100")}
            />
          ))}
        </div>
        <div className="mt-auto">
          <div className="mt-5 flex items-center justify-between gap-10 text-sm">
            <div className="flex gap-3">
              {paginations.map((item, idx) => (
                <button
                  className=" w-10 h-10 shadow font-semibold rounded-full bg-white grid place-content-center"
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 ">
              <button className="font-semibold text-appcolor border border-appcolor py-1.5 px-5 text-sm rounded">
                Prev
              </button>{" "}
              <button className="font-semibold bg-appcolor text-white py-1.5 px-5 text-sm rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ForensicInvestigator;
