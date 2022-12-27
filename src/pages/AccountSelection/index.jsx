import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layout/auth";

const AccountSelection = () => {
  const navigate = useNavigate();
  function handleSelectAccount() {
    navigate("/login");
  }

  return (
    <AuthLayout>
      <div className="w-full h-full grid place-content-center">
        <p className="text-xl font-semibold ">User Account Selection</p>
        <div className="grid place-content-center bg-white w-[400px] h-[300px] rounded-md mt-3 pb-10 p-7">
          <p className="text-center text-2xl font-semibold">Who Are You?</p>
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              onClick={handleSelectAccount}
              className=" w-48 text-sm text-appcolor px-6 py-2.5 rounded border border-current"
            >
              I'm a Student
            </button>
            <button
              onClick={handleSelectAccount}
              className="w-48 text-sm text-appcolor px-6 py-2.5 rounded border border-current"
            >
              I'm a Teacher
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AccountSelection;
