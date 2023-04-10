import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import student from "../../../assets/images/student.png";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useStudent } from "../../../hooks/useStudent";
import moment from "moment";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { viewTeacher } from "../../../services/teacher";

const EditStudent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [studentDetails, setStudentDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoding] = useState(false);
  const student_id = studentDetails?.student_id;
  const details = studentDetails?.id;
  const fullname = studentDetails?.fullname;
  const classs = studentDetails?.class;
  const studentID = details?.id;

  const { handleViewStudent, handleUpdateStudent } = useStudent();
  const id = state?.id;
  const user_id = state?.user_id;

  const viewStudent = ({ id }) => {
    setLoading(true);
    handleViewStudent({ id })
      .then((res) => {
        setStudentDetails(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  const updateStudent = ({ id, data }) => {
    setUpdateLoding(true);
    id = studentID;
    handleUpdateStudent({ id, data })
      .then((res) => {
        toast.success("Successfully edited student details", {
          theme: "colored"
        });
        viewStudent({ id: state?.id });
      })
      .catch((e) => toast.error("Error" + e, { theme: "colored" }))
      .finally(() => setUpdateLoding(false));
  };

  useEffect(() => {
    console.log(id);
  }, [state]);

  const formik = useFormik({
    initialValues: {
      first_name: details?.first_name,
      last_name: details?.last_name,
      other_name: details?.other_name,
      email: details?.email,
      phone_number: details?.phone_number,
      date_of_birth: details?.date_of_birth,
      enrollment_status: details?.enrollment_status,
      class_level_id: details?.class_level_id,
      parent_first_name: details?.parent_first_name,
      parent_last_name: details?.parent_last_name,
      parent_phone_number_1: details?.parent_phone_number_1,
      parent_phone_number_2: details?.parent_phone_number_2,
      parent_home_address: details?.parent_home_address,
      parent_emergency_contact: details?.parent_emergency_contact
    },
    onSubmit: (values) => {
      updateStudent({ id, data: values });
    },
    enableReinitialize: true
  });

  useEffect(() => {
    viewStudent({ id });
  }, []);

  return (
    <DashboardLayout>
      {!loading ? (
        <div className="mt-10">
          <div className="mt-3">
            <p className="text-xl opacity-60">
              {`View Student Information > ${classs?.name} > `}{" "}
              <span className="opacity-100 font-semibold">{fullname}</span>{" "}
            </p>
            <p className="opacity-70 mt-9">
              {" "}
              <span className="font-semibold opacity-100 capitalize">
                Student ID: {student_id}{" "}
              </span>{" "}
              / Joined on {moment(details?.created_at).format("LL")}
            </p>
            <div className="flex items-center gap-7 mt-10 mb-5">
              <img className="w-36" src={student} alt="student" />
              <button
                type="button"
                className="text-white bg-appcolor rounded-md px-5 py-2 text-sm"
              >
                Student Activity
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
                        label="First Name"
                        {...formik.getFieldProps("first_name")}
                        defaultValue={formik.values.first_name}
                      />
                      <CustomInput
                        defaultValue={details?.last_name}
                        label="Last Name"
                        {...formik.getFieldProps("last_name")}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        defaultValue={details?.other_name}
                        {...formik.getFieldProps("other_name")}
                        label="Other Name"
                      />
                      <CustomInput
                        defaultValue={details?.phone_number}
                        {...formik.getFieldProps("phone_number")}
                        label="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        type="email"
                        {...formik.getFieldProps("email")}
                        label="Email Address(optional)"
                        defaultValue={details?.email}
                      />
                      <CustomInput
                        defaultValue={details?.date_of_birth}
                        {...formik.getFieldProps("date_of_birth")}
                        label="Date of Birth"
                        type={"date"}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="opacity-70">Enrollment Information</p>
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomSelect
                        {...formik.getFieldProps("enrollment_status")}
                        label="Enrollment Status"
                        options={[
                          { title: "New Student", value: 1 },
                          { title: "Old Student", value: 2 }
                          // { title: "Hello", value: "hello" }
                        ]}
                        defaultValue={details?.enrollment_status}
                      />
                      <CustomSelect
                        label="Class"
                        options={[
                          { title: "JSS1", value: 1 },
                          { title: "JSS2", value: 2 },
                          { title: "JSS3", value: 3 },
                          { title: "SSS1", value: 4 },
                          { title: "SSS2", value: 5 },
                          { title: "SSS3", value: 6 }
                        ]}
                        {...formik.getFieldProps("class_level_id")}
                        defaultValue={details?.class_level?.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="opacity-70">Guardian/Parent Information</p>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        defaultValue={details?.parent_first_name}
                        {...formik.getFieldProps("parent_first_name")}
                        label="Guardian First Name"
                      />
                      <CustomInput
                        {...formik.getFieldProps("parent_last_name")}
                        defaultValue={details?.parent_last_name}
                        label="Guardian Last Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        defaultValue={details?.parent_phone_number_1}
                        {...formik.getFieldProps("parent_phone_number_1")}
                        label="Guardian Phone Number 1"
                      />
                      <CustomInput
                        {...formik.getFieldProps("parent_home_address")}
                        defaultValue={details?.parent_home_address}
                        label="Guardian Home Address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        {...formik.getFieldProps("parent_phone_number_2")}
                        defaultValue={details?.parent_phone_number_2}
                        label="Guardian Phone Number 2"
                      />
                      <CustomInput
                        defaultValue={details?.parent_emergency_contact}
                        {...formik.getFieldProps("parent_emergency_contact")}
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
                        defaultValue={"123456789"}
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
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="border border-[coral] text-[coral] rounded-md px-5 py-2 mt-7 text-sm"
                  >
                    Cancel Out
                  </button>
                  <button
                    disabled={updateLoading}
                    type="button"
                    onClick={formik.handleSubmit}
                    className="disabled:bg-opacity-60 text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                  >
                    {updateLoading ? "Updating..." : "Edit Details"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </DashboardLayout>
  );
};

export default EditStudent;
