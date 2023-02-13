import React, { useEffect, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import DashboardLayout from "../../../Layout/dashboardLayout";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";

const Support = ({ userType }) => {
  const questions = [
    {
      qst: "How do I update the operating system on my device?",
      ans: "Lorem ipsum dolor sit amet consectetur. Leo et faucibus ante dapibus consectetur duis. Orci amet in arcu faucibus aenean ornare ullamcorper nunc lectus."
    },
    {
      qst: "How do I resolve error messages or problems with software?",
      ans: "Lorem ipsum dolor sit amet consectetur. Leo et faucibus ante dapibus consectetur duis. Orci amet in arcu faucibus aenean ornare ullamcorper nunc lectus."
    },
    {
      qst: "How do I update the operating system on my device?",
      ans: "Lorem ipsum dolor sit amet consectetur. Leo et faucibus ante dapibus consectetur duis. Orci amet in arcu faucibus aenean ornare ullamcorper nunc lectus."
    },
    {
      qst: "How do I resolve error messages or problems with software?",
      ans: "Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)?"
    },
    {
      qst: "How do I update the operating system on my device?",
      ans: "Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)?"
    }
  ];
  const [activeQst, setActiveQst] = useState(-1);

  const handleShow = (idx) => {
    if (activeQst === idx) {
      setActiveQst(-1);
      return;
    }
    setActiveQst(idx);
  };

  useEffect(() => {
    console.log("==>", activeQst);
  }, [activeQst]);

  return userType === "admin" ? (
    <DashboardLayout>
      <div className="mt-14">
        <p className="text-xl font-semibold">Help and Support</p>
        <div className="flex items-start gap-16">
          <div className="mt-8 w-[36rem]">
            <p className="opacity-60 font-semibold">
              Frequently Asked Questions
            </p>
            <div className="grid gap-5 mt-3 ">
              {questions.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => handleShow(idx)}
                    className="bg-white px-5 py-2 flex items-center justify-between w-full"
                  >
                    <p>{item.qst}</p>
                    <BsCaretDownFill />
                  </button>
                  {activeQst === idx && (
                    <p className="pr-5 px-5 text-sm text-black/60 rounded-b-lg py-3 bg-white">
                      {item.ans}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#EBF5FF] p-10 mt-14">
            <button className="text-white text-sm bg-appcolor hover:bg-blue-800 rounded-md px-5 py-2 transition-all duration-500 ease-in-out ">
              Contact Developer
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  ) : (
    <StudentDashboardLayout>
      <div className="mt-14">
        <p className="text-xl font-semibold">Help and Support</p>
        <div className="flex items-start gap-16">
          <div className="mt-8 w-[36rem]">
            <p className="opacity-60 font-semibold">
              Frequently Asked Questions
            </p>
            <div className="grid gap-5 mt-3 ">
              {questions.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => handleShow(idx)}
                    className="bg-white px-5 py-2 flex items-center justify-between w-full"
                  >
                    <p>{item.qst}</p>
                    <BsCaretDownFill />
                  </button>
                  {activeQst === idx && (
                    <p className="pr-5 px-5 text-sm text-black/60 rounded-b-lg py-3 bg-white">
                      {item.ans}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#EBF5FF] p-10 mt-14">
            <button className="text-white text-sm bg-appcolor hover:bg-blue-800 rounded-md px-5 py-2 transition-all duration-500 ease-in-out ">
              Contact Admin
            </button>
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
};

export default Support;
