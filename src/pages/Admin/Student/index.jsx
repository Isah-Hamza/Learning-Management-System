import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import { useStudent } from "../../../hooks/useStudent";
import DashboardLayout from "../../../Layout/dashboardLayout";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import ViewStudentDetails from "./ViewStudentDetails";
import noData from "../../../assets/images/no-data.png";

import { ToastContainer, toast } from "react-toastify";

export const CustomInput = ({
  label,
  name,
  type,
  readOnly,
  defaultValue,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="font-semibold " htmlFor={name}>
        {label}
      </label>
      <input
        readOnly={readOnly}
        className={`${
          readOnly ? "bg-[#f1f3f5]" : "bg-transparent"
        } p-3 px-4  rounded border outline-none w-full`}
        type={type || "text"}
        name={name}
        defaultValue={readOnly ? defaultValue : null}
        {...rest}
      />
    </div>
  );
};
export const CustomSelect = ({
  aClass,
  label,
  name,
  options,
  readOnly,
  ...props
}) => {
  return (
    <div className={` flex flex-col gap-1 text-sm ${aClass}`}>
      <label className="font-semibold " htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <RxCaretDown
          size={18}
          className=" absolute right-[14px] top-1/2 -translate-y-1/2"
        />
        <select
          disabled={readOnly}
          className={`${
            readOnly ? "bg-[#f1f3f5]" : "bg-transparent"
          } p-3 px-4 rounded border outline-none w-full appearance-none`}
          name={name}
          {...props}
        >
          {options.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const NoData = ({ setNewStudent }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-85px)] flex flex-col justify-center items-center">
      <img src={noData} className="w-36" />
      <p>No record found!!!</p>
      <button
        // onClick={() => setNewStudent(true)}
        onClick={() => navigate("/admin/new-student")}
        className="text-blue-800 underline text-xs font-medium px-5 py-1 rounded"
      >
        Add new students
      </button>
    </div>
  );
};

const AdminStudents = () => {
  const navigate = useNavigate();
  const { handleGetAllStudents } = useStudent();
  const [newStudent, setNewStudent] = useState(false);
  const [editStudent, setEditStudent] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  const paginations = ["1", "2", "3", "4", "5"];
  const tableHeader = ["Student ID", "Student Name", "Class", "Status", null];
  const students = [
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      student_id: "M1602200",
      student_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    }
  ];

  const [allStudents, setAllStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllStudents = () => {
    setLoading(true);
    handleGetAllStudents()
      .then((res) => {
        console.log(res.data.data);
        setAllStudent(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <DashboardLayout>
        {allStudents.length ? (
          <div className="mt-10 flex-1">
            {!newStudent && !editStudent && !viewDetails && (
              <div className="h-full flex flex-col">
                <p className="text-xl font-semibold">Students' Information</p>
                <div className="mt-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="relative ">
                        <BsSearch
                          size={18}
                          className="absolute top-1/2 left-4 -translate-y-1/2"
                        />
                        <input
                          placeholder="search for students"
                          type={"text"}
                          className="w-[300px] rounded px-6 pl-11 py-2 border outline-none"
                        />
                      </div>
                      <button className="font-semibold border text-appcolor border-appcolor py-1.5 px-5 text-sm rounded">
                        Sort by
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <button className="font-semibold border text-appcolor flex items-center gap-2 py-2.5 px-5 text-sm rounded">
                        <IoMdCloudDownload size={18} />
                        Download Record
                      </button>{" "}
                      <button
                        onClick={() => navigate("/admin/new-student")}
                        className="font-semibold bg-appcolor text-white py-2.5 px-5 text-sm rounded"
                      >
                        + Add Student
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-8">
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
                      {allStudents.map((student, idx) => (
                        <tr
                          className={`${
                            idx % 2 === 1 ? "bg-white" : "bg-[#f5faff]"
                          }  rounded-md`}
                          key={idx}
                        >
                          <td className="py-4 pl-10">{student.student_id}</td>
                          <td className="py-4">{student.full_name}</td>
                          <td className="py-4">{student.class || "Null"}</td>
                          <td className="py-4">{student.enrollment_status}</td>
                          <td className="py-4">
                            <div className="flex items-center justify-center gap-3 text-sm">
                              <p
                                onClick={() =>
                                  navigate("/admin/student-details")
                                }
                                role={"button"}
                                className="hover:underline text-green-800"
                              >
                                View
                              </p>
                              |
                              <p
                                onClick={() =>
                                  navigate("/admin/edit-student-details")
                                }
                                role={"button"}
                                className="hover:underline text-[#ffb966]"
                              >
                                Edit
                              </p>
                              |
                              <p
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
            )}
            {editStudent && <EditStudent setEditStudent={setEditStudent} />}
            {viewDetails && (
              <ViewStudentDetails
                setEditStudent={setEditStudent}
                setViewDetails={setViewDetails}
              />
            )}
          </div>
        ) : (
          <NoData setNewStudent={setNewStudent} />
        )}
      </DashboardLayout>
    </>
  );
};

export default AdminStudents;
