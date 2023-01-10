import React, { useState } from "react";
import { BsCaretLeftFill, BsCloud } from "react-icons/bs";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import { useNavigate } from "react-router-dom";

const AssignmentPage = () => {
  const [activeTopic, setActiveTopic] = useState("Topic 1");
  const dummyTopics = [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
    "Topic 6",
    "Topic 7",
    "Topic 8",
    "Topic 9",
    "Topic 10",
    "Topic 11"
  ];
  const navigate = useNavigate();
  const goBack = (url) => {
    if (url) navigate(url);
    else navigate(-1);
  };

  return (
    <StudentDashboardLayout readingPage={true}>
      <div className="flex max-w-5xl">
        {/* <div className="w-52 h-screen bg-[#004185] px-5 flex flex-col gap-4 pt-14">
          {dummyTopics.map((topic, idx) => (
            <button
              onClick={() => setActiveTopic(topic)}
              className={`font-medium w-full text-center text-sm py-2 text-white rounded ${
                topic === activeTopic && "border"
              }`}
              key={idx}
            >
              {topic}
            </button>
          ))}
        </div> */}
        <div className="flex-1 p-16">
          <button
            onClick={() => goBack("/student/subjects/")}
            className="flex gap-1 items-center mb-8 text-[coral]"
          >
            <BsCaretLeftFill size={16} color="coral" />
            back
          </button>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xl font-semibold">Assignment</p>
              <div className="mt-2 px-4 py-3 font-medium text-[#0072EA] bg-[#EBF5FF]">
                Subject: Mathematics
              </div>
            </div>
            <button className="font-semibold flex items-center gap-2 text-sm py-2 mt-3 px-5 border rounded-md">
              {" "}
              <BsCloud /> Download Assignment
            </button>
          </div>
          <div className="mt-10">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
              molestie elementum natoque. Sed est id eget sed viverra aliquam.
              Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
              vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius
              orci. Amet suspendisse risus vitae iaculis porttitor ridiculus a
              ullamcorper ultricies.
            </p>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
              molestie elementum natoque. Sed est id eget sed viverra aliquam.
              Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
              vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius
              orci. 
            </p>
          </div>
        </div>
      </div>
    </StudentDashboardLayout>
  );
};

export default AssignmentPage;
