import { useState } from "react";
import DashboardLayout from "../../../Layout/dashboardLayout";
import profile from "../../../assets/images/student.png";
import { CustomInput } from "../Student";

const Toggle = () => {
  const [active, setActive] = useState(true);
  const handleToggle = () => setActive(!active);
  return (
    <div
      onClick={handleToggle}
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
  const [activeTab, setActiveTab] = useState("account details");
  return (
    <DashboardLayout>
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
                <CustomInput name="phone" label="Phone Number" type={"date"} />
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
                <Toggle />
              </div>
              <div className="flex gap-3 items-center">
                <p>Login Notification</p>
                <Toggle />
              </div>
            </div>
            <p className="font-semibold mt-12 opacity-60">Change Password</p>
            <div className="grid gap-7 mt-7">
              <CustomInput
                name="old_password"
                label="Old Password"
                placeholder="**********"
              />
              <CustomInput
                name="new_password"
                label="New Password"
                placeholder="***********"
              />
              <CustomInput
                name="confirm_password"
                label="Confirm New Password"
                placeholder="**********"
              />
            </div>
            <button className="ml-auto text-sm transition-all duration-500 bg-appcolor hover:bg-blue-800 text-white px-5 py-2  mt-7 rounded ">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyAccount;
