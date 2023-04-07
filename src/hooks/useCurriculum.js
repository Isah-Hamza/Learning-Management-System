import {
  createSubject,
  getAllClass,
  getAllSubjects,
  getSingleClass,
  getTopics
} from "../services/curriculum";

export const useCurriculum = () => {
  const handleGetAllSubjects = () => {
    return new Promise((resolve, reject) => {
      getAllSubjects()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleGetAllClass = () => {
    return new Promise((resolve, reject) => {
      getAllClass()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleGetSingleClass = ({ id }) => {
    return new Promise((resolve, reject) => {
      getSingleClass({ id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleCreateSubject = (data) => {
    return new Promise((resolve, reject) => {
      createSubject(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleGetTopics = ({ classId, subjectId }) => {
    return new Promise((resolve, reject) => {
      getTopics({ classId, subjectId })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return {
    handleGetAllSubjects,
    handleGetAllClass,
    handleGetSingleClass,
    handleCreateSubject,
    handleGetTopics
  };
};
