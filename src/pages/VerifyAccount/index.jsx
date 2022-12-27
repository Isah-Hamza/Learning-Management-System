import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layout/auth";

const VerifyAccount = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      <div className="w-full h-full grid place-content-center">
        <p className="text-xl font-semibold ">Verify Account</p>
        <div className="flex justify-center flex-col gap-5 bg-white w-[420px] h-[350px] rounded-md mt-3 p-10">
          <div className="grid gap-1">
            <label htmlFor="v_code" className="font-medium">
              Verification Code
            </label>
            <input
              className="border outline-none px-3 py-2 rounded-none"
              type={"text"}
              placeholder="GIGABYTE"
            />
          </div>
          <p className="text-sm opacity-70">
            Please enter the code sent to your registered phone number to
            continue.
          </p>
          <button className="text-white bg-appcolor py-2.5 rounded mt-4">
            Validate Code
          </button>
          <p className="text-sm text-center -mt-3">
            Didn't receive code?{" "}
            <span
              onClick={handleNavigate}
              role={"button"}
              className="text-appcolor font-semibold"
            >
              Resend verification code
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyAccount;
