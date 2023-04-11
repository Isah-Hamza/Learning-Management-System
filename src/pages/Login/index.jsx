import React, { useState } from "react";
import AuthLayout from "../../Layout/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { CustomPasswordInput } from "../Admin/Student";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [data, setData] = useState({ username: null, password: null });
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    navigate("/reset-password");
  };

  const login = () => {
    setLoading(true);
    handleLogin(data)
      .then((res) => {
        window.localStorage.setItem("username", res.data.data.username);
        window.localStorage.setItem("token", res.data.data.token);
        toast.success("Logged In Successfully", { theme: "colored" });
        if (res.data.data.role === "student")
          navigate("/student/dashboard", { replace: true });
        if (res.data.data.role === "admin")
          navigate("/admin/dashboard", { replace: true });
        console.log(res);
      })
      .catch((err) => {
        toast.error("Invalid username and / or password", { theme: "colored" });
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = () => {
    console.log(data);
    login();
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
              onChange={(e) => {
                setData((prev) => ({ ...prev, username: e.target.value }));
              }}
            />
          </div>
          <div className="grid">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <CustomPasswordInput
              placeholder="***********"
              onChange={(e) => {
                setData((prev) => ({ ...prev, password: e.target.value }));
              }}
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
          <button
            onClick={handleSubmit}
            type="button"
            disabled={loading || !data.password || !data.username}
            className="disabled:bg-opacity-60 text-white bg-appcolor py-2.5 rounded mt-4"
          >
            {loading ? "Logging In..." : "Login into Account"}
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
