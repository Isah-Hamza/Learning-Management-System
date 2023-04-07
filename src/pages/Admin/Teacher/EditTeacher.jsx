import React, { useEffect, useState } from "react";
import { RiRefreshFill, RiRefreshLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
// import { CustomInput, CustomSelect } from ".";
import teacher from "../../../assets/images/teacher.png";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomInput, CustomSelect } from "../Student";
import { viewTeacher } from "../../../services/teacher";
import { useTeacher } from "../../../hooks/useTeacher";
import { useFormik } from "formik";
import moment from "moment";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

const EditTeacher = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [studentDetails, setStudentDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoding] = useState(false);

  const {
    teacher_id,
    first_name,
    last_name,
    full_name,
    other_name,
    email,
    phone_number,
    date_of_birth,
    enrollment_status,
    parent_first_name,
    parent_last_name,
    parent_phone_number_1,
    parent_phone_number_2,
    parent_home_address,
    parent_emergency_contact,
    user_id,
    created_at,
    class: classs
  } = studentDetails;

  const { handleViewTeacher, handleUpdateTeacher } = useTeacher();
  const id = state?.id;

  const viewTeacher = ({ id }) => {
    setLoading(true);
    handleViewTeacher({ id })
      .then((res) => {
        setStudentDetails(res.data.data[0]);
        console.log(res);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  const updateTeacher = ({ id, data }) => {
    setUpdateLoding(true);
    handleUpdateTeacher({ id, data })
      .then((res) => {
        toast.success("Successfully edited student details", {
          theme: "colored"
        });
        viewTeacher({ id: state?.id });
      })
      .catch((e) => toast.error("Error" + e, { theme: "colored" }))
      .finally(() => setUpdateLoding(false));
  };

  const formik = useFormik({
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      other_name: other_name,
      email: email,
      phone_number: phone_number,
      date_of_birth: date_of_birth,
      enrollment_status: enrollment_status,
      classs: classs,
      parent_first_name: parent_first_name,
      parent_last_name: parent_last_name,
      parent_phone_number_1: parent_phone_number_1,
      parent_phone_number_2: parent_phone_number_2,
      parent_home_address: parent_home_address,
      parent_emergency_contact: parent_emergency_contact
    },
    onSubmit: (values) => {
      values.class_level_id = values.classs;
      delete values.classs;
      updateTeacher({ id, data: values });
    },
    enableReinitialize: true
  });

  useEffect(() => {
    viewTeacher({ id });
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10">
          <div className="mt-3">
            <p className="text-xl opacity-60">
              {`Teacher Information >  ${classs}  > `}{" "}
              <span className="opacity-100 font-semibold">{full_name}</span>{" "}
            </p>
            <p className="opacity-70 mt-9">
              {" "}
              <span className="font-semibold opacity-100">
                Teacher ID: {teacher_id}{" "}
              </span>{" "}
              / Joined on {moment(created_at).format("LL")}
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
                      onClick={() => navigate(-1, { state: { id } })}
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
                        defaultValue={last_name}
                        label="Last Name"
                        {...formik.getFieldProps("last_name")}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        defaultValue={other_name}
                        {...formik.getFieldProps("other_name")}
                        label="Other Name"
                      />
                      <CustomInput
                        defaultValue={phone_number}
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
                        defaultValue={email}
                      />
                      <CustomInput
                        defaultValue={date_of_birth}
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
                        defaultValue={enrollment_status}
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
                        defaultValue={classs}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="opacity-70">Guardian/Parent Information</p>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        defaultValue={parent_first_name}
                        {...formik.getFieldProps("parent_first_name")}
                        label="Guardian First Name"
                      />
                      <CustomInput
                        {...formik.getFieldProps("parent_last_name")}
                        defaultValue={parent_last_name}
                        label="Guardian Last Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        defaultValue={parent_phone_number_1}
                        {...formik.getFieldProps("parent_phone_number_1")}
                        label="Guardian Phone Number 1"
                      />
                      <CustomInput
                        {...formik.getFieldProps("parent_home_address")}
                        defaultValue={parent_home_address}
                        label="Guardian Home Address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        {...formik.getFieldProps("parent_phone_number_2")}
                        defaultValue={parent_phone_number_2}
                        label="Guardian Phone Number 2"
                      />
                      <CustomInput
                        defaultValue={parent_emergency_contact}
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
      )}
    </DashboardLayout>
  );
};

export default EditTeacher;
