import React from "react";
import logo from "../assets/images/image 1 (1).png";
import user from "../assets/images/user.png";
import { BsFillCaretDownFill, BsSearch, BsStack } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";

import { RxDashboard } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const sidebarItmes = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <RxDashboard />
    },
    {
      title: "Subject",
      url: "/admin/subjects",
      icon: <GiBlackBook size={18} />
    },
    {
      title: "Student",
      url: "/admin/students",
      icon: <HiOutlineUserGroup size={20} />
    },
    {
      title: "Teacher",
      url: "/admin/teachers",
      icon: <HiOutlineUsers size={20} />
    },
    {
      title: "My Account",
      url: "/my-account",
      icon: <RiUser3Line />
    },
    {
      title: "Tools",
      url: "/tools",
      icon: <BsStack />
    },
    {
      title: "Support and Help",
      url: "/support",
      icon: <MdOutlineLiveHelp />
    }
  ];

  const handleNavigate = (url) => {
    if (url) navigate(url);
  };

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      <aside className="pb-4 w-[22%] flex flex-col h-full bg-white pt-10 px-6">
        <div>
          <img className="w-20 mx-auto" src={logo} />
        </div>
        <div className="mt-2 ">
          {sidebarItmes.map((item, idx) => (
            <li
              onClick={() => handleNavigate(item.url)}
              role={"button"}
              key={idx}
              className="transition-all duration-500 pl-[4.5vw] text-[15px] hover:font-semibold hover:bg-[#EBF5FF] hover:text-[#0072EA] py-2.5 mt-3 w-full flex items-center gap-3 "
            >
              <span> {item.icon}</span>
              {item.title}
            </li>
          ))}
        </div>
        <button className="mt-auto text-sm font-semibold mx-auto max-w-[250px] w-full py-3 rounded bg-[#FCF3DE] text-[#FF8F0B] ">
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
