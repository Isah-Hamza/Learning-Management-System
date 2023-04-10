import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Layout/auth";
import { useSecurity } from "../../hooks/useSecurity";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();

  const { handleRequestOTP } = useSecurity();
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);

  const requestOTP = () => {
    setLoading(true);
    handleRequestOTP({ phone_number: phoneNumber })
      .then((res) => {
        navigate("/verify-account", { state: { phone_number: phoneNumber } });
        toast.success("OTP sent", { theme: "colored" });
      })
      .catch((e) => {
        console.log(e.mesage);
        toast.error(e.response.data.data.error, { theme: "colored" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthLayout>
      <div className="w-full h-full grid place-content-center">
        <p className="text-xl font-semibold ">Reset Password</p>
        <div className="flex justify-center flex-col gap-5 bg-white w-[420px] h-[350px] rounded-md mt-3 p-10">
          <div className="grid gap-1">
            <label htmlFor="v_code" className="font-medium">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border outline-none px-3 py-2 rounded-none"
              type={"text"}
              placeholder="+2348143852518"
            />
          </div>
          <p className="text-sm opacity-60">
            You will receive a confirmation code in your registered number. The
            code expires in 10mins.
          </p>
          <button
            disabled={loading}
            onClick={() => {
              requestOTP();
            }}
            className="disabled:bg-opacity-60 text-white bg-appcolor py-2.5 rounded mt-4"
          >
            {loading ? "Getting OTP..." : " Send Reset Code"}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
