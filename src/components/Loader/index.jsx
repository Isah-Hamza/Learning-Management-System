import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="h-screen text-center flex justify-center items-center flex-col">
      <ImSpinner2 className="text-center animate-spin " size={20} />
      loading...
    </div>
  );
};

export default Loader;
