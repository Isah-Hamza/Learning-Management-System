import { BsCaretLeftFill } from "react-icons/bs";
import { IoMdCloudDownload } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import moment from "moment";

const LogDetails = () => {
  const navigate = useNavigate();
  const { data } = useLocation().state;

  const { json_data, log_date, log_type } = data;

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
            <p className="font-medium">{moment(log_date).format("LL")}</p>
          </div>
          <div className="flex flex-col">
            <p className="opacity-60">IP Address</p>
            <p className="font-medium">{json_data?.ip}</p>
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
            <p className="font-medium">
              {json_data?.user_agent?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="opacity-60">Descripition</p>
          <p className="font-medium max-w-[600px]">
            {` The user specified above did -> ${log_type}`}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LogDetails;
