import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import { useStudent } from "../../../hooks/useStudent";
import DashboardLayout from "../../../Layout/dashboardLayout";
import * as Yup from "yup";
import { toast } from "react-toastify";

const AddStudent = () => {
  const { handleCreateStudent } = useStudent();
  const navigate = useNavigate();

  const schema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      other_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      enrollment_status: "",
      class_level_id: 1,
      parent_first_name: "",
      parent_last_name: "",
      parent_phone_number_1: "",
      parent_phone_number_2: "",
      parent_home_address: "",
      parent_emergency_contact: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      values.class_level_id = Number(values.class_level_id);
      console.log(values);
      handleCreateStudent(values)
        .then(() => {
          toast.success("Student created successfully");
          navigate("/admin/students");
        })
        .catch((e) => console.log("error", e));
    }
  });

  return (
    <DashboardLayout>
      <div className="mt-10">
        <div>
          <p className="text-xl font-semibold">Add New Student</p>
          <div>
            <form onSubmit={formik.handleSubmit} className="mt-10 max-w-2xl">
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
                    <CustomInput
                      label="First Name"
                      {...formik.getFieldProps("first_name")}
                    />
                    <CustomInput
                      {...formik.getFieldProps("last_name")}
                      name="last_name"
                      label="Last Name"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      {...formik.getFieldProps("other_name")}
                      label="Other Name"
                    />
                    <CustomInput
                      {...formik.getFieldProps("phone_number")}
                      label="Phone Number"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      type="email"
                      name="email"
                      label="Email Address(optional)"
                      {...formik.getFieldProps("email")}
                    />
                    <CustomInput
                      {...formik.getFieldProps("date_of_birth")}
                      label="Date of Birth"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Enrollment Information</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomSelect
                      {...formik.getFieldProps("enrollment_status")}
                      label="Enrollment Status"
                      options={[
                        { title: "Select One", value: "" },
                        { title: "New Student", value: "New student" },
                        { title: "Old Student", value: "Old Student" },
                        { title: "Not Applicable", value: "Not Applicable" }
                      ]}
                    />
                    <CustomSelect
                      {...formik.getFieldProps("class_level_id")}
                      label="Class"
                      options={[
                        { title: "JSS1", value: 1 },
                        { title: "JSS2", value: 2 },
                        { title: "JSS3", value: 3 },
                        { title: "SSS1", value: 4 },
                        { title: "SSS2", value: 5 },
                        { title: "SSS3", value: 6 }
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
                      {...formik.getFieldProps("parent_first_name")}
                      label="Guardian First Name"
                    />
                    <CustomInput
                      {...formik.getFieldProps("parent_last_name")}
                      label="Guardian Last Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <CustomInput
                      {...formik.getFieldProps("parent_phone_number_1")}
                      label="Guardian Phone Number 1"
                    />
                    <CustomInput
                      {...formik.getFieldProps("parent_home_address")}
                      label="Guardian Home Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <CustomInput
                      {...formik.getFieldProps("parent_phone_number_2")}
                      label="Guardian Phone Number 2"
                    />
                    <CustomInput
                      {...formik.getFieldProps("parent_emergency_contact")}
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
                  type="submit"
                  className="disabled:bg-opacity-60 text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Submitting..." : "Add Student"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddStudent;
