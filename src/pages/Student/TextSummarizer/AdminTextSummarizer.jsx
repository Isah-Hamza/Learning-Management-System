import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";
import { BsCaretLeftFill } from "react-icons/bs";
import DashboardLayout from "../../../Layout/dashboardLayout";

const AdminTextSummarizer = () => {
  const tabs = ["PDF", "TEXT"];
  const [activeTab, setActiveTab] = useState(1);
  const [isSummarized, setIsSummarized] = useState(false);
  const [response, setresponse] = useState([
    "#Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec molestie elementum natoque. Sed est id eget sed viverra aliquam. Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius orci. Amet suspendisse risus vitae iaculis porttitor ridiculus a ullamcorper ultricies.",
    "#Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec molestie elementum natoque. Sed est id eget sed viverra aliquam. Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius orci. Amet suspendisse risus vitae iaculis porttitor ridiculus a ullamcorper ultricies.",
    "Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec molestie elementum natoque. Sed est id eget sed viverra aliquam. Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi vitae tempor non dignissim pulvinar neque. Cras hac aliquam varius orci. Amet suspendisse risus vitae iaculis porttitor ridiculus a ullamcorper ultricies."
  ]);

  function goBack() {
    setIsSummarized(false);
  }

  return (
    <DashboardLayout>
      <div className="mt-14">
        <div className="flex justify-between items-center mb-10">
          <p className="text-xl font-semibold">Text Summarizer</p>
          {isSummarized && (
            <button
              onClick={() => goBack()}
              className="flex gap-1 items-center text-[coral]"
            >
              <BsCaretLeftFill size={16} color="coral" />
              back
            </button>
          )}
        </div>
        {!isSummarized ? (
          <>
            <div className="mt-10">
              <div className="flex gap-20">
                {tabs.map((tab, idx) => (
                  <button
                    onClick={() => setActiveTab(idx + 1)}
                    className={`relative px-10 ${
                      activeTab === idx + 1 ? "font-semibold" : "font-normal"
                    }`}
                    key={idx}
                  >
                    {tab}
                    <div
                      className={`transition-all duration-500 ease-in-out absolute top-8 left-0 h-[3px] rounded-md bg-appcolor ${
                        activeTab === idx + 1 ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mt-16">
              {activeTab === 1 ? (
                <div className="text-center text-sm border-2 border-dashed rounded w-full h-60 grid place-content-center">
                  <button
                    type="button"
                    className="bg-appcolor text-sm mx-auto text-white w-fit mb-2 px-5 py-2 rounded-md"
                  >
                    Choose File
                  </button>
                  <p className="text-xs">
                    or drag and drop .PDF or .DOCX file here.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col max-w-[900px]">
                  <textarea
                    placeholder="paste text here..."
                    className="placeholder:italic text-sm  w-full h-64 p-3 border outline-none resize-none rounded"
                  ></textarea>
                  <button
                    onClick={() => setIsSummarized(true)}
                    type="button"
                    className="px-5 py-2 text-sm bg-appcolor text-white mt-3 ml-auto rounded"
                  >
                    Summarize
                  </button>
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="mt-5 grid grid-cols-[.5fr,.5fr] gap-10">
            <div className="flex flex-col">
              <p className="text-sm font-medium">Original Document</p>

              <div className="text-sm bg-[#E9ECEF] p-4 rounded mt-5">
                Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
                molestie elementum natoque. Sed est id eget sed viverra aliquam.
                Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
                vitae tempor non dignissim pulvinar neque. Cras hac aliquam
                varius orci. Amet suspendisse risus vitae iaculis porttitor
                ridiculus a ullamcorper ultricies. Sit mauris mi eget odio
                faucibus non pellentesque. Fermentum tempus bibendum morbi ut
                lectus enim nunc aenean non. Donec feugiat consectetur faucibus
                viverra netus placerat malesuada. Nam fringilla ullamcorper
                massa eget odio rhoncus aliquam. Viverra arcu tempor et
                condimentum varius at at. Neque vulputate nunc dui eu vitae
                lacus pretium.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
                molestie elementum natoque. Sed est id eget sed viverra aliquam.
                Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
                vitae tempor non dignissim pulvinar neque. Cras hac aliquam
                varius orci. Amet suspendisse risus vitae iaculis porttitor
                ridiculus a ullamcorper ultricies. Sit mauris mi eget odio
                faucibus non pellentesque. Fermentum tempus bibendum morbi ut
                lectus enim nunc aenean non. Donec feugiat consectetur faucibus
                viverra netus placerat malesuada. Nam fringilla ullamcorper
                massa eget odio rhoncus aliquam. Viverra arcu tempor et
                condimentum varius at at. Neque vulputate nunc dui eu vitae
                lacus pretium.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Tortor nisi a in nec
                molestie elementum natoque. Sed est id eget sed viverra aliquam.
                Sagittis iaculis sit tincidunt non est justo volutpat. Vitae mi
                vitae tempor non dignissim pulvinar neque. Cras hac aliquam
                varius orci. Amet suspendisse risus vitae iaculis porttitor
                ridiculus a ullamcorper ultricies.
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Summarized</p>
              <div className="mt-5 flex flex-col gap-5">
                {response.map((text, idx) => (
                  <div key={idx} className="bg-[#EBF5FF] p-4 rounded">
                    <p className="text-sm">{text}</p>
                    <div className="mt-5 flex justify-end gap-4">
                      <button>
                        <FiCopy />
                      </button>
                      <button>
                        <BiRefresh size={22} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminTextSummarizer;
