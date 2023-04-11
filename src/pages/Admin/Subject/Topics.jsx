import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { useCurriculum } from "../../../hooks/useCurriculum";
import Loader from "../../../components/Loader";
import { NoData } from "../Student";
import { BsCloudArrowUp } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

const AdminTopics = () => {
  const inputRef = useRef(null);
  const { handleGetTopics } = useCurriculum();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [topics, setTopics] = useState([]);
  const [file, setFile] = useState(null);
  const [addTopic, setAddTopic] = useState(false);

  const { classId, subjectId, class_level_id, name } = useLocation().state;
  const { handleCreateTopic } = useCurriculum();
  const classes = {
    1: "JSS1",
    2: "JSS2",
    3: "JSS3",
    4: "SSS1",
    5: "SSS2",
    6: "SSS3"
  };

  const handleFileUpload = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setFile(file);
  };

  const getTopics = () => {
    setLoading(true);
    handleGetTopics({ classId, subjectId })
      .then((res) => {
        setTopics(res.data.data.topics);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("topic_file", file);
    formData.append("subject_id", subjectId);
    setUploading(true);
    handleCreateTopic(formData)
      .then((res) => {
        setAddTopic(false);
        setFile(null);
        getTopics();
        toast.success("Successfully uploaded file", { theme: "colored" });
      })
      .catch((e) => toast.error("Error uploading file.", { theme: "colored" }))
      .finally(() => setUploading(false));
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div>
            {topics.length ? (
              <div className="w-[800px]">
                <div className="flex justify-between mt-10">
                  <p
                    role="button"
                    className="text-xl opacity-60 font-semibold text underline"
                    onClick={() =>
                      navigate("/admin/subject/class", {
                        state: { id: classId }
                      })
                    }
                  >
                    subjects {" > "}{" "}
                    <span className="text-base no-underline">
                      {classes[class_level_id]} {" > "}{" "}
                    </span>
                    <span className="font-semibold !opacity-100">{name}</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <input className="py-2 bg-transparent outline-none border text-sm p-3 rounded w-[300px]" />
                    <button className="border px-5 py-1.5 border-appcolor">
                      Filter
                    </button>
                    <button>
                      <RiDeleteBin6Line color="red" size={20} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setAddTopic(true)}
                  className="mt-10 ml-auto text-sm border border-appcolor text-appcolor font-semibold px-5 py-1.5 rounded"
                >
                  + Add New Topic
                </button>
                <div className="mt-7 grid grid-cols-4 gap-5">
                  {topics.map((sub, idx) => (
                    <div key={idx} className="w-full">
                      <button
                        // onClick={() => navigate("/admin/subject/topics")}
                        className="w-full flex gap-2 mb-7 items-center"
                      >
                        <input className="" type={"checkbox"} />
                        <p className="flex-1 text-left text-base bg-white py-2 px-3 rounded font-semibold">
                          {sub.name}{" "}
                        </p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NoData text={"No topic found for this subject"} />
            )}{" "}
          </div>
          {addTopic && (
            <div className="text-white fixed bg-black/80 left-0 top-0 h-screen w-full grid place-content-center">
              <div className="w-[500px] h-[300px] rounded">
                <div className="mt-7">
                  <p className="text-sm font-semibold mb-2">
                    Upload Topic File here
                  </p>
                  <div className="text-center text-sm border-2 border-dashed w-full h-52 grid place-content-center">
                    <button
                      onClick={() => inputRef.current.click()}
                      type="button"
                      className="text-appcolor mb-1 px-5 py-2 rounded-md"
                    >
                      + Select Folder
                    </button>
                    <input
                      ref={inputRef}
                      type="file"
                      hidden
                      accept=".txt,.doc,.docs"
                      onChange={handleFileUpload}
                    />
                    <p className="text-xs">or drag and drop folder here.</p>
                    {file && (
                      <div className="bg-blue-300 flex items-center gap-5 text-center mx-auto mt-5 px-5 py-2 rounded">
                        <p>{file.name}</p>
                        <MdCancel
                          className="cursor-pointer"
                          onClick={() => setFile(null)}
                          size={19}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-row-reverse">
                  <button
                    type="button"
                    disabled={uploading || file == null}
                    onClick={handleSubmit}
                    className="disabled:bg-opacity-60  bg-appcolor mt-10 text-white text-sm flex items-center gap-2 px-5 py-2 rounded-md"
                  >
                    {uploading ? (
                      <>
                        <ImSpinner2 size={20} className="animate-spin" />{" "}
                        {" Uploading... "}
                      </>
                    ) : (
                      <div className="flex  items-center gap-2">
                        <BsCloudArrowUp size={20} /> {"Upload Topic "}
                      </div>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddTopic(false)}
                    className="disabled:bg-opacity-60 bg-appcolor mt-10 text-white text-sm flex items-center gap-2 px-5 py-2 rounded-md"
                  >
                    Cancel{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default AdminTopics;
