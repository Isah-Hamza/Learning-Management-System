import {
  getAllStudents,
  createStudent,
  viewStudent,
  updateStudent,
  deleteStudent,
  downloadStudent,
  searchStudent,
  readTopic
} from "../services/student";

export const useStudent = () => {
  const handleGetAllStudents = () => {
    return new Promise((resolve, reject) => {
      getAllStudents()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleCreateStudent = (data) => {
    return new Promise((resolve, reject) => {
      createStudent(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  const handleViewStudent = ({ id }) => {
    return new Promise((resolve, reject) => {
      viewStudent({ id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleUpdateStudent = ({ id, data }) => {
    return new Promise((resolve, reject) => {
      updateStudent({ id, data })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleDeleteStudent = ({ id }) => {
    return new Promise((resolve, reject) => {
      deleteStudent({ id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleDownloadStudent = () => {
    return new Promise((resolve, reject) => {
      downloadStudent()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleSearchStudent = ({ search_term, class_level_id }) => {
    return new Promise((resolve, reject) => {
      searchStudent({ class_level_id, search_term })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };
  const handleReadTopic = ({ topic_id }) => {
    return new Promise((resolve, reject) => {
      readTopic({ topic_id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return {
    handleGetAllStudents,
    handleCreateStudent,
    handleViewStudent,
    handleUpdateStudent,
    handleDeleteStudent,
    handleDownloadStudent,
    handleSearchStudent,
    handleReadTopic
  };
};
