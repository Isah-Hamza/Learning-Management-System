import React, { useRef, useState } from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../Layout/dashboardLayout";
import { CustomInput, CustomSelect } from "../Student";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Error } from "../Student/AddStudent";
import { useCurriculum } from "../../../hooks/useCurriculum";
import { toast } from "react-toastify";

const AddNewSubject = () => {
  const [files, setFiles] = useState();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const formData1 = new FormData();
  const formData2 = new FormData();
  const { handleCreateSubject } = useCurriculum();

  // const uploadFiles = async (files) => {
  //   for (let i = 0; i < files.length; i++) {
  //     formData2.append("topic_files", files[i]);
  //   }
  //   console.log("done with fu");
  //   for (let pair of formData2.entries()) {
  //     console.log(pair[0] + ": " + pair[1]);
  //   }
  // };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // uploadFiles(files);
    setFiles(files);
  };

  const schema = Yup.object().shape({
    subject_name: Yup.string().required(),
    class: Yup.string().required(),
    topic_files: Yup.mixed().required()
  });

  const formik = useFormik({
    initialValues: {
      subject_name: "",
      class: "",
      topic_files: []
    },
    validationSchema: schema,
    onSubmit(values) {
      for (let i = 0; i < files.length; i++) {
        formData2.append("topic_files[]", files[i]);
      }
      formData2.append("subject_name", values.subject_name);
      formData2.append("class", values.class);

      for (let pair of formData2.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      handleCreateSubject(formData2)
        .then((res) => console.log(res))
        .catch((e) => {
          console.log(e);
          toast.error(Error + e, { theme: "colored" });
        });
    }
  });
  return (
    <DashboardLayout>
      <form onSubmit={formik.handleSubmit} className="mt-11 w-[650px]">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add New Subject</p>
          <button
            type="button"
            className="hover:font-semibold transition-all duration-500 ease-linear flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack />
            Go Back
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <div>
            <CustomInput
              type="name"
              label="Name of Subject"
              {...formik.getFieldProps("subject_name")}
            />
            {formik.touched.subject_name && formik.errors.subject_name && (
              <Error text={formik.errors.subject_name} />
            )}
          </div>
          <div>
            <CustomSelect
              name="class"
              label="Class"
              options={[
                { title: "Select One", value: "" },
                { title: "JSS1", value: "JSS1" },
                { title: "JSS2", value: "JSS2" },
                { title: "JSS3", value: "JSS3" },
                { title: "SSS1", value: "SS1" },
                { title: "SSS2", value: "SS22" },
                { title: "SSS3", value: "SSS3" }
              ]}
              {...formik.getFieldProps("class")}
            />
            {formik.touched.class && formik.errors.class && (
              <Error text={formik.errors.class} />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-6">
          <div>
            <CustomSelect
              name="visibility"
              label="Visibility"
              options={[
                { title: "Shown", value: "shown" },
                { title: "Hidden", value: "hidden" }
              ]}
              {...formik.getFieldProps("visibility")}
            />
          </div>
          <CustomSelect
            name="teacher"
            label="Teacher"
            options={[
              { title: "Mr. Teacher A", value: "mr_a" },
              { title: "Mr. Teacher B", value: "mr_b" },
              { title: "Mr. Teacher C", value: "mr_c" }
            ]}
            {...formik.getFieldProps("teacher")}
          />
        </div>
        <div className="mt-7">
          <p className="text-sm font-semibold mb-2">Upload Subject Folder</p>
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
              onChange={handleFileUpload}
              multiple
            />
            <p className="text-xs">or drag and drop folder here.</p>
          </div>
          {formik.touched.topic_files && formik.errors.topic_files && (
            <Error text={formik.errors.topic_files} />
          )}
        </div>
        <button
          // onClick={customSubmit}
          type="submit"
          className="bg-appcolor ml-auto mt-10 text-white text-sm flex items-center gap-2 px-5 py-2 rounded-md"
        >
          <BsCloudArrowUp size={20} /> Upload Subject
        </button>
      </form>
    </DashboardLayout>
  );
};

export default AddNewSubject;
