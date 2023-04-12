import React from "react";

import person1 from "../../../assets/images/student.png";
import person2 from "../../../assets/images/teacher.png";
import { RiSendPlaneFill } from "react-icons/ri";
import TeacherDashboardLayout from "../../../Layout/TeacherDashboardLayout";

const TeacherClassroom = () => {
  const dummyMessgs = [
    {
      imgUrl: person1,
      fromSelf: false,
      senderName: "Bello Abdulqudus",
      status: "online",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec molestie elementum"
    },
    {
      imgUrl: person2,
      fromSelf: true,
      senderName: "Bello Abdulqudus",
      status: "offline",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec molestie elementum"
    }
  ];

  return (
    <TeacherDashboardLayout>
      <div className="flex-1 flex">
        <div className="mt-14 gap-4 flex-1 flex flex-col">
          <div className="flex gap-2 items-center">
            <p className="text-xl font-semibold">Classroom</p>
            <p className="px-3 py-2 rounded bg-[#EBF5FF] text-sm font-semibold text-appcolor">
              JSS 3A
            </p>
          </div>
          <div className="bg-[#F1F3F5] rounded p-5 flex-1 flex flex-col">
            <p className="text-center text-sm">Tuesday 09, March 2022</p>
            <div className="mt-10 flex flex-col gap-4">
              {dummyMessgs.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 items-start ${
                    msg.fromSelf
                      ? "justify-start flex-row"
                      : "flex-row-reverse "
                  }`}
                >
                  <img src={msg.imgUrl} className="w-10" alt={msg.senderName} />
                  <div
                    className={`bg-white p-3 rounded-lg ${
                      msg.fromSelf ? "rounded-tl-none" : " rounded-tr-none"
                    } `}
                  >
                    <p className="max-w-[300px]">{msg.message}</p>
                    <div className="mt-3 flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          msg.status === "online"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <p className="text-xs ">{msg.senderName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" mt-auto relative">
              <input
                className="outline-none border-none w-full p-3 rounded-md bg-white placeholder:italic text-sm"
                placeholder="Type your message..."
              />
              <button className="transition-all duration-500 ease-in-out flex gap-2 px-4 py-2 rounded-md text-sm items-center hover:bg-blue-700 bg-appcolor text-white absolute right-2 top-1/2 -translate-y-1/2 flex-row-reverse">
                {" "}
                <RiSendPlaneFill color="white" /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </TeacherDashboardLayout>
  );
};

export default TeacherClassroom;
