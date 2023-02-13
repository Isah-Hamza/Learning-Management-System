import React, { useState } from "react";
import logo from "../assets/images/image 1 (1).png";
import user from "../assets/images/user.png";
import {
  BsFillCaretDownFill,
  BsListTask,
  BsSearch,
  BsStack
} from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { BiRefresh } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StudentDashboardLayout = ({ children, readingPage }) => {
  const navigate = useNavigate();
  const sidebarItmes = [
    {
      title: "Dashboard",
      url: "/student/dashboard",
      icon: <RxDashboard />,
      id: "dashboard"
    },
    {
      title: "My Subjects",
      url: "/student/subjects",
      icon: <GiBlackBook size={18} />,
      id: "subject"
    },
    {
      title: " My Assignments",
      url: "/student/assignment",
      icon: <BsListTask size={20} />,
      id: "assignment"
    },
    {
      title: "Classroom",
      url: "/student/classroom",
      icon: <HiOutlineUserGroup size={20} />,
      id: "classroom"
    },
    {
      title: "My Account",
      url: "/student/my-account",
      icon: <RiUser3Line />,
      id: "account"
    },
    {
      title: "My Tools",
      url: "/student/tools",
      icon: <BsStack />,
      id: "tool"
    },
    {
      title: "Text Summarizer",
      url: "/student/text-summarizer",
      icon: <BiRefresh size={22} />,
      id: "text-summarizer"
    },
    {
      title: "Support and Help",
      url: "/student/support",
      icon: <MdOutlineLiveHelp />,
      id: "support"
    }
  ];

  const [activeLink, setActiveLink] = useState(() => {
    const url = window.location.pathname.split("/")[2];
    return url;
  });

  const handleNavigate = (url) => {
    if (url) navigate(url);
  };

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <aside className="max-h-screen overflow-y-auto py-5 w-[22%] flex flex-col h-full bg-white px-6">
        <div>
          <img className="w-20 mx-auto" src={logo} />
        </div>
        <div className="flex items-center gap-1 text-sm justify-center mt-3">
          <p className="font-semibold">Student ID:</p>
          <p>M1602200</p>
        </div>
        <div className="mt-7 mb-10">
          {sidebarItmes.map((item, idx) => (
            <li
              onClick={() => handleNavigate(item.url)}
              role={"button"}
              key={idx}
              className={`${
                activeLink.includes(item.id) &&
                "font-semibold bg-[#EBF5FF] text-[#0072EA]"
              } transition-all duration-500 pl-[3vw] text-[15px] hover:bg-[#EBF5FF]/30 hover:text-[#0072EA]/80 py-2.5 mt-3 w-full flex items-center gap-3 `}
            >
              <span> {item.icon}</span>
              {item.title}
            </li>
          ))}
        </div>
        <button
          onClick={() => navigate("#")}
          className="mt-auto text-sm font-semibold mx-auto max-w-[250px] w-full py-3 rounded bg-[#FCF3DE] text-[#FF8F0B] "
        >
          Logout
        </button>
      </aside>
      <div
        className={`flex-1 flex flex-col p-10 px-16 h-full overflow-auto pb-10 ${
          readingPage && "!p-0"
        }`}
      >
        {" "}
        {!readingPage ? (
          <div className="flex justify-between items-center">
            <div className="flex gap-2 w-full">
              <div className="relative w-[70%]">
                <BsSearch
                  size={18}
                  className="absolute top-1/2 left-4 -translate-y-1/2"
                />
                <input
                  placeholder="search for anything"
                  type={"text"}
                  className="w-full text-sm placeholder:italic rounded px-6 pl-11 py-2.5 border outline-none"
                />
              </div>
              {/* <button className="font-semibold bg-appcolor text-white py-1.5 px-5 text-sm rounded">
              + Add Subject
            </button> */}
            </div>
            <div role="button" className="flex items-center gap-1">
              <img src={user} className="w-10" />
              <BsFillCaretDownFill size={18} />
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
