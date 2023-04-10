import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../Layout/auth";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const NewPassword = () => {
  const navigate = useNavigate();

  // const { success } = useLocation().state; // check to make sure that success exist before continuing

  return (
    <AuthLayout>
      <div className="w-full h-full grid place-content-center">
        <p className="text-xl font-semibold ">Enter New Password</p>
        <div className="flex justify-center flex-col gap-5 bg-white w-[420px] h-[320px] rounded-md mt-3 p-10">
          <div className="grid gap-1">
            <label htmlFor="confirm_pass" className="font-medium">
              New Password
            </label>
            <input
              className="border outline-none px-3 py-2 rounded-none"
              type={"password"}
              placeholder="***********"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="v_code" className="font-medium">
              Confirm New Password
            </label>
            <input
              className="border outline-none px-3 py-2 rounded-none"
              type={"password"}
              placeholder="***********"
            />
          </div>
          <button
            onClick={() => navigate("/verify-account")}
            className="text-white bg-appcolor py-2.5 rounded mt-4"
          >
            Update Password
          </button>
        </div>
        <div className="bg-[#EBF5FF] text-sm w-[420px] py-7 flex justify-center flex-col rounded-md mt-5">
          <div className="grid w-fit mx-auto">
            <p className="font-semibold mb-2">Pass Must Contain at least:</p>
            <p className="mt-0 flex items-center gap-2">
              <IoIosCheckmarkCircleOutline color={"green"} /> 8 characters (12+
              Recommended)
            </p>
            <p className="mt-1 flex items-center gap-2">
              {" "}
              <IoIosCheckmarkCircleOutline color={"red"} />
              One Lowercase letter
            </p>
            <p className="mt-1 flex items-center gap-2">
              {" "}
              <IoIosCheckmarkCircleOutline color={"red"} /> One Uppercase letter
            </p>
            <p className="mt-1 flex items-center gap-2">
              {" "}
              <IoIosCheckmarkCircleOutline color={"red"} /> One Number
            </p>
            <p className="mt-1 flex items-center gap-2">
              {" "}
              <IoIosCheckmarkCircleOutline color={"red"} /> One Special
              Character
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default NewPassword;
