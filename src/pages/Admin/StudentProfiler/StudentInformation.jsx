import { useEffect, useState } from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCaretLeftFill } from "react-icons/bs";
import woman from "../../../assets/images/teacher.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { CustomSelect } from "../Student";
import ActivityCard from "../../../components/ActivityCard";
import { BiCloudDownload } from "react-icons/bi";
import Chart from "../../../components/Chart";
import { BarChart } from "recharts";
import BarChartExample from "../../../components/Chart/BarChart";
import PieChartExample from "../../../components/Chart/PieChart";
import { useStudent } from "../../../hooks/useStudent";
import Loader from "../../../components/Loader";
import { useUser } from "../../../hooks/useUser";

const StudentInformation = () => {
  const { id } = useLocation().state;
  const { handleViewStudent } = useStudent();
  const [data, setData] = useState({});
  const paginations = ["1", "2", "3", "4", "5"];

  const [activities, setActivities] = useState([1, 2, 3, 4, 5, 6, 7]);
  const { handleGetUserLoggedActivity } = useUser();
  const [loading, setLoading] = useState(false);

  const email = data?.id?.email;
  const first_name = data?.id?.first_name;
  const last_name = data?.id?.last_name;
  const date_of_birth = data?.id?.date_of_birth;
  const other_mame = data?.id?.other_name;
  const phone_number = data?.id?.phone_number;

  const chartLegend = [
    { name: "Mathematics", color: "#0072EA" },
    { name: "English", color: "#00C49F" },
    { name: "Chemistry", color: "#EBF5FF" },
    { name: "Physics", color: "#F08C00" }
  ];

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const viewStudent = () => {
    setLoading(true);
    handleViewStudent({ id })
      .then((res) => setData(res.data.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const getUserLoggedActivity = () => {
    setLoading(true);
    handleGetUserLoggedActivity()
      .then((res) => {
        setActivities(res.data.data.user_activity);
        console.log(res);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUserLoggedActivity();
    viewStudent();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-14 flex flex-col gap-7">
          <div className="w-full">
            <button
              onClick={() => goBack()}
              className="flex gap-1 items-center mb-3 text-[coral]"
            >
              <BsCaretLeftFill size={16} color="coral" />
              back
            </button>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Student Profiler</p>
              <button className="font-medium text-sm flex bg-appcolor text-white items-center gap-1 py-2 px-3 rounded">
                <BiCloudDownload />
                <p>Download User Profile</p>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-md p-7 grid grid-cols-[.4fr,.6fr]">
            <div className="grid place-content-center">
              <img src={woman} className="max-w-[200px]" />
            </div>
            <div>
              <p className="font-semibold text-lg">Personal Information</p>
              <div className="grid grid-cols-2 mt-5 gap-7 gap-x-10">
                <div className="flex flex-col ">
                  <p className="opacity-60">First Name</p>
                  <p className="font-medium">{first_name}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="opacity-60">Last Name</p>
                  <p className="font-medium">{last_name}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="opacity-60">Other Name</p>
                  <p className="font-medium">{other_mame}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="opacity-60">Phone Number</p>
                  <p className="font-medium">{phone_number}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="opacity-60">Email</p>
                  <p className="font-medium">{email}</p>
                </div>
                <div className="flex flex-col ">
                  <p className="opacity-60">Date of Birth</p>
                  <p className="font-medium">{date_of_birth}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="bg-white p-5 rounded-md min-w-[300px] flex flex-col justify-center text-center">
              <p className="text-lg font-semibold">Student Performance </p>
              <div className="w-40 h-40 mx-auto mt-5">
                <CircularProgressbar
                  value={40}
                  text={`40%`}
                  styles={buildStyles({
                    pathColor: `#F08C00`,
                    textColor: "#F08C00",
                    trailColor: "#fff7eb",
                    textSize: "20px"
                  })}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <p className="font-medium mt-">Student performance tracker</p>
                <CustomSelect
                  aClass={"w-28 py-1"}
                  options={[
                    { value: "", title: "All Month" },
                    { value: "2020", title: "2020" },
                    { value: "2021", title: "2021" },
                    { value: "2022", title: "2022" }
                  ]}
                />
              </div>
              <div className="mt-3 ">
                <Chart height={200} />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="font-semibold text-lg">Student subject engagement</p>
            <div className="flex items-center gap-3">
              <CustomSelect
                aClass={"w-32"}
                options={[
                  { value: "mathematics", title: "Mathematics" },
                  { value: "english", title: "English" },
                  { value: "physics", title: "Physics" }
                ]}
              />
              <CustomSelect
                aClass={"w-32"}
                options={[
                  { value: "10days", title: "Last 10 days" },
                  { value: "lastmonth", title: "Last Month" },
                  { value: "Last year", title: "Last Year" }
                ]}
              />
            </div>
          </div>
          <div className="">
            <BarChartExample />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="font-semibold text-lg">Hours spent per subject</p>
            <div className="flex items-center gap-3">
              <CustomSelect
                aClass={"w-32"}
                options={[
                  { value: "mathematics", title: "Mathematics" },
                  { value: "english", title: "English" },
                  { value: "physics", title: "Physics" }
                ]}
              />
              <CustomSelect
                aClass={"w-32"}
                options={[
                  { value: "10days", title: "Last 10 days" },
                  { value: "lastmonth", title: "Last Month" },
                  { value: "Last year", title: "Last Year" }
                ]}
              />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <PieChartExample />
            <div className="grid gap-1">
              {chartLegend.map((item, idx) => {
                return (
                  <div key={idx} className="flex gap-1 items-center">
                    <div
                      className="w-2 h-2 "
                      style={{ background: item.color }}
                    ></div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-end">
              <p className="text-lg font-semibold">User Logged Activities </p>
              <CustomSelect
                aClass={"w-32"}
                options={[
                  { value: "10days", title: "Last 10 days" },
                  { value: "lastmonth", title: "Last Month" },
                  { value: "Last year", title: "Last Year" }
                ]}
              />
            </div>
            <div className="flex flex-col gap-3 mt-7">
              {activities.map((activity, idx) => (
                <ActivityCard key={idx} item={activity} />
              ))}
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
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentInformation;
