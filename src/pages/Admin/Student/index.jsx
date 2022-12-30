import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import ViewStudentDetails from "./ViewStudentDetails";

export const CustomInput = ({ label, name, type, readOnly, defaultValue }) => {
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
      />
    </div>
  );
};
export const CustomSelect = ({ aClass, label, name, options, readOnly }) => {
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

const AdminStudents = () => {
  const navigate = useNavigate();
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

  return (
    <DashboardLayout>
      <div className="mt-10">
        {!newStudent && !editStudent && !viewDetails && (
          <div>
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
                  {students.map((student, idx) => (
                    <tr
                      className={`${
                        idx % 2 === 1 ? "bg-white" : "bg-[#f5faff]"
                      }  rounded-md`}
                      key={idx}
                    >
                      <td className="py-4 pl-10">{student.student_id}</td>
                      <td className="py-4">{student.student_name}</td>
                      <td className="py-4">{student.class}</td>
                      <td className="py-4">{student.status}</td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-3 text-sm">
                          <p
                            onClick={() => navigate("/admin/student-details")}
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
    </DashboardLayout>
  );
};

export default AdminStudents;
