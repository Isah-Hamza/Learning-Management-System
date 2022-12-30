import React from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomSelect } from "../Student";

const AdminDashboard = () => {
  const analytics = [
    {
      title: "Total Number of Students",
      value: "8,298"
    },
    {
      title: "Total Number of Teachers",
      value: "567"
    },
    {
      title: "Total Number of Courses",
      value: "203"
    }
  ];
  return (
    <DashboardLayout>
      <div className="mt-14">
        <p className="text-xl font-semibold">Dashboard Overview</p>
        <div className="bg-white p-10 px-16 mt-3 grid grid-cols-3 gap-4">
          {analytics.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EBF5FF] rounded p-5 py-10 grid place-content-center text-center"
            >
              <p className="opacity-80">{item.title}</p>
              <p className="font-semibold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <p className="text-xl font-semibold">Analytics and Reports</p>
              <p className="opacity-70">Subject Reading Rate</p>
            </div>
            <CustomSelect
              aClass="w-28 py-1.5"
              options={[
                {
                  title: "Monthly",
                  value: "monthly"
                },

                {
                  title: "Weekly",
                  value: "weekly"
                },
                {
                  title: "Daily",
                  value: "daily"
                }
              ]}
            />
          </div>
          <div className="font-semibold mt-3 grid place-content-center border h-[400px]">
            Graph Here...
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
