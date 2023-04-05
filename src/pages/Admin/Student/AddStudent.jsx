import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import { useStudent } from "../../../hooks/useStudent";
import DashboardLayout from "../../../Layout/dashboardLayout";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Error = ({ text }) => {
  return <span className="text-xs text-[coral]"> {text}</span>;
};

const AddStudent = () => {
  const { handleCreateStudent } = useStudent();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    other_name: Yup.string().required(),
    email: Yup.string().required(),
    phone_number: Yup.string().required(),
    date_of_birth: Yup.string().required(),
    enrollment_status: Yup.string().required(),
    class_level_id: Yup.number().required("Class is required"),
    parent_first_name: Yup.string().required(),
    parent_last_name: Yup.string().required(),
    parent_phone_number_1: Yup.string().required(),
    parent_phone_number_2: Yup.string().required(),
    parent_home_address: Yup.string().required(),
    parent_emergency_contact: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      other_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      enrollment_status: "",
      class_level_id: "",
      parent_first_name: "",
      parent_last_name: "",
      parent_phone_number_1: "",
      parent_phone_number_2: "",
      parent_home_address: "",
      parent_emergency_contact: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      values.class_level_id = Number(values.class_level_id);
      handleCreateStudent(values)
        .then((res) => {
          toast.success(
            `Student created successfully \n  Your password is --> ${res?.data?.data?.password}`,
            {
              autoClose: false,
              theme: "colored"
            }
          );
          navigate("/admin/students");
        })
        .catch((e) => toast.error("error", e.message))
        .finally(() => setLoading(false));
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
                    <div>
                      <CustomInput
                        label="First Name"
                        {...formik.getFieldProps("first_name")}
                      />
                      {formik.touched.first_name &&
                        formik.errors.first_name && (
                          <Error text={formik.errors.first_name} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("last_name")}
                        name="last_name"
                        label="Last Name"
                      />
                      {formik.touched.last_name && formik.errors.last_name && (
                        <Error text={formik.errors.last_name} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("other_name")}
                        label="Other Name"
                      />
                      {formik.touched.other_name &&
                        formik.errors.other_name && (
                          <Error text={formik.errors.other_name} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("phone_number")}
                        label="Phone Number"
                      />
                      {formik.touched.phone_number &&
                        formik.errors.phone_number && (
                          <Error text={formik.errors.phone_number} />
                        )}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomInput
                        type="email"
                        name="email"
                        label="Email Address(optional)"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <Error text={formik.errors.email} />
                      )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("date_of_birth")}
                        type={"date"}
                        label="Date of Birth"
                      />
                      {formik.touched.date_of_birth &&
                        formik.errors.date_of_birth && (
                          <Error text={formik.errors.date_of_birth} />
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Enrollment Information</p>
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomSelect
                        {...formik.getFieldProps("enrollment_status")}
                        label="Enrollment Status"
                        options={[
                          { title: "Select One", value: "" },
                          { title: "New Student", value: 1 },
                          { title: "Old Student", value: 2 }
                          // { title: "Not Applicable", value: "Not Applicable" }
                        ]}
                      />
                      {formik.touched.enrollment_status &&
                        formik.errors.enrollment_status && (
                          <Error text={formik.errors.enrollment_status} />
                        )}
                    </div>
                    <div>
                      <CustomSelect
                        {...formik.getFieldProps("class_level_id")}
                        label="Class"
                        options={[
                          { title: "Choose One", value: "" },
                          { title: "JSS1", value: 1 },
                          { title: "JSS2", value: 2 },
                          { title: "JSS3", value: 3 },
                          { title: "SSS1", value: 4 },
                          { title: "SSS2", value: 5 },
                          { title: "SSS3", value: 6 }
                        ]}
                      />
                      {formik.touched.class_level_id &&
                        formik.errors.class_level_id && (
                          <Error text={formik.errors.class_level_id} />
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="opacity-70">Guardian/Parent Information</p>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_first_name")}
                        label="Guardian First Name"
                      />
                      {formik.touched.parent_first_name &&
                        formik.errors.parent_first_name && (
                          <Error text={formik.errors.parent_first_name} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_last_name")}
                        label="Guardian Last Name"
                      />
                      {formik.touched.parent_last_name &&
                        formik.errors.parent_last_name && (
                          <Error text={formik.errors.parent_last_name} />
                        )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_phone_number_1")}
                        label="Guardian Phone Number 1"
                      />
                      {formik.touched.parent_phone_number_1 &&
                        formik.errors.parent_phone_number_1 && (
                          <Error text={formik.errors.parent_phone_number_1} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_home_address")}
                        label="Guardian Home Address"
                      />
                      {formik.touched.parent_home_address &&
                        formik.errors.parent_home_address && (
                          <Error text={formik.errors.parent_home_address} />
                        )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_phone_number_2")}
                        label="Guardian Phone Number 2"
                      />
                      {formik.touched.parent_phone_number_2 &&
                        formik.errors.parent_phone_number_2 && (
                          <Error text={formik.errors.parent_phone_number_2} />
                        )}
                    </div>
                    <div>
                      <CustomInput
                        {...formik.getFieldProps("parent_emergency_contact")}
                        label="Guardian Emergency Contact"
                      />
                      {formik.touched.parent_emergency_contact &&
                        formik.errors.parent_emergency_contact && (
                          <Error
                            text={formik.errors.parent_emergency_contact}
                          />
                        )}
                    </div>
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
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Add Student"}
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

// 37182 for m0009 student name -> Working Tester
//790952 for m000012 student