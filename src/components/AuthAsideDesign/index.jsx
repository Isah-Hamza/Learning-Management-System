import React from "react";
import logo from "../../assets/images/image 1 (1).png";

const AuthAsideDesign = () => {
  return (
    <div className="bg-appcolor text-white w-4/12 h-full flex flex-col text-center">
      <div className="flex flex-col justify-center flex-1">
        <img className="mx-auto w-40" src={logo} alt="logo" />
        <p className="font-bold text-5xl mt-2">
          <span className="tracking-wider">St. John</span>
          <br /> Central <br /> <span className="tracking-wider">Academy</span>
        </p>
        <p className="mt-6">Learning Management System</p>
      </div>
      <p className="pb-2">copyright, 2022</p>
    </div>
  );
};

export default AuthAsideDesign;
