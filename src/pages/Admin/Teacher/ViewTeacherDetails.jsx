import React from "react";
import { useNavigate } from "react-router-dom";
import teacher from "../../../assets/images/teacher.png";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomInput, CustomSelect } from "../Student";

const ViewTeacherDetails = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="mt-10">
        <div className="mt-3">
          <p className="text-xl opacity-60">
            {`View Teacher Information > SSS3 > `}{" "}
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
                    <CustomInput
                      readOnly
                      defaultValue={"Bello"}
                      name="firstname"
                      label="First Name"
                    />
                    <CustomInput
                      readOnly
                      defaultValue={"Abdulqudus"}
                      name="lastname"
                      label="Last Name"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput
                      readOnly
                      defaultValue={"Onuchi"}
                      name="othername"
                      label="Other Name"
                    />
                    <CustomInput
                      readOnly
                      defaultValue={"08143852518"}
                      name="phone_number"
                      label="Phone Number"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomInput
                      type="email"
                      readOnly
                      name="email"
                      label="Email Address(optional)"
                    />
                    <CustomInput
                      readOnly
                      defaultValue={"10-10-1996"}
                      name="dob"
                      label="Date of Birth"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Enrollment Information</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-5">
                    <CustomSelect
                      readOnly
                      name="staus"
                      label="Enrollment Status"
                      options={[
                        { title: "new", value: "New" },
                        { title: "Hi", value: "hi" },
                        { title: "Hello", value: "hello" }
                      ]}
                    />
                    <CustomSelect
                      readOnly
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
                      readOnly
                      defaultValue={"Bello"}
                      name="g_firstname"
                      label="Guardian First Name"
                    />
                    <CustomInput
                      readOnly
                      defaultValue={"Suberu"}
                      name="g_lastname"
                      label="Guardian Last Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <CustomInput
                      readOnly
                      defaultValue={"08143852518"}
                      name="g_phone1"
                      label="Guardian Phone Number 1"
                    />
                    <CustomInput
                      readOnly
                      name="g_address"
                      defaultValue={"36c Okene, Kogi State"}
                      label="Guardian Home Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <CustomInput
                      readOnly
                      name="g_phone2"
                      defaultValue={"08143852518"}
                      label="Guardian Phone Number 2"
                    />
                    <CustomInput
                      readOnly
                      defaultValue={"08143852518"}
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
                      readOnly
                      defaultValue={"123456789"}
                      name="password"
                      label="Password"
                      placeholder="*********"
                    />
                    <CustomSelect
                      readOnly
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
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="border border-[coral] text-[coral] rounded-md px-5 py-2 mt-7 text-sm"
                >
                  Cancel Out
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/admin/edit-teacher-details")}
                  className="text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                >
                  Edit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewTeacherDetails;
