import { useEffect, useState } from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import profile from "../../../assets/images/student.png";
import { CustomInput } from "../Student";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Error } from "../Student/AddStudent";
import { useSecurity } from "../../../hooks/useSecurity";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";

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

const MyAccount = () => {
  const tabs = ["account details", "security settings"];
  const [twoSteps, setTwoSteps] = useState(false);
  const [activeTab, setActiveTab] = useState("account details");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [twoStepActivated, setTwoStepActivated] = useState(null);
  const [loadingTwoSteps, setLoadingTwoSteps] = useState(false);

  const { handleChangePassword, handleGetTwoStep } = useSecurity();
  const { handleSetTwoStep } = useSecurity();

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
  }, []);

  return (
    <DashboardLayout>
      {loadingTwoSteps ? (
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
              <div className="mt-10 max-w-2xl flex flex-col">
                <p className="opacity-60 font-medium">Personal Information</p>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    name="firstname"
                    label="First Name"
                    placeholder="Abdulqudus"
                  />
                  <CustomInput
                    name="lastname"
                    label="Last Name"
                    placeholder="Bello"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    name="othername"
                    label="Other Name"
                    placeholder="Onuchi"
                  />
                  <CustomInput
                    name="phone"
                    label="Phone Number"
                    placeholder="012345678"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <CustomInput
                    name="email"
                    label="Email"
                    type={"email"}
                    placeholder="nevaeh.simmons@example.com"
                  />
                  <CustomInput
                    name="phone"
                    label="Phone Number"
                    type={"date"}
                  />
                </div>
                <button className="ml-auto text-sm transition-all duration-500 bg-green-500 hover:bg-green-700 text-white px-5 py-2  mt-7 rounded ">
                  Save Changes
                </button>
              </div>
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
                  <Toggle loading={loading} />
                </div>
              </div>
              <form onSubmit={passwordFormik.handleSubmit}>
                <p className="font-semibold mt-12 opacity-60">
                  Change Password
                </p>
                <div className="grid gap-7 mt-7">
                  <div>
                    <CustomInput
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
                    <CustomInput
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
                    <CustomInput
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
    </DashboardLayout>
  );
};

export default MyAccount;
