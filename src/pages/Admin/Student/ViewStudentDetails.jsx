import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomInput, CustomSelect } from ".";
import student from "../../../assets/images/student.png";
import DashboardLayout from "../../../Layout/dashboardLayout";

import { useStudent } from "../../../hooks/useStudent";
import moment from "moment";
import Loader from "../../../components/Loader";

const ViewStudentDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [studentDetails, setStudentDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const student_id = studentDetails?.student_id;
  const details = studentDetails?.id;
  const fullname = studentDetails?.fullname;
  const classs = studentDetails?.class;

  const { handleViewStudent } = useStudent();
  const id = state?.id;
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
                        readOnly
                        defaultValue={details?.first_name}
                        name="firstname"
                        label="First Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={details?.last_name}
                        name="lastname"
                        label="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-5">
                      <CustomInput
                        readOnly
                        defaultValue={details?.other_name}
                        name="othername"
                        label="Other Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={details?.phone_number}
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
                        defaultValue={details?.email}
                      />
                      <CustomInput
                        readOnly
                        defaultValue={details?.date_of_birth}
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
                        defaultValue={details?.enrollment_status}
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
                        readOnly
                        defaultValue={details?.parent_first_name}
                        name="g_firstname"
                        label="Guardian First Name"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={details?.parent_last_name}
                        name="g_lastname"
                        label="Guardian Last Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        readOnly
                        defaultValue={details?.parent_phone_number_1}
                        name="g_phone1"
                        label="Guardian Phone Number 1"
                      />
                      <CustomInput
                        readOnly
                        name="g_address"
                        defaultValue={details?.parent_home_address}
                        label="Guardian Home Address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <CustomInput
                        readOnly
                        name="g_phone2"
                        defaultValue={details?.parent_phone_number_2}
                        label="Guardian Phone Number 2"
                      />
                      <CustomInput
                        readOnly
                        defaultValue={details?.parent_emergency_contact}
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
                      navigate("/admin/edit-student-details", {
                        state: { id: details.user_id }
                      })
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
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </DashboardLayout>
  );
};

export default ViewStudentDetails;
