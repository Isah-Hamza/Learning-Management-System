import { useEffect, useState } from "react";
import profile from "../../../assets/images/student.png";
import { CustomInput, CustomPasswordInput } from "../../Admin/Student";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import Loader from "../../../components/Loader";
import { useSecurity } from "../../../hooks/useSecurity";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Error } from "../../Admin/Student/AddStudent";
import { useStudent } from "../../../hooks/useStudent";
import TeacherDashboardLayout from "../../../Layout/TeacherDashboardLayout";
import { useTeacher } from "../../../hooks/useTeacher";

const Toggle = ({ activated, onChange, loading }) => {
  const [active, setActive] = useState(() => (activated ? true : false));
  const handleToggle = () => setActive(!active);
  return (
    <div
      onClick={() => {
        handleToggle();
        if (onChange && !loading) onChange();
      }}
      className={`${
        active ? "bg-appcolor" : "bg-gray-500"
      } w-9 h-4 rounded-xl `}
    >
      <div
        className={`${
          active ? "translate-x-5 " : "translate-x-0"
        } transition-all duration-500 ease-in-out bg-white w-4 h-4 rounded-full`}
      ></div>
    </div>
  );
};

const TeacherAccount = () => {
  const tabs = ["account details", "security settings"];
  const [activeTab, setActiveTab] = useState("account details");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [twoStepActivated, setTwoStepActivated] = useState(null);
  const [loadingTwoSteps, setLoadingTwoSteps] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [id, setId] = useState(null);

  const { handleChangePassword, handleGetTwoStep } = useSecurity();
  const { handleSetTwoStep } = useSecurity();
  const { handleGetLoggedInTeacher, handleViewTeacher, handleUpdateTeacher } =
    useTeacher();

  const formik = useFormik({
    initialValues: {
      first_name: adminData?.first_name ?? "",
      last_name: adminData?.last_name ?? "",
      other_name: adminData?.other_name ?? "",
      email: adminData?.email ?? "",
      phone_number: adminData?.phone_number ?? "",
      date_of_birth: adminData?.date_of_birth ?? ""
    },
    enableReinitialize: true,
    onSubmit(values) {
      console.log(values);
    }
  });

  const passwordSchema = Yup.object().shape({
    new_password: Yup.string()
      .required("New password is required")
      .min(8, "Password can't be less than 8 characters"),
    current_password: Yup.string().required("Old password is required"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("new_password"), null],
      "Passwords doesn't match"
    )
  });

  const passwordFormik = useFormik({
    initialValues: {
      new_password: "",
      current_password: "",
      confirm_password: ""
    },
    validationSchema: passwordSchema,
    onSubmit(values) {
      console.log(values);
      setPasswordLoading(true);
      handleChangePassword(values)
        .then((res) => {
          toast.success("Password changed successfully", { theme: "colored" });
          passwordFormik.resetForm();
        })
        .catch((e) => {
          const [value] = Object.values(e.response.data.data);
          toast.error(value, { theme: "colored" });
        })
        .finally(() => setPasswordLoading(false));
    }
  });

  const viewTeacher = ({ id }) => {
    setLoading(true);
    handleViewTeacher({ id })
      .then((res) => {
        setAdminData(res.data.data[0]);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  const getLoggedInTeacher = () => {
    setLoading(true);
    handleGetLoggedInTeacher()
      .then((res) => {
        setUserId(res.data.data.teacher.id);
        setId(res.data.data.teacher.id);
        viewTeacher({ id: res.data.data.teacher.id });
      })
      .catch((e) => console.log(e))
  };

  const getTwoStep = () => {
    setLoadingTwoSteps(true);
    handleGetTwoStep()
      .then((res) => {
        setTwoStepActivated(res.data.data.enabled);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoadingTwoSteps(false);
      });
  };

  const setTwoStep = () => {
    const data = {
      enabled: !twoStepActivated
    };
    handleSetTwoStep(data)
      .then((res) => {
        toast.success(res.data.message, { theme: "colored" });
        getTwoStep();
      })
      .catch((e) => {
        toast.success(e, { theme: "colored" });
      })
      .finally(() => setLoading(false));
    console.log("hello");
  };

  useEffect(() => {
    getTwoStep();
    getLoggedInTeacher();
  }, []);

  return (
    <TeacherDashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10">
          <p className="text-xl font-semibold">My Account</p>
          <div className="flex gap-10 mt-8 pb-3 border-b">
            {tabs.map((tab, idx) => (
              <button
                className={`${
                  tab === activeTab && "relative "
                } capitalize px-5 text-base`}
                onClick={() => setActiveTab(tab)}
                key={idx}
              >
                {tab === activeTab && (
                  <div
                    className={`w-full  absolute left-0 -bottom-3 h-1  transition-all duration-500 ease-in-out bg-appcolor rounded-lg`}
                  ></div>
                )}
                {tab}
              </button>
            ))}
          </div>
          {activeTab === tabs[0] ? (
            <div>
              <div className="flex gap-7 mt-10 items-center">
                <img className="w-40" src={profile} />
                <button className="text-sm bg-appcolor hover:bg-blue-800 transition-all duration-500 text-white px-5 py-2 rounded ">
                  Change photo
                </button>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-10 max-w-2xl flex flex-col"
              >
                <p className="opacity-60 font-medium">Personal Information</p>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.first_name}
                    name="firstname"
                    label="First Name"
                    placeholder="Abdulqudus"
                    {...formik.getFieldProps("first_name")}
                  />
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.last_name}
                    label="Last Name"
                    placeholder="Bello"
                    {...formik.getFieldProps("last_name")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.other_name}
                    label="Other Name"
                    placeholder="Onuchi"
                    {...formik.getFieldProps("other_name")}
                  />
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.phone_number}
                    name="phone"
                    label="Phone Number"
                    placeholder="012345678"
                    {...formik.getFieldProps("phone_number")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.email}
                    name="email"
                    label="Email"
                    type={"email"}
                    placeholder="nevaeh.simmons@example.com"
                    {...formik.getFieldProps("email")}
                  />
                  <CustomInput
                    readOnly={true}
                    defaultValue={formik?.values?.date_of_birth}
                    label="Date"
                    type={"date"}
                    {...formik.getFieldProps("date_of_birth")}
                  />
                </div>
                <button
                  disabled={true}
                  type="submit"
                  className=" disabled:bg-opacity-60 ml-auto text-sm transition-all duration-500 bg-green-500 hover:bg-green-700 text-white px-5 py-2  mt-7 rounded "
                >
                  {updating ? "Updating..." : "Save Changes"}
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-md mt-9 flex flex-col">
              <p className="font-semibold opacity-60">Security Options</p>
              <div className="flex items-center gap-5 mt-2 w-full justify-between">
                <div className="flex gap-3 items-center">
                  <p>Two Factor Authentication</p>
                  <Toggle
                    activated={twoStepActivated}
                    onChange={setTwoStep}
                    loading={loading}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <p>Login Notification</p>
                  <Toggle />
                </div>
              </div>
              <form onSubmit={passwordFormik.handleSubmit}>
                <p className="font-semibold mt-12 opacity-60">
                  Change Password
                </p>
                <div className="grid gap-7 mt-7">
                  <div>
                    <CustomPasswordInput
                      name=""
                      label="Old Password"
                      placeholder="**********"
                      {...passwordFormik.getFieldProps("current_password")}
                    />
                    {passwordFormik.touched.current_password &&
                      passwordFormik.errors.current_password && (
                        <Error text={passwordFormik.errors.current_password} />
                      )}
                  </div>
                  <div>
                    <CustomPasswordInput
                      name="new_password"
                      label="New Password"
                      placeholder="***********"
                      {...passwordFormik.getFieldProps("new_password")}
                    />
                    {passwordFormik.touched.new_password &&
                      passwordFormik.errors.new_password && (
                        <Error text={passwordFormik.errors.new_password} />
                      )}
                  </div>
                  <div>
                    <CustomPasswordInput
                      name="confirm_password"
                      label="Confirm New Password"
                      placeholder="**********"
                      {...passwordFormik.getFieldProps("confirm_password")}
                    />
                    {passwordFormik.touched.confirm_password &&
                      passwordFormik.errors.confirm_password && (
                        <Error text={passwordFormik.errors.confirm_password} />
                      )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={passwordLoading}
                  className="disabled:bg-opacity-60 ml-auto text-sm transition-all duration-500 bg-appcolor hover:bg-blue-800 text-white px-5 py-2  mt-7 rounded "
                >
                  {passwordLoading ? "Saving Changes ..." : "Save Changes"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </TeacherDashboardLayout>
  );
};

export default TeacherAccount;
