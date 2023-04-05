import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useTeacher } from "../../../hooks/useTeacher";
import Loader from "../../../components/Loader";
import { NoData } from "../Student";

// export const CustomInput = ({
//   label,
//   name,
//   type,
//   readOnly,
//   defaultValue,
//   props
// }) => {
//   return (
//     <div className="flex flex-col gap-1 text-sm">
//       <label className="font-semibold " htmlFor={name}>
//         {label}
//       </label>
//       <input
//         readOnly={readOnly}
//         className={`${
//           readOnly ? "bg-[#f1f3f5]" : "bg-transparent"
//         } p-3 px-4  rounded border outline-none w-full`}
//         type={type || "text"}
//         name={name}
//         defaultValue={defaultValue ? defaultValue : null}
//         {...props}
//       />
//     </div>
//   );
// };
// export const CustomSelect = ({
//   aClass,
//   label,
//   name,
//   options,
//   readOnly,
//   multiple
// }) => {
//   return (
//     <div className={` flex flex-col gap-1 text-sm ${aClass}`}>
//       <label className="font-semibold " htmlFor={name}>
//         {label}
//       </label>
//       <div className="relative">
//         <RxCaretDown
//           size={18}
//           className=" absolute right-[14px] top-1/2 -translate-y-1/2"
//         />
//         <select
//           multiple={multiple ? true : false}
//           disabled={readOnly}
//           className={`${
//             readOnly ? "bg-[#f1f3f5]" : "bg-transparent"
//           } p-3 px-4 rounded border outline-none w-full appearance-none`}
//           name={name}
//         >
//           {options.map((item, idx) => (
//             <option key={idx} value={item.value}>
//               {item.title}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

const AdminTeachers = () => {
  const navigate = useNavigate();
  const { handleGetAllTeachers, handleDeleteTeacher } = useTeacher();

  const paginations = ["1", "2", "3", "4", "5"];
  const tableHeader = ["Teacher ID", "Teacher Name", "Class", "Status", null];
  const teachers = [
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    },
    {
      teacher_id: "M1602200",
      teacher_name: "Bello Abdulqudus",
      class: "ss3",
      status: "online"
    }
  ];

  const [allStudents, setAllStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllTeachers = () => {
    setLoading(true);
    handleGetAllTeachers()
      .then((res) => {
        console.log(res.data.data);
        setAllStudent(res?.data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const deleteTeacher = ({ id }) => {
    handleDeleteTeacher({ id })
      .then((res) => {
        toast.success("Student record deleted Successfully", {
          theme: "colored"
        });
        getAllTeachers();
      })
      .catch((err) => toast.error("Error " + err, { theme: "colored" }));
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10">
          {allStudents.length ? (
            <div>
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
                    <button className="font-semibold border text-appcolor flex items-center gap-2 py-2.5 px-5 text-sm rounded">
                      <IoMdCloudDownload size={18} />
                      Download Record
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
                    {teachers.map((teacher, idx) => (
                      <tr
                        className={`${
                          idx % 2 === 1 ? "bg-white" : "bg-[#f5faff]"
                        }  rounded-md`}
                        key={idx}
                      >
                        <td className="py-4 pl-10">{teacher.teacher_id}</td>
                        <td className="py-4">{teacher.teacher_name}</td>
                        <td className="py-4">{teacher.class}</td>
                        <td className="py-4">{teacher.status}</td>
                        <td className="py-4">
                          <div className="flex items-center justify-center gap-3 text-sm">
                            <p
                              onClick={() => navigate("/admin/teacher-details")}
                              role={"button"}
                              className="hover:underline text-green-800"
                            >
                              View
                            </p>
                            |
                            <p
                              onClick={() =>
                                navigate("/admin/edit-teacher-details")
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
          ) : (
            <NoData text={"add new teacher"} url={"/admin/new-teacher"} />
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminTeachers;
