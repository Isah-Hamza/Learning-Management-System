import { useState } from "react";
import { BiCloudDownload } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import DashboardLayout from "../../../Layout/dashboardLayout";
import StudentCard from "./StudentCard";

const StudentProfiler = () => {
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4]);
  return (
    <DashboardLayout>
      <div className="mt-14 flex gap-7">
        <div className="w-full">
          <div>
            <p className="text-xl font-semibold">Student Profiler</p>

          </div>
          <div className="mt-5 flex items-end gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium ml-1" htmlFor="class">
                Name
              </label>
              <div className="relative w-fit">
                <input
                  type={"text"}
                  placeholder="Awwal Muhammad"
                  className="w-80 rounded border outline-none p-3 py-2.5 text-sm"
                />
                <RiSearchLine className="absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium ml-1" htmlFor="class">
                Class
              </label>
              <select className="border outline-none w-64 px-3 py-2.5 text-sm">
                <option>JSS1</option>
                <option>JSS2</option>
                <option>JSS3</option>
                <option>SSS1</option>
                <option>SSS2</option>
                <option>SSS3</option>
              </select>
            </div>
            <button className="text-white bg-appcolor px-5 py-2.5 text-sm rounded ml-5">
              Search Student
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-10 max-w-[880px]">
            {searchResult.map((item, idx) => (
              <StudentCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfiler;
