import React, { useEffect, useState } from "react";
import { BsCaretLeftFill, BsCloud } from "react-icons/bs";
import StudentDashboardLayout from "../../../Layout/studentDashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import { useCurriculum } from "../../../hooks/useCurriculum";
import { useStudent } from "../../../hooks/useStudent";
import { NoData } from "../../Admin/Student";

const SubjectPage = () => {
  const [subjectName, setSubjectName] = useState(null);
  const [activeTopic, setActiveTopic] = useState("Topic 1");
  const [topics, setTopics] = useState();
  const [loading, setLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  const { handleGetTopics } = useCurriculum();
  const { handleReadTopic } = useStudent();
  const { subjectId, classId } = useLocation().state;
  console.log("location", useLocation().state);
  const goBack = (url) => {
    if (url) navigate(url);
    else navigate(-1);
  };

  const getTopics = () => {
    setLoading(true);
    handleGetTopics({ classId, subjectId })
      .then((res) => {
        setTopics(res.data.data.topics);
        setSubjectName(res.data.data.name);
        setActiveTopic(res.data.data.topics[0]);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const readTopic = ({ topic_id }) => {
    console.log(activeTopic);
    setContentLoading(true);
    handleReadTopic({ topic_id })
      .then((res) => {
        setContent(res.data.data.content);
      })
      .catch((e) => console.log(e))
      .finally(() => setContentLoading(false));
  };

  useEffect(() => {
    // if (!activeTopic || !topics?.length) return;
    getTopics();
  }, []);

  useEffect(() => {
    if (!activeTopic?.id) return;
    readTopic({ topic_id: activeTopic?.id });
  }, [activeTopic]);

  return (
    <StudentDashboardLayout readingPage={true}>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex">
          <div className="w-52 overflow-y-auto h-screen bg-[#004185] px-5 flex flex-col gap-4 pt-14">
            {topics?.map((topic, idx) => (
              <button
                onClick={() => setActiveTopic(topic)}
                className={`font-medium w-full text-center text-sm py-2 text-white rounded ${
                  topic.name === activeTopic.name && "border"
                }`}
                key={idx}
              >
                {topic.name}
              </button>
            ))}
          </div>
          {contentLoading ? (
            <div className="flex-1">
              <Loader />
            </div>
          ) : (
            <div className="flex-1 px-10 py-16 h-screen overflow-auto">
              <button
                onClick={() => goBack("/student/subjects/")}
                className="flex gap-1 items-center mb-8 text-[coral]"
              >
                <BsCaretLeftFill size={16} color="coral" />
                back
              </button>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xl font-semibold">{subjectName}</p>
                  {activeTopic?.name ? (
                    <div className="mt-2 px-4 py-3 font-medium text-[#0072EA] bg-[#EBF5FF]">
                      {activeTopic?.name}
                    </div>
                  ) : null}
                </div>
                <button className="font-semibold flex items-center gap-2 text-sm py-2 mt-3 px-5 border rounded-md">
                  {" "}
                  <BsCloud /> Download Course
                </button>
              </div>
              {content ? (
                <div className="mt-10">
                  <p>{content}</p>
                </div>
              ) : (
                <div className="-mt-20">
                  {
                    <NoData
                      height={"calc(100vh - 155px)"}
                      text={"No topics found for this subject"}
                      url={null}
                    />
                  }
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </StudentDashboardLayout>
  );
};

export default SubjectPage;
