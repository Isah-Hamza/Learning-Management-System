import React, { useState } from "react";
import logo from "../assets/images/image 1 (1).png";
import user from "../assets/images/user.png";
import { BsFillCaretDownFill, BsSearch, BsStack } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";

import { RxDashboard } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import arrowCircleDown from "../assets/images/arrow-circle-down.png";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const sidebarItmes = [
    {
      title: "Home",
      icon: <RxDashboard />,
      id: "home",
      subTitle: [
        {
          title: "Dashboard",
          links: [
            {
              title: "Overview",
              url: "/admin/dashboard",
              icon: <BsStack size={20} />,
              id: "dashboard"
            },
            {
              title: "Student",
              url: "/admin/students",
              icon: <HiOutlineUserGroup size={20} />,
              id: "student"
            },
            {
              title: "Teacher",
              url: "/admin/teachers",
              icon: <HiOutlineUsers size={20} />,
              id: "teacher"
            },
            {
              title: "My Account",
              url: "/admin/my-account",
              icon: <RiUser3Line />,
              id: "account"
            },
            {
              title: "Support and Help",
              url: "/admin/support",
              icon: <MdOutlineLiveHelp />,
              id: "support"
            }
          ]
        }
      ]
    },
    {
      title: "Tools",
      icon: <RxDashboard />,
      id: "tools",
      subTitle: [
        {
          title: "Content",
          links: [
            {
              title: "Subject",
              url: "/admin/subjects",
              icon: <GiBlackBook size={18} />,
              id: "subject"
            },
            {
              title: "Assignment",
              url: "/admin/assignment",
              icon: <GiBlackBook size={18} />,
              id: "assignment"
            },
            {
              title: "Text Summarizer",
              url: "/admin/text-summarizer",
              icon: <GiBlackBook size={18} />,
              id: "text-summarizer"
            },
            {
              title: "Quizzes",
              url: "/admin/quizzes",
              icon: <GiBlackBook size={18} />,
              id: "quizzes"
            }
          ]
        },
        {
          title: "User Profiler",
          links: [
            {
              title: "Student Profile",
              url: "/admin/profiler",
              icon: <GiBlackBook size={18} />,
              id: "subject"
            },
            {
              title: "Parent Profile",
              url: "/admin/profiler",
              icon: <GiBlackBook size={18} />,
              id: "assignment"
            }
          ]
        }
      ]
    }
    // {
    //   title: "Tools",
    //   url: "/admin/tools",
    //   icon: <BsStack />,
    //   id: "tool"
    // },
    // {
    //   title: "Forensic Investigator",
    //   url: "/admin/forensic-investigator",
    //   icon: <RiUser5Line size={18} />,
    //   id: "forensic-investigator"
    // },
    // {
    //   title: "Student Profiler",
    //   url: "/admin/profiler",
    //   icon: <RiUser5Line size={18} />,
    //   id: "profiler"
    // },
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
      <aside className="max-h-screen overflow-y-auto pb-5 w-[22%] flex flex-col h-full bg-white pt-10 px-6">
        <div>
          <img className="w-20 mx-auto" src={logo} />
        </div>
        <div className="mt-2 mb-5">
          {sidebarItmes.map((item, idx) => (
            <li
              onClick={() => handleNavigate(item.url)}
              key={idx}
              className={`${
                activeLink.includes(item.id) &&
                "font-semibold bg-[#EBF5FF] text-[#0072EA]"
              } transition-all duration-500  text-[15px]  mt-3 w-full flex flex-col gap-3 `}
            >
              <p className="text-2xl font-semibold pl-[0.5vw] my-3">
                {item.title}
              </p>
              <div>
                {item.subTitle.map((sub, idx) => (
                  <div key={idx}>
                    <p
                      className="flex justify-between items-center text-base font-semibold pl-[3vw] hover:text-[#0072EA]/80 hover:bg-[#EBF5FF]/30 py-2.5 pr-5"
                    >
                      <span>{sub.title}</span>
                      <img src={arrowCircleDown} className="w-5" />
                    </p>
                    <ul>
                      {sub.links.map((link, idx) => (
                        <li
                          onClick={() => handleNavigate(link.url)}
                          role={"button"}
                          key={idx}
                          className={`${
                            activeLink.includes(link.id) &&
                            "font-semibold bg-[#EBF5FF] text-[#0072EA]"
                          } transition-all duration-500 pl-[3vw] text-[15px] hover:bg-[#EBF5FF]/30 hover:text-[#0072EA]/80 py-2.5 mt-1 w-full flex items-center gap-3 `}
                        >
                          <span> {link.icon}</span>
                          {link.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </div>
        <button
          onClick={() => navigate("/admin/subscriptions")}
          className="mt-auto text-sm font-semibold mx-auto max-w-[250px] w-full py-3 rounded bg-[#FCF3DE] text-[#FF8F0B] "
        >
          Subscription Plans
        </button>
      </aside>
      <div className="flex-1 flex flex-col p-10 px-16 h-full overflow-auto pb-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-full">
            <div className="relative w-[70%]">
              <BsSearch
                size={18}
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
              <input
                placeholder="search for subjects, students, teachers etc"
                type={"text"}
                className="w-full rounded px-6 pl-11 py-2.5 border outline-none"
              />
            </div>
            <button className="font-semibold bg-appcolor text-white py-1.5 px-5 text-sm rounded">
              + Add Subject
            </button>
          </div>
          <div role="button" className="flex items-center gap-1">
            <img src={user} className="w-10" />
            <BsFillCaretDownFill size={18} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
