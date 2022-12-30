import React from "react";
import { RiRefreshFill, RiRefreshLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import teacher from "../../../assets/images/teacher.png";
import DashboardLayout from "../../../Layout/dashboardLayout";

const EditTeacher = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="mt-10">
        <div className="mt-3">
          <p className="text-xl opacity-60">
            {`Teacher Information > SSS3 > `}{" "}
            <span className="opacity-100 font-semibold">
              Bello Abdulqudus Onuchi
            </span>{" "}
          </p>
          <p className="opacity-70 mt-9">
            {" "}
            <span className="font-semibold opacity-100">
              Teacher ID: M1602200{" "}
            </span>{" "}
            / Joined on 23 October, 2022
          </p>
          <div className="flex items-center gap-7 mt-10 mb-5">
            <img className="w-36" src={teacher} alt="teacher" />
            <button
              type="button"
              className="text-white bg-appcolor rounded-md px-5 py-2 text-sm"
            >
              Teacher Activity
            </button>
          </div>
          <div>
            <form className="mt-10 max-w-2xl">
              <div>
                <div className="flex items-center justify-between">
                  <p className="opacity-70">Personal Information</p>
                  <button
                    type="button"
                    className="hover:underline text-[coral] font-semibold"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                </div>
                <div className="mt-7">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput name="firstname" label="First Name" />
                    <CustomInput name="lastname" label="Last Name" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput name="othername" label="Other Name" />
                    <CustomInput name="phone_number" label="Phone Number" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput
                      type="email"
                      name="email"
                      label="Email Address(optional)"
                    />
                    <CustomInput name="dob" label="Date of Birth" />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Enrollment Information</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomSelect
                      name="staus"
                      label="Enrollment Status"
                      options={[
                        { title: "new", value: "New" },
                        { title: "Hi", value: "hi" },
                        { title: "Hello", value: "hello" }
                      ]}
                    />
                    <CustomSelect
                      name="class"
                      label="Class"
                      options={[
                        { title: "SSS1", value: "ss1" },
                        { title: "SSS2", value: "ss2" },
                        { title: "SSS3", value: "ss3" }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Guardian/Parent Information</p>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput
                      name="g_firstname"
                      label="Guardian First Name"
                    />
                    <CustomInput name="g_lastname" label="Guardian Last Name" />
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <CustomInput
                      name="g_phone1"
                      label="Guardian Phone Number 1"
                    />
                    <CustomInput
                      name="g_address"
                      label="Guardian Home Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <CustomInput
                      name="g_phone2"
                      label="Guardian Phone Number 2"
                    />
                    <CustomInput
                      name="g_emergency"
                      label="Guardian Emergency Contact"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Security Settings</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="*********"
                    />
                    <CustomSelect
                      name="permission"
                      label="Permission"
                      options={[
                        { title: "Allowed", value: "allowed" },
                        { title: "Not Allowed", value: "not_allowed" }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Access Priviledge</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomSelect
                      name="staus"
                      label="Student Information"
                      options={[
                        { title: "add", value: "add" },
                        { title: "view", value: "view" },
                        { title: "edit", value: "edit" },
                        { title: "delete", value: "delete" }
                      ]}
                    />
                    <CustomSelect
                      name="class"
                      label="Subject Accessibility"
                      options={[
                        { title: "add", value: "add" },
                        { title: "view", value: "view" },
                        { title: "edit", value: "edit" },
                        { title: "delete", value: "delete" }
                      ]}
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-5">
                    <CustomSelect
                      name="staus"
                      label="Curriculum Developer"
                      multliple
                      options={[
                        { title: "add", value: "add" },
                        { title: "view", value: "view" },
                        { title: "edit", value: "edit" },
                        { title: "delete", value: "delete" }
                      ]}
                    />
                    <CustomSelect
                      name="class"
                      label="Virtual Environment"
                      multliple
                      options={[
                        { title: "add", value: "add" },
                        { title: "view", value: "view" },
                        { title: "edit", value: "edit" },
                        { title: "delete", value: "delete" }
                      ]}
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-5">
                    <CustomSelect
                      name="learner_profile"
                      label="Learner Profile"
                      multliple
                      options={[
                        { title: "Allow", value: "allow" },
                        { title: "Not Allowed", value: "not_allowed" },
                        { title: "edit", value: "edit" },
                        { title: "delete", value: "delete" }
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 mt-5">
                <button
                  type="button"
                  // onClick={() => navigate(-1)}
                  className="flex items-center gap-1 border border-appcolor text-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                >
                  <RiRefreshLine />
                  Reset Access
                </button>
                <button
                  type="button"
                  className="text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                >
                  Update Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditTeacher;
