import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import teacher from "../../../assets/images/teacher.png";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomInput, CustomSelect } from "../Student";
import { useTeacher } from "../../../hooks/useTeacher";
import moment from "moment";
import Loader from "../../../components/Loader";

const ViewTeacherDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [studentDetails, setStudentDetails] = useState({});
  const [loading, setLoading] = useState(false);

  // const teacher_id = studentteacher_id;
  // const details = studentid;
  // const full_name = studentfull_name;
  // const classs = studentclass;
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

  const { handleViewTeacher } = useTeacher();
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
              {`View Teacher Information > ${classs} > `}{" "}
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
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        readOnly
                        defaultValue={first_name}
                        name="firstname"
                        label="First Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={last_name}
                        name="lastname"
                        label="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        readOnly
                        defaultValue={other_name}
                        name="othername"
                        label="Other Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={phone_number}
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
                        defaultValue={email}
                      />
                      <CustomInput
                        readOnly
                        defaultValue={date_of_birth}
                        name="dob"
                        type={"date"}
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
                        defaultValue={enrollment_status}
                      />
                      <CustomSelect
                        readOnly
                        name="class"
                        label="Class"
                        options={[
                          { title: "JSS1", value: "jss1" },
                          { title: "JSS2", value: "jss2" },
                          { title: "JSS3", value: "jss3" },
                          { title: "SSS1", value: "sss1" },
                          { title: "SSS2", value: "sss2" },
                          { title: "SSS3", value: "sss3" }
                        ]}
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
                        readOnly
                        defaultValue={parent_first_name}
                        name="g_firstname"
                        label="Guardian First Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={parent_last_name}
                        name="g_lastname"
                        label="Guardian Last Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        readOnly
                        defaultValue={parent_phone_number_1}
                        name="g_phone1"
                        label="Guardian Phone Number 1"
                      />
                      <CustomInput
                        readOnly
                        name="g_address"
                        defaultValue={parent_home_address}
                        label="Guardian Home Address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        readOnly
                        name="g_phone2"
                        defaultValue={parent_phone_number_2}
                        label="Guardian Phone Number 2"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={parent_emergency_contact}
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
                    onClick={() =>
                      navigate("/admin/edit-teacher-details", { state: { id } })
                    }
                    className="text-white bg-appcolor rounded-md px-5 py-2 mt-7 text-sm"
                  >
                    Edit Details
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

export default ViewTeacherDetails;
