import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../Layout/auth";
import { useSecurity } from "../../hooks/useSecurity";
import { toast } from "react-toastify";

const VerifyAccount = () => {
  const navigate = useNavigate();

  const { handleVerifyOTP } = useSecurity();
  const { phone_number } = useLocation().state;
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    navigate("/new-password", { state: { success: true } });
  };

  const verifyOTP = () => {
    handleVerifyOTP({ phone_number, otp })
      .then((res) => {
        toast.success(res.data.message, { theme: "colored" });
        handleNavigate();
      })
      .catch((e) => {
        toast.error(e.response.data.data.error, { theme: "colored" });
      })
      .finally(() => setLoading(false));
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
              onChange={(e) => setOtp(e.target.value)}
              className="border outline-none px-3 py-2 rounded-none"
              type={"text"}
              placeholder="GIGABYTE"
            />
          </div>
          <p className="text-sm opacity-70">
            Please enter the code sent to your registered phone number to
            continue.
          </p>
          <button
            onClick={verifyOTP}
            className="text-white bg-appcolor py-2.5 rounded mt-4"
          >
            Validate Code
          </button>
          <p className="text-sm text-center -mt-3">
            Didn't receive code?{" "}
            <span
              // onClick={verifyOTP}
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
