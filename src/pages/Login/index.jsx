import React from "react";
import AuthLayout from "../../Layout/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      <div className="w-full h-full grid place-content-center">
        <p className="text-xl font-semibold ">User Login Portal</p>
        <div className="flex justify-center flex-col gap-5 bg-white w-[420px] h-[450px] rounded-md mt-3 p-10">
          <div className="grid">
            <label htmlFor="user_id" className="font-medium">
              User ID
            </label>
            <input
              className="border outline-none px-3 py-2 rounded-none"
              type={"text"}
              placeholder="M1500600"
            />
          </div>
          <div className="grid">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              className="border outline-none px-3 py-2 rounded-none"
              type={"password"}
              placeholder="***********"
            />
          </div>
          <div className="flex items-center gap-2 -mt-3 ">
            <input
              id="save_password"
              name="save_password"
              className="text-appcolor border border-r-current"
              type={"checkbox"}
            />
            <label htmlFor="save_password">Save Password</label>
          </div>
          <button className="text-white bg-appcolor py-2.5 rounded mt-4">
            Login into Account
          </button>
          <p className="text-sm text-center -mt-3">
            Forgot password ?{" "}
            <span
              onClick={handleNavigate}
              role={"button"}
              className="text-appcolor font-semibold"
            >
              Request new one here
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
