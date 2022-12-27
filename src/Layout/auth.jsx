import React from "react";
import AuthAsideDesign from "../components/AuthAsideDesign";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-bg">
      <div className="w-8/12 h-full">{children}</div>
      <AuthAsideDesign />
    </div>
  );
};

export default AuthLayout;
