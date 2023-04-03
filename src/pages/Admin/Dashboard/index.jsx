import React, { useEffect, useState } from "react";
import Chart from "../../../components/Chart";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomSelect } from "../Student";
import { useAdmin } from "../../../hooks/useAdmin";
import { useCurriculum } from "../../../hooks/useCurriculum";
import Loader from "../../../components/Loader";
import { getAllSubjects } from "../../../services/curriculum";

const AdminDashboard = () => {
  const { handleGetTotalStudents, handleGetTotalTeachers } = useAdmin();
  const { handleGetAllSubjects } = useCurriculum();
  const [data, setData] = useState({
    student: null,
    teacher: null,
    subject: null
  });
  const [loading, setLoading] = useState(false);
  const analytics = [
    {
      title: "Total Number of Students",
      value: data?.student
    },
    {
      title: "Total Number of Teachers",
      value: data?.teacher
    },
    {
      title: "Total Number of Subjects",
      value: data?.subject
    }
  ];

  const getTotalStudents = () => {
    setLoading(true);
    handleGetTotalStudents()
      .then((res) =>
        setData((prev) => ({ ...prev, student: res.data.data.total_students }))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const getTotalTeachers = () => {
    setLoading(true);
    handleGetTotalTeachers()
      .then((res) =>
        setData((prev) => ({ ...prev, teacher: res.data.data.total_teachers }))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const getAllSubjects = () => {
    setLoading(true);
    handleGetAllSubjects()
      .then(
        (res) => {
          console.log(res.data.data.length);
          setData((prev) => ({ ...prev, subject: res?.data?.data?.length }));
        }
        // (res) => console.log(res)
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTotalStudents();
    getTotalTeachers();
    getAllSubjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(data);

  return (
    <DashboardLayout>
      <div className="mt-14">
        <p className="text-xl font-semibold">Dashboard Overview</p>
        <div className="bg-white p-10 px-16 mt-3 grid grid-cols-3 gap-4">
          {analytics.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EBF5FF] rounded p-5 py-10 grid place-content-center text-center"
            >
              <p className="opacity-80">{item.title}</p>
              <p className="font-semibold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <p className="text-xl font-semibold">Analytics and Reports</p>
              <p className="opacity-70">Subject Reading Rate</p>
            </div>
            <CustomSelect
              aClass="w-28 py-1.5"
              options={[
                {
                  title: "Monthly",
                  value: "monthly"
                },

                {
                  title: "Weekly",
                  value: "weekly"
                },
                {
                  title: "Daily",
                  value: "daily"
                }
              ]}
            />
          </div>
          <div className="mt-3 ">
            <Chart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
