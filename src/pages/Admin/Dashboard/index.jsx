import React from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomSelect } from "../Student";
// import CanvasJSReact from '../../../canvas/canvasjs.react';

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

  // const canvasJS = CanvasJSReact.CanvasJS;
  // const canvasJSChart = CanvasJSReact.canvasJSChart;

  // const options = {
  //   animationEnabled: true,
  //   title: {
  //     text: "Nuclear Electricity Generation in US"
  //   },
  //   axisY: {
  //     title: "Net Generation (in Billion kWh)",
  //     suffix: " kWh"
  //   },
  //   data: [{
  //     type: "splineArea",
  //     xValueFormatString: "YYYY",
  //     yValueFormatString: "#,##0.## bn kW⋅h",
  //     showInLegend: true,
  //     legendText: "kWh = one kilowatt hour",
  //     dataPoints: [
  //       { x: new Date(2008, 0), y: 70.735 },
  //       { x: new Date(2009, 0), y: 74.102 },
  //       { x: new Date(2010, 0), y: 72.569 },
  //       { x: new Date(2011, 0), y: 72.743 },
  //       { x: new Date(2012, 0), y: 72.381 },
  //       { x: new Date(2013, 0), y: 71.406 },
  //       { x: new Date(2014, 0), y: 73.163 },
  //       { x: new Date(2015, 0), y: 74.270 },
  //       { x: new Date(2016, 0), y: 72.525 },
  //       { x: new Date(2017, 0), y: 73.121 }
  //     ]
  //   }]
  // }

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
