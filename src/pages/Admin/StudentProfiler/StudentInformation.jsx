import { useState } from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useNavigate } from "react-router-dom";
import { BsCaretLeftFill } from "react-icons/bs";
import woman from "../../../assets/images/teacher.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { CustomSelect } from "../Student";
import ActivityCard from "../../../components/ActivityCard";
import { BiCloudDownload } from "react-icons/bi";

const StudentInformation = () => {
  const [userActivities, setActivities] = useState([1, 2, 3, 4, 5]);
  const paginations = ["1", "2", "3", "4", "5"];

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <DashboardLayout>
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
            <button className="font-medium text-sm flex bg-appcolor text-white items-center gap-1 py-1 px-3 rounded">
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
                <p className="font-medium">AbdulQudus</p>
              </div>
              <div className="flex flex-col ">
                <p className="opacity-60">Last Name</p>
                <p className="font-medium">Bello</p>
              </div>
              <div className="flex flex-col ">
                <p className="opacity-60">Other Name</p>
                <p className="font-medium">Onuchi</p>
              </div>
              <div className="flex flex-col ">
                <p className="opacity-60">Phone Number</p>
                <p className="font-medium">(208) 555-0112</p>
              </div>
              <div className="flex flex-col ">
                <p className="opacity-60">Email</p>
                <p className="font-medium">nevaeh.simmons@example.com</p>
              </div>
              <div className="flex flex-col ">
                <p className="opacity-60">Date of Birth</p>
                <p className="font-medium">02/02/2022</p>
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
            <div className="w-full h-40 bg-white rounded mt-3 grid place-content-center font-semibold">
              {" "}
              Graph Here.
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
        <div className="font-semibold w-full h-64 bg-white rounded-md grid place-content-center text-center">
          Bar chart here.
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
        <div className="font-semibold w-full h-64 bg-white rounded-md grid place-content-center text-center">
          Bar chart here.
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
            {userActivities.map((activity, idx) => (
              <ActivityCard key={idx} />
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
    </DashboardLayout>
  );
};

export default StudentInformation;
