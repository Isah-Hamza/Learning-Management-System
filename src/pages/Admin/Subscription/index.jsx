import React from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";

const Subscription = () => {
  return (
    <DashboardLayout>
      <div className="mt-12">
        <p className="text-xl font-semibold">Subscription Plans</p>
        <div className="grid gap-6 grid-cols-2 mt-4 max-w-4xl">
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col">
            <p className="text-lg font-semibold ">Free Plan (Freemium)</p>
            <div className="flex items-center gap-3 mt-3">
              <p className="font-medium">Price:</p>
              <p className="font-semibold text-appcolor">N0.00</p>
            </div>
            <div className="flex flex-col mt-3">
              <p className="font-medium">Features:</p>
              <li className="list-disc ml-2 text-sm font-medium">LIMITED STUDENT ACCESS</li>
            </div>
            <button className="mt-auto w-fit border border-current text-appcolor text-sm px-5 rounded-md py-2">
              Current Plan
            </button>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <p className="text-lg font-semibold ">Premium Plan</p>
            <div className="flex items-center gap-3 mt-3">
              <p className="font-medium">Price:</p>
              <p className="font-medium text-appcolor">N20,000.00</p>
            </div>
            <div className="flex flex-col mt-3">
              <p className="font-medium">Features:</p>
              <ul className="list-disc ml-7 font-medium text-sm">
                <li>UNLIMITED STUDENT ACCESS</li>
                <li>ACCESS TO ACADEMIC TOOLS</li>
                <li>FUTURE UPDATES</li>
              </ul>
            </div>
            <button className="border border-current text-appcolor text-sm px-5 rounded-md py-2 mt-6">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
