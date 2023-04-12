import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useTeacher } from "../../../hooks/useTeacher";
import Loader from "../../../components/Loader";
import { NoData } from "../Student";
import { ApiEndpoints } from "../../../api/api";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";

const AdminTeachers = () => {
  const navigate = useNavigate();
  const { handleGetAllTeachers, handleDeleteTeacher } = useTeacher();

  const paginations = ["1", "2", "3", "4", "5"];
  const tableHeader = ["Teacher ID", "Teacher Name", "Class", "Status", null];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [downloading, setDownloading] = useState(false);
  const [allStudents, setAllStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllTeachers = () => {
    setLoading(true);
    handleGetAllTeachers()
      .then((res) => {
        setAllStudent(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const deleteTeacher = ({ id }) => {
    handleDeleteTeacher({ id })
      .then((res) => {
        toast.success("Teacher record deleted Successfully", {
          theme: "colored"
        });
        // getAllTeachers();
        getAllTeachers();
      })
      .catch((err) => toast.error("Error " + err, { theme: "colored" }));
  };

  const downloadRecord = () => {
    setDownloading(true);
    axios({
      url: ApiEndpoints.TEACHERS.DOWNLOAD_TEACHERS,
      method: "GET",
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "teachers.csv");
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading CSV file:", error);
      })
      .finally(() => setDownloading(false));
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      const result = allStudents.filter((stud) =>
        stud.full_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setSearchResult(result);
    } else setSearchResult(allStudents);
  }, [searchTerm, allStudents]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10 flex-1 flex">
          {allStudents.length ? (
            <div className="flex flex-col w-full">
              <p className="text-xl font-semibold">Teachers' Information</p>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="relative ">
                      <BsSearch
                        size={18}
                        className="absolute top-1/2 left-4 -translate-y-1/2"
                      />
                      <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="search for teachers"
                        type={"text"}
                        className="w-[300px] rounded px-6 pl-11 py-2 border outline-none"
                      />
                    </div>
                    <button className="font-semibold border text-appcolor border-appcolor py-1.5 px-5 text-sm rounded">
                      Sort by
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button
                      disabled={downloading}
                      onClick={downloadRecord}
                      className="disabled:bg-opacity-70 font-semibold border text-appcolor flex items-center gap-2 py-2.5 px-5 text-sm rounded"
                    >
                      {downloading ? (
                        <ImSpinner2 className="animate-spin" />
                      ) : (
                        <IoMdCloudDownload size={18} />
                      )}

                      {downloading ? "Downloading..." : "Download Record"}
                    </button>{" "}
                    <button
                      onClick={() => navigate("/admin/new-teacher")}
                      className="font-semibold bg-appcolor text-white py-2.5 px-5 text-sm rounded"
                    >
                      + Add Teacher
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      {tableHeader.map((item, idx) => (
                        <th
                          className={`${idx === 0 && "pl-10"} text-left`}
                          key={idx}
                        >
                          {item ? item : ""}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult.map((teacher, idx) => (
                      <tr
                        className={`${
                          idx % 2 === 1 ? "bg-white" : "bg-[#f5faff]"
                        }  rounded-md`}
                        key={idx}
                      >
                        <td className="py-4 pl-10">{teacher.teacher_id}</td>
                        <td className="py-4">{teacher.full_name}</td>
                        <td className="py-4">{teacher.class}</td>
                        <td className="py-4">{teacher.enrollment_status}</td>
                        <td className="py-4">
                          <div className="flex items-center justify-center gap-3 text-sm">
                            <p
                              onClick={() =>
                                navigate("/admin/teacher-details", {
                                  state: { id: teacher.id }
                                })
                              }
                              role={"button"}
                              className="hover:underline text-green-800"
                            >
                              View
                            </p>
                            |
                            <p
                              onClick={() =>
                                navigate("/admin/edit-teacher-details", {
                                  state: { id: teacher.id }
                                })
                              }
                              role={"button"}
                              className="hover:underline text-[#ffb966]"
                            >
                              Edit
                            </p>
                            |
                            <p
                              onClick={() => deleteTeacher({ id: teacher.id })}
                              role={"button"}
                              className="hover:underline text-[coral]"
                            >
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {searchTerm && searchResult.length === 0 ? (
                  <div className="flex justify-center mt-40 text-center flex-col items-center">
                    {" "}
                    No match found.
                    <p className="font-medium">
                      No teacher match the search term.
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="mt-auto">
                <div className="mt-10 flex items-center justify-between gap-10 text-sm">
                  <div className="flex gap-3">
                    {paginations.map((item, idx) => (
                      <button
                        className=" w-10 h-10 shadow font-semibold rounded-full bg-white grid place-content-center"
                        key={idx}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 ">
                    <button className="font-semibold text-appcolor border border-appcolor py-1.5 px-5 text-sm rounded">
                      Prev
                    </button>{" "}
                    <button className="font-semibold bg-appcolor text-white py-1.5 px-5 text-sm rounded">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center">
              <NoData text={"add new teacher"} url={"/admin/new-teacher"} />
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminTeachers;
