import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import DashboardLayout from "../../../Layout/dashboardLayout";

const AddTeacher = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="mt-10">
        <div>
          <p className="text-xl font-semibold">Add New Teacher</p>
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
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput name="firstname" label="First Name" />
                    <CustomInput name="lastname" label="Last Name" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput name="othername" label="Other Name" />
                    <CustomInput name="phone_number" label="Phone Number" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
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
                  <div className="grid grid-cols-2 gap-4">
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
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      name="g_firstname"
                      label="Guardian First Name"
                    />
                    <CustomInput name="g_lastname" label="Guardian Last Name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <CustomInput
                      name="g_phone1"
                      label="Guardian Phone Number 1"
                    />
                    <CustomInput
                      name="g_address"
                      label="Guardian Home Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
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
                  className="text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                >
                  Add Teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddTeacher;
