import { BsCaretLeftFill } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";

const LogDetails = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <DashboardLayout>
      <div className="mt-14 flex flex-col gap-7">
        <button
          onClick={() => goBack()}
          className="-mb-7 flex gap-1 items-center text-[coral]"
        >
          <BsCaretLeftFill size={16} color="coral" />
          back
        </button>
        <div className="w-full flex justify-between items-end">
          <p className="text-xl font-semibold">
            Forensic Investigator (Activity Log)
          </p>
          <div className="flex items-center gap-2">
            <button className="max-h-[52px] font-semibold border text-appcolor flex items-center gap-2 py-2.5 px-5 text-sm rounded">
              <IoMdCloudDownload size={18} />
              Download Log
            </button>{" "}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 max-w-[600px] mt-10">
          <div className="flex flex-col gap-2">
            <p className="opacity-60">Status</p>
            <div className="w-2 h-2 rounded-full bg-[coral]"></div>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">Date / Time</p>
            <p className="font-medium">12/12/2012</p>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">IP Address</p>
            <p className="font-medium">192.168.20.12</p>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">Duration</p>
            <p className="font-medium">5s</p>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">User</p>
            <p className="font-medium">Unknown</p>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">Executable</p>
            <p className="font-medium">Safari</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="opacity-60">Descripition</p>
          <p className="font-medium max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
            molestie elementum natoque. Sed est id eget sed viverra aliquam.
            Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
            vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius
            orci. Amet suspendisse risus vitae iaculis porttitor ridiculus a
            ullamcorper ultricies.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LogDetails;
