import { useState } from "react";
import { BiCloudDownload } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import DashboardLayout from "../../../Layout/dashboardLayout";
import StudentCard from "./StudentCard";
import { useStudent } from "../../../hooks/useStudent";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

const StudentProfiler = () => {
  const [searchRes, setSearhRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchData, setSearchData] = useState({
    class_level_id: null,
    search_term: ""
  });

  const { handleSearchStudent } = useStudent();

  const searchStudent = () => {
    const class_level_id = searchData.class_level_id;
    const search_term = searchData.search_term;
    setLoading(true);
    handleSearchStudent({ search_term, class_level_id })
      .then((res) => setSearhRes(res.data.data))
      .catch((e) => toast.error("No such record found ", { theme: "colored" }))
      .finally(() => setLoading(false));
  };

  console.log(searchData);

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
                  onChange={(e) =>
                    setSearchData((prev) => ({
                      ...prev,
                      search_term: e.target.value
                    }))
                  }
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
              <select
                onChange={(e) =>
                  setSearchData((prev) => ({
                    ...prev,
                    class_level_id: e.target.value
                  }))
                }
                className="border outline-none w-64 px-3 py-2.5 text-sm"
              >
                <option selected value="">
                  Select class
                </option>
                <option value={1}>JSS1</option>
                <option value={2}>JSS2</option>
                <option value={3}>JSS3</option>
                <option value={4}>SSS1</option>
                <option value={5}>SSS2</option>
                <option value={6}>SSS3</option>
              </select>
            </div>
            <button
              type="button"
              disabled={loading}
              onClick={searchStudent}
              className="text-white disabled:bg-opacity-60 bg-appcolor px-5 py-2.5 text-sm rounded ml-5"
            >
              {loading ? "Searching Records..." : "Search Student"}
            </button>
          </div>
          {loading ? (
            <div className="-mt-32">
              <Loader height={"100vh - 200px"} />
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-10 max-w-[880px]">
              {searchRes?.map((item, idx) => (
                <StudentCard key={idx} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfiler;
